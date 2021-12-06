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
    background: ${Colors.default};
    color: #000000;

    ${iphoneX} {
        padding: 4px 12px;
        border-radius: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.25px;
        margin-left: 12px;
    }

    &[data-is-active="true"] {
        background: ${Colors.blue40};
    }
`;

interface IBaseButtonProps {
    children?: React.ReactNode;
}

type NativeButtonProps = {
    onClick: React.MouseEventHandler<HTMLElement>;
} & IBaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

const Button = ({ children, onClick, ...props }: NativeButtonProps) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (onClick) onClick(e); // works
    };
    return (
        <StyledButton {...props} onClick={handleClick}>
            <span>{children}</span>
        </StyledButton>
    );
};

export default Button;
