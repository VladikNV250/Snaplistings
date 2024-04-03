import Image from "next/image";
import Link from "next/link";
import { pressCards } from "./../assets/data";

const PressCards = () => {
    return (
        <div className="xl:w-[1183px] lg:w-[768px] grid grid-cols-2 xl:auto-rows-[538px] lg:auto-rows-[366px] grid-flow-row gap-4">
            {pressCards.map((card, key) => (
            <div key={key} className="w-full h-full p-0.5 pb-3 bg-darkslategray-600 rounded-xl">
                <div className="w-full h-full bg-white p-7 lg:pb-5 rounded-[10px] flex flex-col justify-between">
                    <div className="xl:space-y-8 lg:space-y-3">
                        <div className="relative w-full xl:h-[283px] lg:h-[184px] flex items-center justify-center border-[0.5px] border-black rounded-xl overflow-hidden">
                            <div className="relative xl:w-[442px] xl:h-[103px] lg:w-[266px] lg:h-[66px]">
                                <Image
                                    src={card.src}
                                    alt={card.company}
                                    fill={true}
                                    sizes="100%"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <h4 className="xl:text-3xl lg:text-xl font-bold text-darkslategray-600 w-full">
                            {card.title}
                        </h4>
                    </div>
                    <Link href={`/press/${card.company}`} className="xl:text-xl lg:text-sm text-tango-500 underline w-full">Read Article</Link>
                </div>
            </div>
            ))}

        </div>
    )
}

export default PressCards;