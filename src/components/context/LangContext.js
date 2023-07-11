import React, { createContext, useContext } from "react";
import { useParams } from "react-router-dom";

const LangContext = createContext('en');

export default function LangProvider({ children }) {
    let { lang } = useParams();

    return (
        <LangContext.Provider value={lang}>
            { children }
        </LangContext.Provider>
    )
}

export const useLang = () => useContext(LangContext);
