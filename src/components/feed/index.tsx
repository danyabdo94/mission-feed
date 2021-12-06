import React, { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Header from "../../atoms/header";
import Spinner from "../../atoms/spinner";
import { iphoneX } from "../../devices";
import { useGet_FeedLazyQuery } from "../../generated/graphql";
import MissionView from "./mission";

const StyledHeaderContainer = styled.div`
    display: flex;
    ${iphoneX} {
        margin-top: 40px;
        margin-left: 20px;
    }
`;
interface GroupedByDates {
    [x: string]: string;
}

const Feed: React.FC = () => {
    const pageSize = 4;
    const [offset, setOffset] = useState<number>(0);

    const [firstMissions, setFirstMissions] = useState<GroupedByDates>({});

    const formatDate = (date: string) => {
        const sliced = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" })
            .format(new Date(date))
            .split(" ");

        return `${sliced[1].split(",")[0]} ${sliced[0]} ${sliced[2]}`;
    };

    const [getFeed, { error, data, fetchMore }] = useGet_FeedLazyQuery({
        onCompleted: (data) => {
            if (data?.getFeed.hasNextPage) {
                setOffset(offset + pageSize);
                groupMissionsByDate(data?.getFeed.items);
            }
        },
        onError: () => {
            console.error(error);
        },
        notifyOnNetworkStatusChange: true,
    });

    const groupMissionsByDate = (items: any[]) => {
        const datesOccupied: GroupedByDates = {};

        const localFirstMissions: GroupedByDates = {};

        items.forEach((item) => {
            const formattedDate = formatDate(item.date);

            if (!datesOccupied[formattedDate]) {
                localFirstMissions[item.title + item.date] = formattedDate;
                datesOccupied[formattedDate] = item.title;
            }
        });

        setFirstMissions(localFirstMissions);
    };

    console.log({ firstMissions });

    useEffect(() => {
        getFeed({
            variables: {
                limit: pageSize,
                offset: offset,
            },
        });
        // we need it to run just once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const nextPage = () => {
        if (data?.getFeed.hasNextPage) {
            fetchMore({
                variables: {
                    limit: pageSize,
                    offset: offset,
                },
            });
        }
    };
    return (
        <InfiniteScroll
            dataLength={data?.getFeed.items.length || 0}
            next={nextPage}
            hasMore={data?.getFeed.hasNextPage || false}
            loader={<Spinner />}
            style={{ marginBottom: 16 }}
        >
            {data?.getFeed.items.map((item) => (
                <Fragment key={item.title + item.date}>
                    {firstMissions[item.title + item.date] && (
                        <StyledHeaderContainer>
                            <Header>{firstMissions[item.title + item.date]}</Header>
                        </StyledHeaderContainer>
                    )}
                    <MissionView mission={item} />
                </Fragment>
            ))}
        </InfiniteScroll>
    );
};

export default Feed;
