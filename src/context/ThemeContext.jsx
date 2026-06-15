import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
console.log("ThemeProvider rendered");
    const [theme, setTheme] = useState("light");
    console.log("Current theme state:", theme);
    useEffect(() => {
        console.log("Theme:", theme);
        console.log(
            "HTML classes:",
            document.documentElement.className
        );
        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );
        console.log(document.documentElement.className);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev =>
            prev === "light"
                ? "dark"
                : "light"
        );
    };

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme, toggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
}