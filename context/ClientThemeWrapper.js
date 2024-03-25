"use client"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";


export default function ClientThemeWrapper({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div data-theme={theme}>
            {children}
        </div>
    );
}