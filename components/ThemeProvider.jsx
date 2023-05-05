import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [])

    const toggle = () => {
        if (theme === "light") {
            localStorage.theme = "dark"
            setTheme("dark")
        } else {
            localStorage.theme = "light"
            setTheme("light")
        }
    }

    return (
        <ThemeContext.Provider value={[
            theme,
            toggle
        ]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider