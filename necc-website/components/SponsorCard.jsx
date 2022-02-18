import Image from 'next/image'

/* Problema, responsiveness em Image. 
   Como colocar isto responsive para telemóveis
*/
function SponsorCard({ path, brand, description, address }) {
    return (
        <figure class="bg-white dark:bg-gray-600 shadow-xl rounded-xl p-0  my-4 mx-2 overflow-hidden flex flex-row justify-center items-center max-w-2xl relative sm:static group">
            <Image class="rounded-none h-80 sm:h-48 sm:w-48" 
                src={path}
                alt=""
                width={200}
                height={200}
            />
            <figcaption class="p-4 h-full absolute bg-white dark:bg-gray-600 sm:static hidden group-hover:flex sm:flex flex-col justify-around">
                <h3 class="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">{ brand }</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-2">{ description }</p>
                <span class="text-blue-500 dark:text-blue-300 text-sm"><ion-icon name="location-outline"></ion-icon> { address }</span>
            </figcaption>
        </figure>
    );
}

export default SponsorCard
