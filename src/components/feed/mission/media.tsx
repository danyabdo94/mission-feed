import React from "react";
import styled from "styled-components";
import { iphoneX } from "../../../devices";
import { Mission } from "../../../generated/graphql";

const StyledMedia = styled.div`
    ${iphoneX} {
        width: 345px;
        height: 230px;
    }
`;
const Media: React.FC<{ mission: Mission }> = ({ mission }) => (
    <StyledMedia>
        {mission.__typename === "FBPostMission" && (
            <img
                style={{ objectFit: "cover" }}
                srcSet={`${mission.image.src2x} 2x`}
                src={mission.image.src}
                alt={mission.image.alt as string}
                width="343px"
                height="230px"
            />
        )}
        {mission?.__typename === "IGStoryMission" && (
            <video style={{ objectFit: "cover" }} src={mission.video.src} width="343px" height="230px" controls />
        )}
    </StyledMedia>
);
export default Media;
