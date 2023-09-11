import { useContext } from "react";
import { themeContext } from "./ThemeContext";

export const Box=()=>{
    const theme=useContext(themeContext)
    return (
        <div style={{backgroundColor: theme.primary.main, color:theme.primary.text}}>
            Theme Context Applicable here
        </div>
    )
}