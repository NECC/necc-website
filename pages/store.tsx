import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head'
import StoreItem from '../components/StoreItem'
import StoreItemExtended from '../components/StoreItemExtended'
//import {store} from '../data/store.json'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

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
    <div className='bg-blue-50'>
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
          
          <div id='store-page' className="grid xl:grid-cols-3 sm:grid-cols-2 gap-4 gap-x-0 py-24 ml-32 mr-32">
              <a href="hoodie-necc" className='hover:scale-105'>
                <StoreItem path='/store/hoodie.jpg' description="Hoddie NECC" price="10.99€" />
              </a>
              <StoreItem path='/store/hoodie.jpg' description="Hoddie NECC" price="10.99€" />
              <StoreItem path='/store/hoodie.jpg' description="Hoddie NECC" price="10.99€" />
              <StoreItem path='/store/hoodie.jpg' description="Hoddie NECC" price="10.99€" />
              <StoreItem path='/store/hoodie.jpg' description="Hoddie NECC" price="10.99€" />
              <StoreItem path='/store/hoodie.jpg' description="Hoddie NECC" price="10.99€" />
          </div>

    </div>
      
  )
}
