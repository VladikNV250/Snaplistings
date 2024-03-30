import Image from "next/image";
import Link from "next/link";
import { Images } from "../image";

const PressCards = () => {
    const press = [
        {title: 'Snaplistings ranks in top 1,000 on the 2023 Inc 5000 List!', src: Images.PRESS.INC, company: 'inc'},
        {title: "Crain's 2023 Notable Leaders in Marketing Award Winner", src: Images.PRESS.CRAINCOMM, company: 'crain-communications'},
        {title: 'HousingWire 2023 Marketing Leader Award Winner', src: Images.PRESS.HS, company: 'housingwire'},
        {title: 'Data Drives Deals; How Digital Marketing and Analytics Can Help Drive Real Estate Sales', src: Images.PRESS.CUSTOMTHINK, company: 'customer-think'},
        {title: '2023 Top Women in Marketing Awards Winners', src: Images.PRESS.TOPWOMEN, company: 'topwomen'},
    ]

    return (
        <div className="w-[1183px] grid grid-cols-2 auto-rows-[538px] grid-flow-row gap-4">
            {press.map(card => (
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
                    <Link href={`/${card.company}`} className="text-xl text-tango-500 underline w-full">Read Article</Link>
                </div>
            </div>
            ))}

        </div>
    )
}

export default PressCards;