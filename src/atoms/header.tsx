import React from "react";
import styled from "styled-components";
import { iphoneX } from "../devices";

const StyledHeader = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    ${iphoneX} {
        font-size: 16px;
        line-height: 20px;
        margin: 0;
    }
`;

const Header: React.FC = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
