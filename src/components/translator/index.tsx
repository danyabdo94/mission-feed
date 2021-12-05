import React from "react";
import styled from "styled-components";
import Button from "../../atoms/button";
import { iphoneX } from "../../devices";

const StyledTranslator = styled.div`
    display: flex;
    ${iphoneX} {
        margin-top: 40px;
        margin-left: 14px;
    }
`;

const Translator: React.FC = () => {
    return (
        <StyledTranslator>
            <Button onClick={() => console.log("test EN")}>English</Button>
            <Button onClick={() => console.log("test SP")}>Spanish</Button>
        </StyledTranslator>
    );
};

export default Translator;
