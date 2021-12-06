import React from "react";
import Feed from "./components/feed";
import Translator from "./components/translator";

const App: React.FC = () => {
    return (
        <>
            <Translator></Translator>
            <Feed></Feed>
        </>
    );
};

export default App;
