import React from "react";
import styled from "styled-components";
import Button from "../../../atoms/button";
import { Colors } from "../../../colors";
import { iphoneX } from "../../../devices";
import { Mission } from "../../../generated/graphql";
import Media from "./media";
import { ReactComponent as GiftIcon } from "../../../assets/gift.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/fb.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/ig.svg";
import { useTranslation } from "react-i18next";

const StyledFeedContainer = styled.div`
    position: relative;
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

const StyledMissionDisclaimer = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    padding: 4px 8px;
    background: ${Colors.white};
    opacity: 0.8;
    backdrop-filter: blur(20px);
    border-radius: 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    display: flex;
    align-items: center;
`;

const StyledDot = styled.div`
    width: 2px;
    height: 2px;
    background: #161617;
    border-radius: 16px;
    margin-right: 4px;
    margin-left: 4px;
`;

const MissionView: React.FC<{ mission: Mission }> = ({ mission }) => {
    const { t } = useTranslation("common");
    return (
        <StyledFeedContainer>
            <StyledMissionDisclaimer>
                <span>{t("cash")}</span>
                <StyledDot></StyledDot>
                {mission.__typename === "FBPostMission" && <FacebookIcon />}
                {mission.__typename === "IGStoryMission" && <InstagramIcon />}
            </StyledMissionDisclaimer>
            <Media mission={mission}></Media>
            <StyledButtonContainer>
                <StyledH2>{mission.title}</StyledH2>
                <Button
                    style={{
                        width: "100%",
                        backgroundColor: Colors.white,
                        padding: 0,
                    }}
                    onClick={() => console.log("To Be Implemented")}
                >
                    <StyledInLine>
                        <GiftIcon />
                        <StyledSpan>{t("reward")}</StyledSpan>$ {mission.cashReward}
                    </StyledInLine>
                </Button>
            </StyledButtonContainer>
        </StyledFeedContainer>
    );
};

export default MissionView;
