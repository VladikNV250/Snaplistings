import Image from "next/image";
import Link from "next/link";
import { pressCards } from "./../assets/data";

const PressCards = () => {
    return (
        <div className="w-full px-4 grid grid-cols-1 auto-rows-[366px] grid-flow-row gap-4  lg:grid-cols-2 lg:w-[768px] xl:w-[1183px] xl:auto-rows-[538px]">
            {pressCards.map((card, key) => (
            <div key={key} className="w-full h-full p-0.5 pb-3 bg-darkslategray-600 rounded-xl">
                <div className="w-full h-full bg-white p-5 rounded-[10px] flex flex-col justify-between">
                    <div className="xl:space-y-8 space-y-3">
                        <div className="relative w-full w-full h-[176px] flex items-center justify-center border-[0.5px] border-black rounded-xl overflow-hidden px-8 sm:px-0 lg:h-[184px] xl:h-[283px]">
                            <div className="relative h-[66px] w-full sm:w-[616px] lg:w-[266px] lg:h-[66px] xl:w-[442px] xl:h-[103px]">
                                <Image
                                    src={card.src}
                                    alt={card.company}
                                    fill={true}
                                    sizes="100%"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <h4 className="xl:text-3xl text-xl font-bold text-darkslategray-600 w-full">
                            {card.title}
                        </h4>
                    </div>
                    <Link href={`/press/${card.company}`} className="xl:text-xl text-sm text-tango-500 underline w-full">Read Article</Link>
                </div>
            </div>
            ))}

        </div>
    )
}

export default PressCards;