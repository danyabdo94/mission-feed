import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
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
    const { i18n } = useTranslation();

    //It's just a use case we don't need it anymore
    const { language, setLanguage } = useContext(LanguageContext);

    const changeLang = (lang: Languages) => {
        i18n.changeLanguage(lang);
        setLanguage && setLanguage(lang);
    };
    return (
        <StyledTranslator>
            <Button
                style={{ marginLeft: "12px" }}
                data-is-active={language === Languages.EN}
                onClick={() => changeLang(Languages.EN)}
            >
                English
            </Button>
            <Button
                style={{ marginLeft: "12px" }}
                data-is-active={language === Languages.SP}
                onClick={() => changeLang(Languages.SP)}
            >
                Spanish
            </Button>
        </StyledTranslator>
    );
};

export default Translator;
