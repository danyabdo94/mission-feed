import React from "react";
import styled from "styled-components";
import { iphoneX } from "../../../devices";
import { Mission } from "../../../generated/graphql";

const StyledFeedContainer = styled.div`
    display: block;
    ${iphoneX} {
        margin-top: 24px;
        margin-left: 16px;
    }
`;

const StyledMedia = styled.div`
    ${iphoneX} {
        width: 345px;
        height: 230px;
    }
`;

const MissionView: React.FC<{ mission: Mission }> = ({ mission }) => {
    return (
        <StyledFeedContainer>
            <StyledMedia>
                {mission.__typename === "FBPostMission" && (
                    <img
                        srcSet={`${mission.image.src2x} 2x`}
                        src={mission.image.src}
                        alt={mission.image.alt as string}
                        width="345px"
                        height="230px"
                    />
                )}
                {mission?.__typename === "IGStoryMission" && (
                    <video src={mission.video.src} width="345px" height="230px" controls />
                )}
            </StyledMedia>
            {mission.title}
            {mission.date}
        </StyledFeedContainer>
    );
};

export default MissionView;
