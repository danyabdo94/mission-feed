import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../../atoms/spinner";
import { iphoneX } from "../../devices";
import { useGet_FeedLazyQuery, useGet_FeedQuery } from "../../generated/graphql";
// import { GET_MISSIONS } from "./gql";

const StyledFeedContainer = styled.div`
    display: flex;
    ${iphoneX} {
        margin-top: 24px;
        margin-left: 16px;
    }
`;

const Feed: React.FC = () => {
    const pageSize = 4;
    const [missions, setMissions] = useState<{}[]>([]);
    const [offset, setOffset] = useState<number>(0);

    const [getFeed, { loading, error, data, fetchMore }] = useGet_FeedLazyQuery({
        onCompleted: (data) => {
            if (data?.getFeed.hasNextPage) {
                setOffset(offset + pageSize);
            }
        },
        onError: () => {
            console.error(error);
        },
    });
    console.log({ data });

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

    if (loading) return <Spinner />;

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
        <StyledFeedContainer>
            Feed <button onClick={() => nextPage()}></button>
        </StyledFeedContainer>
    );
};

export default Feed;
