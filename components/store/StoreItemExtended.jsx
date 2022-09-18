function StoreItemExtended({shortDescription, path, longDescription, price}) {
    return (
        
        <div className='flex bg-blue-50 w-5/6 h-fit xl:my-8 2xl:my-12 ml-auto mr-auto h-96 rounded-md shadow-[4px_10px_30px_-5px_rgba(0,0,0,0.3)] '>
            <img src={path} className='h-auto w-auto rounded-md' alt="um hoodie"/>
            <div>
                <h3 className="underline decoration-sky-900 decoration-2 font-semibold text-4xl ml-10 mt-4 mr-auto">{shortDescription}</h3>
                <p className="ml-10 text-lg mt-4 mr-auto w-4/5 text-justify">{longDescription}</p>
                <p>{price}</p>

            </div>
        </div>
        
    ) 
}

export default StoreItemExtended