import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Head from 'next/head'
import StoreItem from '../../components/store/StoreItem'
import {storeItems} from '../../data/store.json'
import Link from 'next/link';

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

export default function Store() {
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
        
        <div className='bg-blue-50 h-screen'>
          <div id='store-page' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-x-12 py-32 sm:ml-32 sm:mr-32">
          {
              storeItems.map((item) => {
                  const {name, paths, shortDescription, price, price_socio} = item
                  return(
                    <a className='hover:bg-white hover:scale-105 hover:border hover:shadow-[0_05px_30px_-10px_rgba(0,0,0,0.5)] rounded-md'>
                      <StoreItem name={name} paths={paths}  shortDescription={shortDescription} price={price} price_socio={price_socio}/>
                    </a>
                  );
              })
          }
          </div>
        </div>

    </div>
      
  )
}
