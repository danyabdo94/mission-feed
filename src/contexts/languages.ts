import { createContext } from "react";
export enum Languages {
    EN = "en",
    SP = "sp",
}
interface Language {
    language?: Languages;
    setLanguage?: React.Dispatch<React.SetStateAction<Languages>>;
}
export const LanguageContext = createContext<Language>({});
