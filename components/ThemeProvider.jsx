import { createContext, useReducer } from 'react'

export const ThemeContext = createContext(null)

const reducer = (prevState, { type }) => {
    switch (type) {
        case "toggle": {
            if (prevState.theme === "light") {
                localStorage.theme = "dark"
                return {
                    ...prevState,
                    theme: "dark"
                }
            } else {
                localStorage.theme = "light"
                return {
                    ...prevState,
                    theme: "light"
                }
            }
        }
    }
}

const initializer = (initialValue) => {
    if (
        typeof window !== 'undefined' &&
        (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches))
    ) {
        return { theme: "dark" }
    }

    return { theme: "light" }
}


const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(reducer, null, initializer)

    const toggle = () => dispatch({ type: "toggle" })

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