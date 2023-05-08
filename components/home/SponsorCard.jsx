import Image from 'next/image'
import { GiPositionMarker } from 'react-icons/gi';

/* Problema, responsiveness em Image. 
   Como colocar isto responsive para telemóveis
*/
function SponsorCard({ path, brand, description, address }) {
    return (
        <figure className="bg-white dark:bg-gray-600 shadow-xl rounded-xl p-0 overflow-hidden flex flex-row justify-start items-center relative sm:static group">
            <div className="">
                <Image src={path} width={256} height={256} alt={brand + " logo"} className="w-72 h-72" />
            </div>
            <figcaption className="px-4 py-2 h-full absolute bg-white dark:bg-gray-600 sm:static hidden group-hover:flex sm:flex flex-col justify-around sm:w-4/6">
                <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">{brand}</h3>
                <ul className="ml-4 list-disc text-gray-600 dark:text-gray-300 mb-2">
                    {
                        description.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
                <span className="text-blue-500 dark:text-blue-300 text-sm inline-flex">
                    <GiPositionMarker className="text-xl" /> {address}
                </span>
            </figcaption>
        </figure>
    );
}

export default SponsorCard
