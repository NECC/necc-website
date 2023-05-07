import React, { useState } from 'react';
import Link from 'next/link';

const routes = {
    "Início": "/#home",
    "Sobre": "/#about-me",
    "Equipa": "/#team",
    "Parceiros": "/#partners",
    "Loja": "/store",
    "Contactos": "#contacts",
}

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white dark:bg-gray-900 p-5 fixed w-full z-10 shadow">
            <div className="container mx-auto flex items-center justify-between flex-wrap">
                <div
                    className="flex items-center flex-shrink-0 text-blue-500 dark:text-blue-300 mr-6 transition-colors duration-500 ease-in-out">
                    <span className="font-semibold text-2xl sm:text-2xl tracking-tight">NECC</span>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setOpen(!open)}
                        className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-600 hover:text-gray-500 hover:border-gray-900">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className={`w-full ${open ? "" : "hidden"} lg:flex lg:items-center lg:w-auto`}>
                    <ul className="font-semibold text-base flex">
                        {
                            Object.entries(routes).map(([name, route], index) =>
                                <li key={index}>
                                    <Link href={route} className="block mt-2 py-2 px-4 lg:inline-block lg:mt-0 rounded text-gray-500 hover:text-blue-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:text-blue-500 dark:hover:bg-gray-700 mr-4 transition-colors duration-500 ease-in-out">
                                        {name}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
} 