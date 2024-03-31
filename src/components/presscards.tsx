import Image from "next/image";
import Link from "next/link";
import { pressCards } from "./../assets/data";

const PressCards = () => {
    return (
        <div className="w-[1183px] grid grid-cols-2 auto-rows-[538px] grid-flow-row gap-4">
            {pressCards.map(card => (
            <div className="w-full h-full p-0.5 pb-3 bg-darkslategray-600 rounded-xl">
                <div className="w-full h-full bg-white p-7 rounded-[10px] flex flex-col justify-between">
                    <div className="space-y-8">
                        <div className="relative w-full h-[283px] flex items-center justify-center border-[0.5px] border-black rounded-xl overflow-hidden mb-8">
                            <div className="relative w-[442px] h-[103px]">
                                <Image
                                    src={card.src}
                                    alt={card.company}
                                    fill={true}
                                    sizes="100vw"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <h4 className="text-3xl font-bold text-darkslategray-600 w-full">
                            {card.title}
                        </h4>
                    </div>
                    <Link href={`/press/${card.company}`} className="text-xl text-tango-500 underline w-full">Read Article</Link>
                </div>
            </div>
            ))}

        </div>
    )
}

export default PressCards;