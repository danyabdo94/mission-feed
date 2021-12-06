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
        padding: 4px 8px;
        border-radius: 8px;
        line-height: 20px;
        display: flex;
        align-items: center;
        letter-spacing: 0.25px;
    }

    &[data-is-active="true"] {
        background: ${Colors.blue40};
    }
`;

interface IBaseButtonProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

type NativeButtonProps = {
    onClick: React.MouseEventHandler<HTMLElement>;
} & IBaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

const Button = ({ children, onClick, style, ...props }: NativeButtonProps) => {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        if (onClick) onClick(e); // works
    };
    return (
        <StyledButton style={style} onClick={handleClick} {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
