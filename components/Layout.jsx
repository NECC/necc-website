import Head from 'next/head'
import Navbar from '../components/Navbar'
import DarkModeButton from '../components/DarkModeButton'
import { ThemeContext } from '../components/ThemeProvider'
import { useContext } from 'react'

import { FiMail } from 'react-icons/fi';
import { GiPositionMarker } from 'react-icons/gi';
import { BsInstagram, BsDiscord, BsGithub } from 'react-icons/bs';


const Layout = ({ children }) => {
    const [{ theme }, toggle] = useContext(ThemeContext);

    return (
        <div className={theme}>
            <Head>
                <meta name="description" content="Núcleo de Estudantes de Ciências da Computação" />
                <meta name="keywords" content="NECC, UMinho, Ciências da Computação" />
                <title>NECC</title>
                <link rel="icon" href="/favicon.ico" />
                {/* FONTS */}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href={"https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap"} rel="stylesheet" />
            </Head>

            <Navbar />

            {
                children
            }

            <DarkModeButton />

            <footer id="contacts" className="w-full bg-gray-700 dark:bg-gray-900 pt-24 transition-colors duration-500 ease-in-out">
                <div className="container mx-auto">
                    <div className="flex flex-row justify-evenly items-start mb-5">
                        <ul className="flex flex-col justify-start">
                            <li>
                                <h2 className="text-xl text-white dark:text-blue-200 font-semibold mb-4">Segue-nos</h2>
                            </li>
                            <li className="mb-3">
                                <a className="text-base text-gray-100 dark:text-gray-300 flex items-center" target="_blank"
                                    href="https://www.instagram.com/necc.uminho/" rel="noopener"
                                >
                                    <BsInstagram className="text-3xl mr-2" />Instagram
                                </a>
                            </li>
                            <li className="mb-3">
                                <a className="text-base text-gray-100 dark:text-gray-300 flex items-center" target="_blank"
                                    href="http://bit.ly/LccDiscord" rel="noopener">
                                    <BsDiscord className="text-3xl mr-2" />Discord
                                </a>
                            </li>
                            <li className="mb-3">
                                <a className="text-base text-gray-100 dark:text-gray-300 flex items-center" target="_blank"
                                    href="https://github.com/NECC" rel="noopener">
                                    <BsGithub className="text-3xl mr-2" />Github
                                </a>
                            </li>
                        </ul>
                        <ul className="flex flex-col justify-start">
                            <li>
                                <h2 className="text-xl text-white dark:text-blue-200 font-semibold mb-4">Encontra-nos</h2>
                            </li>
                            <li className="mb-3">
                                <a className="text-base text-gray-100 dark:text-gray-300 flex items-center"
                                    href="mailto:necc@di.uminho.pt">
                                    <FiMail className="text-3xl mr-2" />necc@di.uminho.pt
                                </a>
                            </li>
                            <li className="mb-3">
                                <p className="text-base text-gray-100 dark:text-gray-300 mb-2 flex items-center">
                                    <GiPositionMarker className="text-3xl mr-2" />DI sala 1.1
                                </p>
                            </li>
                        </ul>
                    </div>

                    <p className="text-xl text-bold text-blue-300 font-mono text-center w-full py-7">
                        <span className="font-sans">&copy;</span> NECC 2001-2021 | Developed with 💖
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout