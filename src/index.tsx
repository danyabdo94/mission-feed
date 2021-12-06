import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GetFeedResponse } from "./generated/graphql";
import "typeface-roboto";
import "./translations/i18n";

const client = new ApolloClient({
    uri: "https://master-bb-ta-frontend-3tunt6sv4q-ez.a.run.app/graphql",
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    getFeed: {
                        keyArgs: false,
                        merge(existing: GetFeedResponse, incoming: GetFeedResponse) {
                            const cumulative = existing?.items
                                ? [...existing.items, ...incoming.items]
                                : [...incoming.items];
                            return {
                                hasNextPage: incoming.hasNextPage,
                                items: cumulative,
                            };
                        },
                    },
                },
            },
        },
    }),
    connectToDevTools: true,
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
