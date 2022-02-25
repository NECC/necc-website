import React, { useState, Component, useEffect } from 'react';
import Head from 'next/head'
import TeamGrid from '../components/TeamGrid'
import Navbar from '../components/Navbar'
import DarkModeButton from '../components/DarkModeButton'
import SponsorCard from '../components/SponsorCard'
import {sponsors} from '../data/sponsors.json'

import { FiMail } from 'react-icons/fi';
import { GiPositionMarker } from 'react-icons/gi';
import { BsInstagram, BsDiscord, BsGithub } from 'react-icons/bs';


function ready() {
  if (localStorage.theme === 'dark') {
      document?.querySelector('html')?.classList.add('dark');
      
      let elem = document.getElementById('darkmode');
      elem?.setAttribute("aria-checked", "true");
      elem?.firstElementChild?.classList.add("icon-sunny-outline");
      elem?.firstElementChild?.classList.remove("icon-moon-outline");
  } else {
      document?.querySelector('html')?.classList.remove('dark')
  }
}

export default function Home() {
  useEffect(() => {
    ready();
  }, [])

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Núcleo de Estudantes de Ciências da Computação" />
        <meta name="keywords" content="NECC, UMinho, Ciências da Computação" />
        <title>NECC</title>
        <link rel="icon" href="/favicon.ico" />
        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={"https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap"} rel="stylesheet" />
      </Head>

      <Navbar />

      <main id="app">
        <section id="home" className="min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ease-in-out bg-fixed bg-center bg-cover bg-no-repeat px-4 bg-necc">
            <h1 className="text-white font-semibold text-6xl md:text-9xl mb-4 font-Allerta">
              NECC
            </h1>
            <p className="text-white font-semibold uppercase text-lg md:text-xl">núcleo de estudantes de ciências da computação</p>
        </section>

        <section id="about-me" className="bg-gray-100 dark:bg-gray-700 py-32 transition-colors duration-500 ease-in-out">
            <article className="container mx-auto flex flex-col items-center justify-center p-5">
                <header className="mb-4">
                    <h2 className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-blue-400">
                        O que é o NECC?
                    </h2>
                </header>
                <p className="lg:w-6/12 text-justify text-gray-800 dark:text-gray-100 leading-relaxed">
                    A Licenciatura em Ciências da Computação (anteriormente LMCC) é uma parceria do Departamento de
                    Matemática (da Escola de Ciências) e do Departamento de Informática (da Escola de Engenharia) e
                    caracteriza-se por uma visão rigorosa da computação, com uma sólida fundamentação matemática. O NECC
                    é uma associação de estudantes, voluntários, foi criada a 30 de março de 2009 (anteriormente GEMCC) com o intuito
                    de ajudar e representar todos os alunos do curso de Licenciatura de Ciências da Computação da
                    Universidade do Minho. Ao longo de vários anos, aconselhamos os alunos de todos os anos, seja na
                    apresentação no primeiro ano, realização de workshops e contactos com empresas a alunos finalistas.
                </p>
            </article>
        </section>

        <section id="team" className="bg-blue-50 dark:bg-gray-800 py-28 transition-colors duration-500 ease-in-out">
            <article className="container mx-auto flex flex-col items-center justify-center p-5">
                <header className="mb-16">
                    <h2
                        className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-blue-400">
                        A nossa equipa</h2>
                </header>
                <TeamGrid />
            </article>
        </section>

        <section id="partners" className="bg-gray-100 dark:bg-gray-700 py-28 transition-colors duration-500 ease-in-out">
            <article className="container mx-auto flex flex-col items-center p-5">
                <header className="mb-16">
                    <h2
                        className="font-semibold leading-tight text-2xl text-gray-900 dark:text-white border-b-4 border-blue-400">
                        Os nossos parceiros</h2>
                </header>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    { sponsors.map((sponsor, i) =>{
                        return(<SponsorCard key={i} {...sponsor}/>);
                      })
                    }
                </div>
            </article>
        </section>

        <DarkModeButton />
      </main>

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
