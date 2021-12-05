import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type FbPostMission = {
    __typename?: "FBPostMission";
    cashReward: Scalars["Float"];
    date: Scalars["String"];
    image: Image;
    title: Scalars["String"];
};

export type GetFeedInput = {
    limit: Scalars["Int"];
    offset: Scalars["Int"];
};

export type GetFeedResponse = {
    __typename?: "GetFeedResponse";
    hasNextPage: Scalars["Boolean"];
    items: Array<Mission>;
};

export type IgStoryMission = {
    __typename?: "IGStoryMission";
    cashReward: Scalars["Float"];
    date: Scalars["String"];
    title: Scalars["String"];
    video: Video;
};

export type Image = {
    __typename?: "Image";
    alt?: Maybe<Scalars["String"]>;
    src: Scalars["String"];
    src2x: Scalars["String"];
};

export type Mission = FbPostMission | IgStoryMission;

export type Query = {
    __typename?: "Query";
    getFeed: GetFeedResponse;
};

export type QueryGetFeedArgs = {
    input: GetFeedInput;
};

export type Video = {
    __typename?: "Video";
    alt?: Maybe<Scalars["String"]>;
    src: Scalars["String"];
};

export type Get_FeedQueryVariables = Exact<{
    limit: Scalars["Int"];
    offset: Scalars["Int"];
}>;

export type Get_FeedQuery = {
    __typename?: "Query";
    getFeed: {
        __typename?: "GetFeedResponse";
        hasNextPage: boolean;
        items: Array<
            | {
                  __typename?: "FBPostMission";
                  date: string;
                  title: string;
                  cashReward: number;
                  image: { __typename?: "Image"; alt?: string | null | undefined; src: string; src2x: string };
              }
            | {
                  __typename?: "IGStoryMission";
                  date: string;
                  title: string;
                  cashReward: number;
                  video: { __typename?: "Video"; alt?: string | null | undefined; src: string };
              }
        >;
    };
};

export const Get_FeedDocument = gql`
    query GET_FEED($limit: Int!, $offset: Int!) {
        getFeed(input: { limit: $limit, offset: $offset }) {
            items {
                ... on FBPostMission {
                    date
                    title
                    image {
                        alt
                        src
                        src2x
                    }
                    cashReward
                }
                ... on IGStoryMission {
                    date
                    title
                    video {
                        alt
                        src
                    }
                    cashReward
                }
            }
            hasNextPage
        }
    }
`;

/**
 * __useGet_FeedQuery__
 *
 * To run a query within a React component, call `useGet_FeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_FeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_FeedQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGet_FeedQuery(baseOptions: Apollo.QueryHookOptions<Get_FeedQuery, Get_FeedQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<Get_FeedQuery, Get_FeedQueryVariables>(Get_FeedDocument, options);
}
export function useGet_FeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_FeedQuery, Get_FeedQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<Get_FeedQuery, Get_FeedQueryVariables>(Get_FeedDocument, options);
}
export type Get_FeedQueryHookResult = ReturnType<typeof useGet_FeedQuery>;
export type Get_FeedLazyQueryHookResult = ReturnType<typeof useGet_FeedLazyQuery>;
export type Get_FeedQueryResult = Apollo.QueryResult<Get_FeedQuery, Get_FeedQueryVariables>;
