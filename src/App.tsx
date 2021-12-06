import React, { useState } from "react";
import Feed from "./components/feed";
import Translator from "./components/translator";
import { LanguageContext, Languages } from "./contexts/languages";

const App: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState<Languages>(Languages.EN);
    return (
        <LanguageContext.Provider value={{ language: currentLanguage, setLanguage: setCurrentLanguage }}>
            <Translator></Translator>
            <Feed></Feed>
        </LanguageContext.Provider>
    );
};

export default App;
