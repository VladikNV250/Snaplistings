import Image from "next/image";
import MoreButton from "./UI/morebutton";
import { Images } from "../image";

const Cards = ({length}: {length: number}) => {
    const cards = [
        {
            title: {
                name: '$27 Million in Contracts & <span class="text-tango-500">50% Pre-Sales</span> in 6 Months', 
                type: 'balance'
            },
            tags: ['Marketing', 'Branding', 'Web Design'],
            bgImage: {src: Images.CARDS.CARD1, alt: 'LA BAIA builing'},
            brandImage: {src: Images.BRANDS.LABAIA, alt: 'La Baia', width: 134, height: 50},
            available: true,
        },
        {
            title: {
                name: '35% Pre-Leased, <span class="text-tango-500">58x Marketing ROI </span> For Market-Rate Apartments', 
                type: 'pretty'
            },
            tags: ['Marketing', 'Branding'],
            bgImage: {src: Images.CARDS.CARD2, alt: '30 Kent Building'},
            brandImage: {src: Images.BRANDS.KENT_STREET, alt: '30 Kent Street', width: 134, height: 50},
            available: true,
        },
        {
            title: {
                name: 'Generated  <span class="text-tango-500">2K Renter Leads</span> in 50 States, Creating Consumer Demand', 
                type: 'pretty'
            },
            tags: ['Marketing'],
            bgImage: {src: Images.CARDS.CARD3, alt: 'COHO business cards'},
            brandImage: {src: Images.BRANDS.ORI, alt: 'ORI', width: 70, height: 30},
            available: true,
        },
        {
            title: {
                name: '<span class="text-tango-500">224% Increase</span> in the Total Value of Leases Within 6 Months', 
                type: 'balance'
            },
            tags: ['Marketing', 'Branding', 'Web Design'],
            bgImage: {src: Images.CARDS.CARD4, alt: 'Tree Top Building'},
            brandImage: {src: Images.BRANDS.TREETOP, alt: 'Tree Top', width: 134, height: 30},
            available: true,
        },
        {
            title: {
                name: '<span class="text-tango-500">522.78% ROI</span> and $1.5M Increase in Lease Value', 
                type: 'balance'
            },
            tags: ['Marketing', 'Branding'],
            bgImage: {src: Images.CARDS.CARD5, alt: 'Stonehenge building'},
            brandImage: {src: Images.BRANDS.STONEHENGE, alt: 'Stonehenge', width: 128, height: 20},
            available: true,
        },
        {
            title: {
                name: '<span class="text-tango-500">26% Increase</span> in B2B sales opportunity attribution using a multi-touch funnel', 
                type: 'balance'
            },
            tags: ['Marketing', 'Branding', 'Web Design'],
            bgImage: {src: Images.CARDS.CARD6, alt: 'photo of a living room that can raise a bed to reveal a couch'},
            brandImage: {src: Images.BRANDS.ORI, alt: 'ORI', width: 70, height: 30},
            available: true,
        },
        {
            title: {
                name: 'Achieved <span class="text-tango-500">highest rental PPSQFT</span> in <br> lower Manhattan', 
                type: 'balance'
            },
            tags: ['Marketing', 'Web Design'],
            bgImage: {src: Images.CARDS.CARD7, alt: '2 Cooper Unit'},
            brandImage: {src: Images.BRANDS.TWOCOOPER, alt: '2COOPER', width: 70, height: 30},
            available: true,
        },
        {
            title: {
                name: 'Achieved <span class="text-tango-500">5.4x ROAS</span> for a global real estate conference', 
                type: 'balance'
            },
            tags: ['Marketing', 'Branding'],
            bgImage: {src: Images.CARDS.CARD8, alt: 'Cretech conference event'},
            brandImage: {src: Images.BRANDS.CRETECH, alt: 'Cretech', width: 70, height: 30},
            available: false,
        },
        {
            title: {
                name: '<span class="text-tango-500">17.2% lead-to-sale</span> with integrated marketing & sales for Westview', 
                type: 'balance'
            },
            tags: ['Marketing'],
            bgImage: {src: Images.CARDS.CARD9, alt: 'WestView Room'},
            brandImage: {src: Images.BRANDS.WV, alt: 'WV', width: 70, height: 30},
            available: false,
        },
        {
            title: {
                name: 'Successful market-entry website & product positioning for <span class="text-tango-500">AI powered</span> investor platform', 
                type: 'balance'
            },
            tags: ['Marketing', 'Web Design'],
            bgImage: {src: Images.CARDS.CARD10, alt: 'Haystacks Location Map'},
            brandImage: {src: Images.BRANDS.HAYSTACKAI, alt: 'Haystack.ai', width: 70, height: 30},
            available: false,
        },
    ]

    return (
        <div className="cards grid grid-cols-3 auto-rows-[384px] gap-4 px-48 mt-16">
            {cards.map((card, index) => {
                if (index >= length) return null;
                return (
                    <div key={index} className="group relative p-0.5 pb-3 bg-gradient-to-b from-darkslategray-600/60 to-darkslategray-600 rounded-xl cursor-pointer">
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
                    </div>
                )   
            })}
        </div>
    )
}

export default Cards;