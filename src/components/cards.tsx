import Image from "next/image";
import MoreButton from "./UI/morebutton";
import { CompanyCards } from "./../assets/data";
import Link from "next/link";

const Cards = ({length}: {length: number}) => {
    return (
        <div className="cards grid grid-cols-3 auto-rows-[384px] gap-4 px-48 mt-16">
            {CompanyCards.map((card, index) => {
                if (index >= length) return null;
                let href = card.available ? `/${card.brandImage.alt}` : '/';
                return (
                    <div key={index} className="group relative p-0.5 pb-3 bg-gradient-to-b from-darkslategray-600/60 to-darkslategray-600 rounded-xl cursor-pointer">
                        <Link href={`/study/${href}`}>
                            <div className="info relative flex flex-col justify-between z-10 w-full h-58 px-6 py-6 text-left bg-neutral-100 rounded-t-[10px] overflow-hidden transition-all duration-500 group-hover:h-72">
                                <p 
                                className={`relative text-3xl text-darkslategray-600 font-semibold text-${card.title.type} z-10`}
                                dangerouslySetInnerHTML={{ __html: card.title.name }}
                                >
                                </p>
                                <div className={`tags relative flex ${card.tags.length === 3 ? 'justify-between' : 'space-x-4'} items-center z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}>
                                    {card.tags.map((tag, index) => (
                                        <div key={index} className="tag px-4 py-0.5 bg-transparent border-[1px] border-darkslategray-600 rounded-full text-darkslategray-600 text-sm">{tag}</div>
                                    ))}
                                </div>
                                <div className="absolute w-full h-full bg-card-pattern top-0 left-0 transition-opacity duration-500 group-hover:opacity-0" />
                            </div>
                            <div className="absolute w-full bottom-3 left-0 px-0.5 flex flex-col items-end w-full rounded-b-[10px]">
                                <Image
                                    src={card.bgImage.src}
                                    width={1520}
                                    height={560}
                                    alt={card.bgImage.alt}
                                    className="w-full rounded-b-xl brightness-[0.8] transition-all duration-500 group-hover:brightness-100"
                                />
                                <Image
                                    src={card.brandImage.src}
                                    width={134}
                                    height={50}
                                    alt={card.brandImage.alt}
                                    className={`absolute w-[${card.brandImage.width}px] h-[${card.brandImage.height}px] bottom-6 left-6`}
                                />
                                {card.available                            
                                ? <MoreButton className="absolute bottom-6 right-24 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:right-6" />
                                : <p className="text-sm font-bold italic text-white absolute bottom-6 right-24 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:right-6">Coming Soon</p>
                                }          
                            </div>
                        </Link>
                    </div>
                )   
            })}
        </div>
    )
}

export default Cards;