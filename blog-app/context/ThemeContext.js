"use client"
import { useState, useEffect, useContext, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem('theme') || 'light';
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    if (!mounted) return null;

    const changeTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem('theme', theme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}