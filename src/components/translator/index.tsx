import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../atoms/button";
import { LanguageContext, Languages } from "../../contexts/languages";
import { iphoneX } from "../../devices";

const StyledTranslator = styled.div`
    display: flex;
    ${iphoneX} {
        margin-top: 40px;
        margin-left: 14px;
    }
`;

const Translator: React.FC = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    console.log({ language });
    return (
        <StyledTranslator>
            {console.log(language === Languages.EN)}
            <Button
                style={{ marginLeft: "12px" }}
                data-is-active={language === Languages.EN}
                onClick={() => setLanguage && setLanguage(Languages.EN)}
            >
                English
            </Button>
            <Button
                style={{ marginLeft: "12px" }}
                data-is-active={language === Languages.SP}
                onClick={() => setLanguage && setLanguage(Languages.SP)}
            >
                Spanish
            </Button>
        </StyledTranslator>
    );
};

export default Translator;
