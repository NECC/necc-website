import Image from 'next/image'
import {members} from '../../data/members.json'

function MobileCard({ path, name, role }) {
    return (
        <figure className="bg-white dark:bg-gray-600 shadow-lg rounded-xl md:rounded-md p-0 overflow-hidden flex flex-row justify-center items-center m-2">
            <Image src={path} alt="" width={100} height={100} />
            <figcaption className="p-4">
                <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-1 w-36">{ name }</h3>
                <span className="rounded-full bg-blue-50 dark:bg-blue-200 text-sm py-1 px-2 font-semibold text-blue-700 dark:text-blue-900">{ role }</span>
            </figcaption>
        </figure>
    );
}

function MemberCard({ path, name, role }) {
    return (
        <div className="bg-white dark:bg-gray-600 shadow-lg rounded-md p-5 flex flex-col justify-evenly items-center m-2">
            <div className="rounded-full border-2 border-gray-200 w-24 h-24">
                <Image className="rounded-full" src={path} alt="" width={100} height={100} />
            </div>
            <h3 className="font-semibold text-gray-700 dark:text-gray-200">{ name }</h3>
            <span className="rounded-full bg-blue-50 dark:bg-blue-200 text-sm py-1 px-2 font-semibold text-blue-700 dark:text-blue-900">{ role }</span>
        </div>
    );
}

export default function TeamGrid() {
    const caminho = image.queryStringParameters.caminho || image;

    return (
        <>
            <div className="flex flex-row flex-wrap justify-evenly md:hidden">
                { 
                    members.map((member) => {
                            const {caminho, name, role} = member
                            return(
                                <MobileCard path={caminho} name={name} role={role} />
                            );
                    })
                }
            </div>
            <div className="hidden md:grid">
                <div className="grid md:grid-cols-4 lg:grid-cols-5 md:grid-rows-2 lg:grid-rows-1">
                    {   members.map((member) => {
                            const {caminho, name, role} = member
                            return(
                                <MemberCard path={caminho} name={name} role={role} />
                            );
                        })
                    }        
                </div>
            </div>
        </>
    );
}