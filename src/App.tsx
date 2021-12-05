import React from "react";
import Header from "./atoms/header";
import Translator from "./components/translator";

const App: React.FC = () => {
    return (
        <>
            <Translator></Translator>
            <div style={{ marginLeft: 20, marginTop: 40 }}>
                <Header> 17 November 2021</Header>
            </div>
        </>
    );
};

export default App;
