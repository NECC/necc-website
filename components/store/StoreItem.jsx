import Image from 'next/image'

function StoreItem({ path, shortDescription, price}) {
    return (
        
        <div className="font-semibold bg-white dark:bg-gray-600 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] rounded-md p-5 flex flex-col justify-evenly items-center m-2">
            <div className="border-gray-500">
                <Image src={path} alt="um item" width={240} height={240} />
                <div className="flex">
                    <p className='mr-12'>{shortDescription}</p>
                    <p className='ml-12'>{price}</p>
                </div>
            </div>
        </div>
    
    );
}

export default StoreItem