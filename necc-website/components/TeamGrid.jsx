import Image from 'next/image'


function MobileCard({ path, name, role }) {
    return (
        <figure class="bg-white dark:bg-gray-600 shadow-lg rounded-xl md:rounded-md p-0 overflow-hidden flex flex-row justify-center items-center m-2">
            <Image class="rounded-none h-24 w-24" 
                src={path}
                alt=""
            />
            <figcaption class="p-4">
                <h3 class="font-semibold text-gray-700 dark:text-gray-200 mb-1 w-36">{{ name }}</h3>
                <span class="rounded-full bg-blue-50 dark:bg-blue-200 text-sm py-1 px-2 font-semibold text-blue-700 dark:text-blue-900">{{ role }}</span>
            </figcaption>
        </figure>
    );
}

function SponsorCard({ path, brand, description, address }) {
    return (
        <figure class="bg-white dark:bg-gray-600 shadow-xl rounded-xl p-0  my-4 mx-2 overflow-hidden flex flex-row justify-center items-center max-w-2xl relative sm:static group">
            <Image class="rounded-none h-80 sm:h-48 sm:w-48" 
                src={path}
                alt=""
            />
            <figcaption class="p-4 h-full absolute bg-white dark:bg-gray-600 sm:static hidden group-hover:flex sm:flex flex-col justify-around">
                <h3 class="font-semibold text-xl text-gray-800 dark:text-gray-200 mb-1">{ brand }</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-2">{ description }</p>
                <span class="text-blue-500 dark:text-blue-300 text-sm"><ion-icon name="location-outline"></ion-icon> { address }</span>
            </figcaption>
        </figure>
    );
}

function MemberCard({ path, name, role }) {
    return (
        <div className="bg-white dark:bg-gray-600 shadow-lg rounded-md p-5 flex flex-col justify-evenly items-center m-2">
            <Image
                className="rounded-full border-2 border-gray-200"
                src={path}
                alt=""
                width={100}
                height={100}
            />
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">{ name }</h3>
            <span className="rounded-full bg-blue-50 dark:bg-blue-200 text-sm py-1 px-2 font-semibold text-blue-700 dark:text-blue-900">{ role }</span>
        </div>
    );
}

export default function TeamGrid() {
    return (
        <>
            <div className="flex flex-row flex-wrap justify-evenly md:hidden">
                {/* <MobileCard path={"avatar/Ana_Silva.jpg"} name={"joão"} role={"dev"} /> */}
            </div>
            <div className="hidden md:grid">
                <div className="grid md:grid-cols-5">
                    <MemberCard path={"/avatar/avatar_Ana_Silva.jpg"} name={"joão"} role={"dev"} />
                </div>
                <div className="grid md:grid-cols-4 lg:grid-cols-8 md:grid-rows-2 lg:grid-rows-1">
                    <MemberCard path={"/avatar/avatar_Ana_Silva.jpg"} name={"joão"} role={"dev"} />
                </div>
                <div className="grid md:grid-cols-4 lg:grid-cols-8 md:grid-rows-2 lg:grid-rows-1">
                    <MemberCard path={"/avatar/avatar_Ana_Silva.jpg"} name={"joão"} role={"dev"} />
                </div>
            </div>
        </>
    );
}