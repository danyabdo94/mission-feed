import React, { Fragment, useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Header from "../../atoms/header";
import Spinner from "../../atoms/spinner";
import { LanguageContext } from "../../contexts/languages";
import { iphoneX } from "../../devices";
import { useGet_FeedLazyQuery } from "../../generated/graphql";
import MetaTags from "../meta-tags";
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
    const { language } = useContext(LanguageContext);

    const pageSize = 4;
    const [offset, setOffset] = useState<number>(0);

    const [firstMissions, setFirstMissions] = useState<GroupedByDates>({});

    const formatDate = (date: string) =>
        new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }).format(new Date(date));

    const localeDate = (date: string) => {
        const sliced = new Intl.DateTimeFormat(language, {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).formatToParts(new Date(date));

        let constructedData = { day: "", month: "", year: "" };
        sliced.forEach((element) => {
            switch (element.type) {
                case "day":
                    constructedData.day = element.value;
                    break;
                case "month":
                    constructedData.month = element.value;
                    break;
                case "year":
                    constructedData.year = element.value;
                    break;
                default:
                    break;
            }
        });

        return `${constructedData.day} ${constructedData.month} ${constructedData.year} `;
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
            {data?.getFeed.items.map((item, index) => (
                <Fragment key={item.title + item.date}>
                    {firstMissions[item.title + item.date] && (
                        <StyledHeaderContainer>
                            <Header>{localeDate(firstMissions[item.title + item.date])}</Header>
                        </StyledHeaderContainer>
                    )}

                    <MissionView mission={item} />

                    {index === data?.getFeed.items.length - 1 && <MetaTags mission={item} />}
                </Fragment>
            ))}
        </InfiniteScroll>
    );
};

export default Feed;
