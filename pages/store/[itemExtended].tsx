import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Head from 'next/head'
import StoreItemExtended from '../../components/store/StoreItemExtended'
import {storeItems} from '../../data/store.json'
import DarkModeButton from '../../components/DarkModeButton';
import { useRouter } from 'next/router';


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
  
  const router = useRouter()
  const itemName = router.query.itemExtended
  
  const {shortDescription, path, longDescription, price} = storeItems.filter( item => item.name == itemName)[0]
  
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
        <div className='bg-blue-50 py-32 h-screen'>
          <StoreItemExtended shortDescription={shortDescription} path={path} longDescription={longDescription} price={price}/>
        </div>

    </div>
      
      )
    }
    
    