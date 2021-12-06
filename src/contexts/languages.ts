import { createContext } from "react";

// i18n is enough but it's just a use case
export enum Languages {
    EN = "en-US",
    SP = "es-SP",
}
interface Language {
    language?: Languages;
    setLanguage?: React.Dispatch<React.SetStateAction<Languages>>;
}
export const LanguageContext = createContext<Language>({});
