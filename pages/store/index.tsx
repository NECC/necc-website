import React, { useEffect } from 'react';
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
        <div className='bg-blue-50'>
          <div id='store-page' className="grid xl:grid-cols-3 sm:grid-cols-2 gap-4 gap-x-0 py-24 ml-32 mr-32">
            {
                storeItems.map((item) => {
                    const {name, path, shortDescription, price} = item
                    return(
                      <Link href={"store/"+name}>
                        <a className='hover:scale-105'>
                            <StoreItem path={path} shortDescription={shortDescription} price={price} />
                        </a>
                      </Link>
                    );
                })
            }
          </div>
        </div>

    </div>
      
  )
}
