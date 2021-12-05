import React from "react";
import styled from "styled-components";
import Header from "./atoms/header";
import Feed from "./components/feed";
import Translator from "./components/translator";
import { iphoneX } from "./devices";

const StyledHeaderContainer = styled.div`
    display: flex;
    ${iphoneX} {
        margin-top: 40px;
        margin-left: 20px;
    }
`;

const App: React.FC = () => {
    return (
        <>
            <Translator></Translator>
            <StyledHeaderContainer>
                <Header> 17 November 2021</Header>
            </StyledHeaderContainer>
            <Feed></Feed>
        </>
    );
};

export default App;
