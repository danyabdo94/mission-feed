import React from "react";
import styled from "styled-components";
import Button from "../../../atoms/button";
import { Colors } from "../../../colors";
import { iphoneX } from "../../../devices";
import { Mission } from "../../../generated/graphql";
import Media from "./media";

const StyledFeedContainer = styled.div`
    display: block;
    ${iphoneX} {
        margin-top: 24px;
        margin-left: 16px;
        margin-right: 16px;
        border-radius: 8px;
    }
    background: ${Colors.default};
`;

const StyledH2 = styled.h2`
    ${iphoneX} {
        margin-top: 8px;
        margin-left: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
    }
`;

const StyledButtonContainer = styled.div`
    ${iphoneX} {
        padding: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 24px;
    }
`;

const StyledSpan = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
`;

const MissionView: React.FC<{ mission: Mission }> = ({ mission }) => {
    return (
        <StyledFeedContainer>
            <Media mission={mission}></Media>
            <StyledButtonContainer>
                <StyledH2>{mission.title}</StyledH2>
                <Button
                    style={{
                        width: "100%",
                        backgroundColor: Colors.white,
                    }}
                    onClick={() => console.log(mission.title)}
                >
                    <StyledSpan>Reward</StyledSpan>
                </Button>
            </StyledButtonContainer>
        </StyledFeedContainer>
    );
};

export default MissionView;
