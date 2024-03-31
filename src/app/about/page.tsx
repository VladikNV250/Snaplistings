"use client"
import Image from "next/image";
import Form from "../../components/form";
import MainButton from "../../components/UI/mainbutton";
import { Images } from "../../assets/image";
import { staff } from "../../assets/data";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "next/link";

export default function About() {
    const [progressBar, setProgressBar] = useState(100);

    const [card1Ref, card1inView] = useInView({threshold: 0.8})
    const [card2Ref, card2inView] = useInView({threshold: 0.8})
    const [card3Ref, card3inView] = useInView({threshold: 0.8})
    const [card4Ref, card4inView] = useInView({threshold: 0.8})


    function scrollHandler() {
        if (0 <= window.scrollY && window.scrollY <= 2000) {
            const progress = +(100 - ((window.scrollY * 100) / 1952)).toFixed(6);
            if (progress <= 0) setProgressBar(0);
            else setProgressBar(progress);
        }
        
    }

    function switchImage() {
        const card = document.getElementById('card-4');
        const currentImage = card?.querySelector('img:not(.hidden)');
        const nextImage = currentImage?.nextElementSibling ?? card?.firstElementChild;
        if (card && currentImage && nextImage) {
            currentImage.classList.add('hidden');
            nextImage.classList.remove('hidden');
        } 
    }


    useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [])
    useEffect(() => {
        const timeout = setInterval(switchImage, 800);
        return () => clearInterval(timeout);
    }, [])

    return (
        <main className="w-full min-h-screen">
            <section className="w-full bg-steelgray-500 pt-32 flex flex-col items-center">
                <h2 className="relative text-5.5xl text-center font-bold text-frost-100">The Snaplistings Story</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-down text-frost-100 my-24" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
                <section className="relative space-y-12 overflow-y-hidden">
                    <div className="absolute top-28 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-200/10 z-10">
                        <div className="h-full w-full bg-frost-200" style={{transform: `translateY(-${(1952 * progressBar) / 100}px)`}}></div>
                    </div>
                    <article ref={card1Ref} className="relative w-[1184px] flex justify-between items-start">
                        <div className={clsx(
                            "w-[542px] h-full",
                            "relative transition-all duration-300",
                            !card1inView && 'opacity-0 top-10',
                            card1inView && 'opacity-100 top-0',
                        )}>
                            <Image 
                                src={Images.ABOUT_CARDS.CARD1}
                                alt=""
                                width={500}
                                height={360}
                            />
                        </div>
                        <div className="relative w-[100px] min-h-full h-[440px] flex flex-col items-center justify-between bg-steelgray-500">
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full h-32 bg-steelgray-500 z-20">
                                <div className={clsx(
                                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-color duration-300",
                                    !card1inView && 'bg-gray-200/10',
                                    card1inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div className={clsx(
                            "w-[542px] h-full space-y-4",
                            'relative transition-all duration-300',
                            !card1inView && 'opacity-0 top-10',
                            card1inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="text-3xl font-bold text-frost-200">2018</h4>
                            <p className="text-xl text-frost-100">@snaplistings pioneered the use of social media to connect agents with renters or buyers in real-time. We blew up on Snapchat and Instagram in NYC.</p>
                        </div>
                    </article>
                    <article className="relative w-[1184px] flex justify-between items-start">
                        <div className={clsx(
                            "w-[542px] h-full space-y-4",
                            'relative transition-all duration-300',
                            !card2inView && 'opacity-0 top-10',
                            card2inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="text-3xl font-bold text-frost-200">2019</h4>
                            <p className="text-xl text-frost-100">Building on the success of using social media for lead generation, Snaplistings evolved into a purpose-built marketing agency for real estate powering homebuilders, multi-family portfolios, proptech companies and new developments across the U.S. and Mexico. The company was led by Erica Sachse and backed by Melbourne-based Social Garden & Urban.com.au.</p>
                        </div>
                        <div className="relative w-[100px] min-h-full h-[440px] flex flex-col items-center justify-between bg-steelgray-500">
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full h-32 bg-steelgray-500 z-20">
                            <div className={clsx(
                                "absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-color duration-300",
                                !card2inView && 'bg-gray-200/10',
                                card2inView && 'bg-frost-200',
                            )}></div>
                            </div>
                        </div>
                        <div ref={card2Ref} className={clsx(
                            "w-[542px] h-full",
                            "relative transition-all duration-300",
                            !card2inView && 'opacity-0 top-10',
                            card2inView && 'opacity-100 top-0',
                        )}>
                            <Image 
                                src={Images.ABOUT_CARDS.CARD2}
                                alt=""
                                width={500}
                                height={360}
                            />
                        </div>
                    </article>
                    <article className="relative w-[1184px] flex justify-between items-start">
                        <div ref={card3Ref} className={clsx(
                            "w-[542px] h-full",
                            "relative transition-all duration-300",
                            !card3inView && 'opacity-0 top-10',
                            card3inView && 'opacity-100 top-0',
                        )}>
                            <Image 
                                src={Images.ABOUT_CARDS.CARD3}
                                alt=""
                                width={500}
                                height={360}
                            />
                        </div>
                        <div className="relative w-[100px] min-h-full h-[440px] flex flex-col items-center justify-between bg-steelgray-500">
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full h-32 bg-steelgray-500 z-20">
                                <div className={clsx(
                                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-color duration-300",
                                    !card3inView && 'bg-gray-200/10',
                                    card3inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div className={clsx(
                            "w-[542px] h-full space-y-4",
                            'relative transition-all duration-300',
                            !card3inView && 'opacity-0 top-10',
                            card3inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="text-3xl font-bold text-frost-200">2021</h4>
                            <p className="text-xl text-frost-100">Snaplistings marries the art of brokering and the science of marketing with veteran New York Broker - Alyssa Brody to form Development Marketing Team (DMT) - an integrated marketing & sales brokerage focus on new development condos and rentals in New York and Florida.</p>
                        </div>
                    </article>
                    <article className="relative w-[1184px] flex justify-between items-start">
                        <div className={clsx(
                            "w-[542px] h-full space-y-4",
                            'relative transition-all duration-300',
                            !card4inView && 'opacity-0 top-10',
                            card4inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="text-3xl font-bold text-frost-200">2023</h4>
                            <p className="text-xl text-frost-100">A year filled with accolades recognizing Snaplistings' unprecedented growth. We ranked in the top 1,000 on the 2023 Inc 5000 list, placing #32 in the Real Estate sector.</p>
                        </div>
                        <div className="relative w-[100px] min-h-full h-[440px] flex flex-col items-center justify-between bg-steelgray-500">
                            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-full h-32 bg-steelgray-500 z-20">
                                <div className={clsx(
                                    "absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full transition-color duration-300",
                                    !card4inView && 'bg-gray-200/10',
                                    card4inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div ref={card4Ref} className={clsx(
                            "w-[542px] h-full",
                            "relative transition-all duration-300",
                            !card4inView && 'opacity-0 top-10',
                            card4inView && 'opacity-100 top-0',
                        )}>
                            <div id="card-4" className="w-[500px] h-[360px] flex justify-center items-center">
                                <Image 
                                    src={Images.PRESS.INC_WHITE}
                                    alt=""
                                    width={500}
                                    height={360}
                                    className="hidden"
                                />
                                <Image 
                                    src={Images.PRESS.CRAINCOMM_WHITE}
                                    alt=""
                                    width={500}
                                    height={360}
                                    className="hidden"
                                />
                                <Image 
                                    src={Images.PRESS.CUSTOMTHINK_WHITE}
                                    alt=""
                                    width={500}
                                    height={360}
                                    className="hidden"
                                />
                                <Image 
                                    src={Images.PRESS.HS_WHITE}
                                    alt=""
                                    width={500}
                                    height={360}
                                    className="hidden"
                                />
                                <Image 
                                    src={Images.PRESS.TOPWOMEN_WHITE}
                                    alt=""
                                    width={500}
                                    height={360}
                                    className=""
                                />
                            </div>
                        </div>
                    </article>
                </section>
                <div className="relative h-[356px] w-full flex flex-col justify-center items-center space-y-8">
                    <h4 className="text-3xl font-bold text-frost-200 text-center z-10">
                        First we went viral, then we went global, be a <br/>
                        part of our next evolution.
                    </h4>
                    <MainButton className="w-48 h-14 border-frost-200 z-10" bgClassName="bg-frost-200">
                        <Link href="#form" className="text-darkslategray-600 font-bold text-xl whitespace-nowrap z-20 cursor-pointer">Get Connected</Link>
                    </MainButton>
                    <Image 
                        src={Images.BACKGROUND2}
                        alt=""
                        fill={true}
                        sizes="100vw"
                    />
                </div>
            </section>
            <section className="w-full flex flex-col items-center py-16 bg-white">
                <h2 className="text-5.5xl text-center font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">Meet the All-Star Line Up</h2>
                <p className="text-xl text-center text-stone-900">We love what we do, where we&apos;re going, and most <br /> importantly, the people we slay alongside.</p>
                <section className="w-[1172px] grid grid-cols-3 auto-rows-[467px] gap-x-2.5 gap-y-7 mt-14">
                    {staff.map(person => (
                    <article className="w-full h-full p-0.5 pb-3 bg-darkslategray-600 rounded-xl">
                        <div className="w-full h-full bg-white rounded-[10px] overflow-hidden">
                            <div className="relative w-[382px] h-[308px] bg-gray-300">
                                <Image 
                                    src={person.portrait}
                                    alt={person.name}
                                    fill={true}
                                    sizes="100%"
                                />
                            </div>
                            <div className="w-full h-[145px] flex flex-col justify-between px-6 pt-5 pb-8">
                                <h4 className="text-3xl font-bold text-darkslategray-600">{person.name}</h4>
                                <p className="text-xl italic text-stone-900">{person.occupation}</p>
                            </div>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
            <Form />
        </main>
    )
}