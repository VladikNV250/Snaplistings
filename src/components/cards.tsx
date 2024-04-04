import Image from "next/image";
import MoreButton from "./UI/morebutton";
import { CompanyCards } from "./../assets/data";
import Link from "next/link";

const Cards = ({length}: {length: number}) => {
    return (
        <div className="cards xl:w-[1187px] lg:w-[770px] md:w-full grid lg:grid-cols-3 md:grid-cols-2 xl:auto-rows-[384px] lg:auto-rows-[246px] md:auto-rows-[280px] gap-4 mt-16">
            {CompanyCards.map((card, index) => {
                if (index >= length) return null;
                let href = card.available ? `/${card.href}` : '/';
                return (
                    <div key={index} className="group relative p-0.5 pb-3 bg-gradient-to-b from-darkslategray-600/60 to-darkslategray-600 rounded-xl cursor-pointer">
                        <Link href={`/study/${href}`}>
                            <div className="info relative flex flex-col justify-between z-10 w-full xl:h-58 lg:h-40 md:h-[134px] xl:p-6 lg:p-2.5 md:p-4 text-left bg-neutral-100 rounded-t-[10px] overflow-hidden transition-all duration-500 xl:group-hover:h-72">
                                <p 
                                className={`relative xl:text-3xl md:text-1.5xl/tight text-darkslategray-600 font-semibold text-balance z-10`}
                                dangerouslySetInnerHTML={{ __html: card.title.name }}
                                >
                                </p>
                                <div className={`tags relative flex ${card.tags.length === 3 ? 'justify-between' : 'space-x-4'} items-center z-10 opacity-0 transition-opacity duration-300 xl:group-hover:opacity-100`}>
                                    {card.tags.map((tag, index) => (
                                        <div key={index} className="tag px-4 py-0.5 bg-transparent border-[1px] border-darkslategray-600 rounded-full text-darkslategray-600 text-sm">{tag}</div>
                                    ))}
                                </div>
                                <div className="xl:block md:hidden absolute w-full h-full bg-card-pattern top-0 left-0 transition-opacity duration-500 group-hover:opacity-0" />
                            </div>
                            <div className="absolute w-full bottom-3 left-0 px-0.5 flex flex-col items-end w-full rounded-b-[10px]">
                                <Image
                                    src={card.bgImage.src}
                                    width={1520}
                                    height={560}
                                    alt={card.bgImage.alt}
                                    className="w-full rounded-b-xl brightness-[0.8] transition-all duration-500 xl:group-hover:brightness-100"
                                />
                                <div className="absolute xl:bottom-6 md:bottom-1 xl:left-6 md:left-3 xl:w-[134px] xl:h-[50px] lg:w-[86px] lg:h-[32px] md:w-[126px] md:h-[47px] flex items-end justify-start">
                                    <Image
                                        src={card.brandImage.src}
                                        alt={card.brandImage.alt}
                                        fill={true}
                                        sizes="100%"
                                        quality={100}
                                        objectFit="contain"
                                    />
                                </div>
                                {card.available                            
                                ? <MoreButton className="absolute xl:bottom-6 md:bottom-2 xl:right-24 md:right-5 xl:opacity-0 transition-all duration-500 xl:group-hover:opacity-100 xl:group-hover:right-6" />
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