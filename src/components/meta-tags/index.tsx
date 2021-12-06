import React, { useEffect } from "react";
import { Mission } from "../../generated/graphql";

const MetaTags: React.FC<{ mission: Mission }> = ({ mission }) => {
    const addIfNotExistTag = (queryProperty: string, value: string) => {
        // Get an element if it exists already
        let element = document.querySelector(`meta[${queryProperty}]`);

        // Check if the element exists
        if (element) {
            // If it does just change the content of the element
            element.setAttribute("content", value);
        } else {
            // It doesn't exist so lets make a HTML element string with the info we want
            document.head.insertAdjacentHTML("beforeend", `<meta ${queryProperty} content="${value}" />`);
        }
    };

    useEffect(() => {
        if (mission) {
            addIfNotExistTag('property="og:title"', mission.title);
            addIfNotExistTag('property="twitter:title"', mission.title);
            if (mission.__typename === "FBPostMission") {
                addIfNotExistTag('property="og:description"', mission.image.alt || mission.title);
                addIfNotExistTag('property="twitter:description"', mission.title);
                addIfNotExistTag('property="og:image"', mission.image.src);
            } else if (mission.__typename === "IGStoryMission") {
                addIfNotExistTag('property="og:description"', mission.video.alt || mission.title);
                addIfNotExistTag('property="twitter:description"', mission.title);
                addIfNotExistTag('property="og:video"', mission.video.src);
            }
        }
    }, [mission]);
    return null;
};

export default MetaTags;
