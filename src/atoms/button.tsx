import React from "react";
import styled from "styled-components";
import { Colors } from "../colors";
import { iphoneX } from "../devices";

const StyledButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: none;

    ${iphoneX} {
        padding: 4px 12px;
        background: ${Colors.default};
        border-radius: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.25px;
        color: #000000;
        margin-left: 12px;
    }

    :active {
        background: ${Colors.blue40};
    }
`;

const Button: React.FC<{ onClick: () => void }> = ({ onClick, children }) => {
    return (
        <StyledButton onClick={(e) => onClick()}>
            <span>{children}</span>
        </StyledButton>
    );
};

export default Button;
