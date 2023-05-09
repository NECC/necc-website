import LoadedImage from '../LoadedImage'
import Image from "next/image"
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function mod(n, m) {
    return ((n % m) + m) % m;
}

function StoreItem({ name, paths, shortDescription, price, price_socio }) {
    const [showArrows, setShowArrows] = useState(false)
    const [pos, setPos] = useState(0)

    return (
        <div
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
            className="w-auto sm:w-auto p-2 flex justify-evenly items-center dark:hover:bg-gray-600  hover:bg-white hover:scale-105 hover:shadow-[0_05px_30px_-10px_rgba(0,0,0,0.5)] rounded-md">
            <div className="relative">
                <LoadedImage width={280} height={280} src={paths[pos]} alt={name} className="duration-200 transition-all hover:rounded-md h-72 w-72" />
                {
                    showArrows &&
                    <div className="absolute w-full flex justify-between top-[40%]">
                        <div className={"cursor-pointer duration-200 w-8 h-8 bg-slate-300 rounded-3xl flex justify-center items-center"}
                            onClick={() => setPos(mod((pos - 1), (paths.length)))}
                        >
                            <button className="h-4 w-4">
                                <GrFormPrevious />
                            </button>
                        </div>
                        <div className={"cursor-pointer duration-200 w-8 h-8 bg-slate-300 rounded-3xl flex justify-center items-center"}
                            onClick={() => setPos(mod((pos + 1), (paths.length)))}
                        >
                            <button className="h-4 w-4">
                                <GrFormNext />
                            </button>
                        </div>
                    </div>
                }
                <div className="w-full">
                    <div className="ml-auto mr-auto w-fit -mt-10">
                        {
                            paths.map((path, index) => {
                                return (
                                    <span
                                        className={`${(index == pos) ? "bg-sky-700 scale-125" : "bg-slate-400"} duration-300 transition-all cursor-pointer h-2 w-2 mt-0 mb-0 ml-1 mr-1 hover:bg-sky-700 hover:scale-125 rounded-md inline-block`}
                                        onClick={() => setPos(index)}
                                        key={index}
                                    >
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mt-6 ml-1">
                    <p className="tracking-tight text-blue-600 dark:text-blue-400">{name}</p>
                    <p className="text-gray-700 dark:text-white">{shortDescription}</p>
                    <div className="text-gray-700 dark:text-white mt-2">
                        <div className="flex">
                            <p className="pt-1 mr-1">Não Sócios</p>
                            <p className="font-bold pt-1">{price}</p>
                        </div>
                        <div className="flex text-blue-600 dark:text-blue-400">
                            <p className="mr-1">Sócios</p>
                            <p className="font-bold">{price_socio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StoreItem