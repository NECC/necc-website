import Image from 'next/image'
import { GiPositionMarker } from 'react-icons/gi';

/* Problema, responsiveness em Image. 
   Como colocar isto responsive para telemóveis
*/
const myLoader = ({ src, width, quality }) => {
    return `https://necc.di.uminho.pt/${src}?w=${width}&q=${quality || 75}`
}  

function SponsorCard({ path, brand, description, address }) {
    return (
        <figure className="bg-white dark:bg-gray-600 shadow-xl rounded-xl p-0 overflow-hidden flex flex-row justify-start items-center relative sm:static group">
            <div className="h-72 sm:h-64">
                <Image className="" 
                    loader={myLoader}
                    src={path}
                    alt=""
                    width={300}
                    height={300}
                />
            </div>
            <figcaption className="px-4 py-2 h-full absolute bg-white dark:bg-gray-600 sm:static hidden group-hover:flex sm:flex flex-col justify-around sm:w-4/6">
                <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">{ brand }</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                    <ul className="ml-4 list-disc">
                        { description.map((item, i) => {
                            return <li key={i}>{ item }</li>;
                        })
                        }
                    </ul>
                </p>
                <span className="text-blue-500 dark:text-blue-300 text-sm inline-flex">
                    <GiPositionMarker className="text-xl"/> { address }
                </span>
            </figcaption>
        </figure>
    );
}

export default SponsorCard
