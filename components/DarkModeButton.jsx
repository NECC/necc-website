import React, { useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

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
                focus:outline-none focus:ring-2 transition-colors duration-500 ease-in-out`}
            role="switch" aria-checked={on ? "true" : "false"} aria-label="darkmode switch" onClick={handler}>
                {
                    on ?
                    <BsSun className="text-blue-500 text-2xl" /> :
                    <BsMoonStars className="text-blue-500 text-2xl" />
                }
            <span className="icon-moon-outline text-4xl text-gray-200 dark:text-blue-500"></span>
        </button>
    );
} 
