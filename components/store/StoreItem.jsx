import Image from 'next/image'
import { useState } from 'react';


function StoreItem({ name, paths, shortDescription, price, price_socio}) {
    
    const [pos, setPos] = useState(0)

    return (
        
        <div className="relative max-w-full font-sans dark:bg-gray-600 flex hover:rounded-md justify-evenly items-center m-2">
            <div className="border-gray-500">
                <img src={paths[pos]} alt="um item" className='animate-fade hover:rounded-md h-72 sm:w-full sm:h-full object-coversm:h-72' />
                <div className='w-full -mt-10'>
                    <div className='w-fit ml-auto mr-auto'> 
                        <span className='ease-in transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 bg-slate-400 rounded-lg inline-block'
                            onClick={ () => setPos( Math.abs((pos-1)%(paths.length))) }>
                        </span>
                        <span className='ease-in cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 bg-sky-800 rounded-lg inline-block' 
                            onClick={ () => setPos( Math.abs((pos)%(paths.length))) }>
                        </span>
                        <span className='ease-in transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 bg-slate-400 rounded-lg inline-block'
                            onClick={ () => setPos( Math.abs((pos + 1)%(paths.length))) }>
                        </span>
                    </div>
                </div>

                <div className="ml-1">
                    <p className='tracking-tight text-blue-600 dark:text-blue-300 mt-6'>{name}</p>
                    <p className='text-gray-700'>{shortDescription}</p>
                    <div className='text-gray-700 mt-2'>
                        <div className='flex'>
                            <p className='pt-1 mr-1'>Não Sócios</p>
                            <p className='font-bold pt-1'>{price}</p>
                        </div>
                        <div className='flex text-blue-600'>
                            <p className='mr-1'>Sócios</p>
                            <p className='font-bold'>{price_socio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default StoreItem