import React from "react";
import styled from "styled-components";
import Button from "../../../atoms/button";
import { Colors } from "../../../colors";
import { iphoneX } from "../../../devices";
import { Mission } from "../../../generated/graphql";
import Media from "./media";
import { ReactComponent as GiftIcon } from "../../../assets/gift.svg";

const StyledFeedContainer = styled.div`
    display: block;
    ${iphoneX} {
        margin-top: 24px;
        margin-left: 16px;
        margin-right: 16px;
        border-radius: 0 0 8px 8px;
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
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    ${iphoneX} {
        margin-right: 8px;
        margin-left: 8px;
    }
`;

const StyledInLine = styled.div`
    font-family: Roboto;
    display: flex;
    ${iphoneX} {
        margin: 9px;
    }
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
                        padding: 0,
                    }}
                    onClick={() => console.log(mission.title)}
                >
                    <StyledInLine>
                        <GiftIcon />
                        <StyledSpan>Reward</StyledSpan>$ {mission.cashReward}
                    </StyledInLine>
                </Button>
            </StyledButtonContainer>
        </StyledFeedContainer>
    );
};

export default MissionView;
