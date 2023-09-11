import { createContext } from "react";
import { theme } from "./Theme";


export const themeContext=createContext(theme)

type contextProviderProp={
    children:React.ReactNode
}

export const ThemeContextProvider=({children}:contextProviderProp)=>{
    return <themeContext.Provider value={theme}>{children}</themeContext.Provider>
}