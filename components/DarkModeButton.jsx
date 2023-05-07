import { useContext } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { ThemeContext } from './ThemeProvider';

export default function DarkModeButton() {
    const [theme, toggle] = useContext(ThemeContext);

    return (
        <button id="darkmode"
            className="fixed right-4 bottom-16 z-10 h-14 w-14 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center focus:outline-none focus:ring-2 transition-colors duration-500 ease-in-out"
            role="switch" aria-checked={(theme === "dark") ? "true" : "false"} aria-label="darkmode switch" onClick={toggle}>
            {
                (theme === "dark")
                    ? <BsSun className="text-blue-500 text-2xl" />
                    : <BsMoonStars className="text-blue-500 text-2xl" />
            }
            <span className="icon-moon-outline text-4xl text-gray-200 dark:text-blue-500"></span>
        </button>
    );
} 
