import next from 'next';
import Image from 'next/image'
import React, { useState } from 'react';


function StoreItem({ name, paths, shortDescription, price, price_socio}) {
    
    /*
    <span className='ease-in transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 bg-slate-400 rounded-lg inline-block'
        onClick={ () => setPos( Math.abs((pos-1)%(paths.length))) }>
    </span>
    <span className='ease-in cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 bg-sky-700 rounded-lg inline-block' 
        onClick={ () => setPos( Math.abs((pos)%(paths.length))) }>
    </span>
    <span className='ease-in transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 bg-slate-400 rounded-lg inline-block'
        onClick={ () => setPos( Math.abs((pos + 1)%(paths.length))) }>
    </span>
    */

    const [pos, setPos] = useState(0)
    const [showArrows, setShowArrows] = useState(false)
    const [showLeftArrow, setShowLeftArrow] = useState(true)
    const [showRightArrow, setShowRightArrow] = useState(true)

    function handlePos(nextPos){
        setPos(nextPos)
        
        if (nextPos == paths.length -1) {
            setShowRightArrow(false)
            setShowLeftArrow(true)
        } else if(nextPos == 0) {
            setShowRightArrow(true)
            setShowLeftArrow(false)
        } else {
            setShowRightArrow(true)
            setShowLeftArrow(true)
        }
    }

    return (
        
        <div 
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
            className="relative max-w-full font-sans dark:bg-gray-600 flex hover:rounded-md justify-evenly items-center p-2"
            >
            <div className="border-gray-500">
                <img src={paths[pos]} alt="um item" className='animate-fade hover:rounded-md h-72 sm:w-full sm:h-full object-coversm:h-72' />
                <div className='absolute w-5/6 top-1/3 ml-2 mr-1'>
                    <button onClick={() => handlePos(pos -1)} className={`${ (showArrows && showLeftArrow) ? "": "hidden"} absolute`}>&#10094;</button>
                    <button onClick={() => handlePos(pos +1)} className={`${ (showArrows && showRightArrow) ? "": "hidden"} absolute left-full`}>&#10095;</button>
                </div>
                <div className='w-full'>
                    <div className='ml-auto mr-auto w-fit -mt-10'>
                        <span className='ease-in transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 bg-slate-400 rounded-lg inline-block'
                            onClick={ () => setPos( Math.abs((pos-1)%(paths.length))) }>
                        </span>
                        <span className='ease-in cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 bg-sky-700 rounded-lg inline-block' 
                            onClick={ () => setPos( Math.abs((pos)%(paths.length))) }>
                        </span>
                        <span className='ease-in transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 bg-slate-400 rounded-lg inline-block'
                            onClick={ () => setPos( Math.abs((pos + 1)%(paths.length))) }>
                        </span>
                    </div>
                </div>
                <div className={'mt-6 ml-1'}>
                    <p className='tracking-tight text-blue-600 dark:text-blue-300'>{name}</p>
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