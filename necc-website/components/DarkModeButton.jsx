import React, { useState } from 'react';

export default function DarkModeButton() {
    const [on, setOn] = useState(false);

    const handler = () => {
        localStorage.theme = document.querySelector('html')
            .classList.toggle('dark') ? 'dark' : 'light';

        setOn(!on)
    }

    return (
        <button id="darkmode"
            className={`fixed right-4 bottom-16 z-10 h-14 w-14 rounded-full bg-gray-900 dark:bg-gray-100 flex items-center justify-center 
                focus:outline-none focus:ring-2 transition-colors duration-500 ease-in-out ${on ? "icon-sunny-outline" : "icon-moon-outline"}`}
            role="switch" aria-checked={on ? "true" : "false"} aria-label="darkmode switch" onClick={handler}>
            <span className="icon-moon-outline text-4xl text-gray-200 dark:text-blue-500"></span>
        </button>
    );
} 