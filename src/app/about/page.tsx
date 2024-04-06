"use client"
import Image from "next/image";
import Form from "../../components/form";
import MainButton from "../../components/UI/mainbutton";
import { Images } from "../../assets/image";
import { staff } from "../../assets/data";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "next/link";

export default function About() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [progressBar, setProgressBar] = useState(100);
    const scrollBarHeight = useRef(0);

    const [card1Ref, card1inView] = useInView({threshold: 0.8})
    const [card2Ref, card2inView] = useInView({threshold: 0.8})
    const [card3Ref, card3inView] = useInView({threshold: 0.8})
    const [card4Ref, card4inView] = useInView({threshold: 0.8})


    function scrollHandler(scrollHeight: number, scrollingBarHeight: number) {
        const currentProgress = Math.round((window.scrollY * 100) / scrollHeight)
        setScrollProgress(currentProgress);

        if (0 <= window.scrollY && window.scrollY <= scrollingBarHeight + 50) {
            const progress = +(100 - ((window.scrollY * 100) / scrollingBarHeight)).toFixed(6);
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
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const browserHeight = document.documentElement.clientHeight;

        scrollBarHeight.current = document.getElementById('cardsSection')?.offsetHeight ?? 0;
        scrollHandler(scrollHeight - browserHeight, scrollBarHeight.current);
        window.addEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight, scrollBarHeight.current));
        return () => window.removeEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight, scrollBarHeight.current));
    }, [])
    useEffect(() => {
        const timeout = setInterval(switchImage, 800);
        return () => clearInterval(timeout);
    }, [])

    return (
        <main className="w-full min-h-screen">
            <div className={`line fixed h-0.5 top-0 left-1/2 transform -translate-x-1/2 bg-tango-500 shadow shadow-tango-500 z-40 transition-all duration-75`} style={{ width: `${scrollProgress}%` }}></div>
            <section className="w-full bg-steelgray-500 pt-32 flex flex-col items-center">
                <h2 className="relative text-4xl text-center font-bold text-frost-100 xl:text-5.5xl">The Snaplistings Story</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-down text-frost-100 my-24" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
                <section id="cardsSection" className="relative space-y-12 flex flex-col items-center overflow-y-hidden">
                    <div className="hidden lg:block absolute top-28 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-200/10 z-10">
                        <div className="h-full w-full bg-frost-200" style={{transform: `translateY(-${(scrollBarHeight.current * progressBar) / 100}px)`}}></div>
                    </div>
                    <article ref={card1Ref} className="relative w-full flex flex-col justify-between items-center lg:items-start lg:flex-row sm:w-[610px] lg:w-[768px] xl:w-[1184px]">
                        <div className={clsx(
                            "xl:w-[542px] lg:w-[329px] sm:w-[500px] w-full h-full",
                            'flex justify-center items-center sm:block',
                            "relative transition-all duration-300 order-3 lg:order-1",
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
                        <div className="relative w-full h-4 mb-2 flex flex-col items-center justify-between bg-steelgray-500 lg:order-2 lg:mb-0 lg:min-h-full lg:h-[314px] lg:w-[70px] xl:w-[100px] xl:h-[440px]">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-20 lg:bg-steelgray-500 lg:h-32 lg:-top-16">
                                <div className={clsx(
                                    "absolute w-4 h-4 lg:top-1/2 top-0 left-1/2 rounded-full",
                                    "transform -translate-x-1/2 transition-color duration-300",
                                    !card1inView && 'bg-gray-200/10',
                                    card1inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div className={clsx(
                            "w-full text-center h-full space-y-10 mb-6",
                            "lg:space-y-4 lg:mb-0 lg:w-[329px] lg:text-left lg:order-3 xl:w-[542px]",
                            'relative transition-all duration-300',
                            !card1inView && 'opacity-0 top-10',
                            card1inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="xl:text-3xl text-1.5xl font-bold text-frost-200">2018</h4>
                            <p className="xl:text-xl text-base text-frost-100">@snaplistings pioneered the use of social media to connect agents with renters or buyers in real-time. We blew up on Snapchat and Instagram in NYC.</p>
                        </div>
                    </article>
                    <article className="relative w-full flex flex-col justify-between items-center lg:items-start lg:flex-row sm:w-[610px] lg:w-[768px] xl:w-[1184px]">
                        <div className={clsx(
                            "w-full text-center h-full space-y-10 mb-6",
                            "lg:space-y-4 lg:mb-0 lg:w-[329px] lg:order-1 lg:text-left xl:w-[542px]",
                            'relative transition-all duration-300',
                            !card2inView && 'opacity-0 top-10',
                            card2inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="xl:text-3xl text-1.5xl font-bold text-frost-200">2019</h4>
                            <p className="xl:text-xl text-base text-frost-100">Building on the success of using social media for lead generation, Snaplistings evolved into a purpose-built marketing agency for real estate powering homebuilders, multi-family portfolios, proptech companies and new developments across the U.S. and Mexico. The company was led by Erica Sachse and backed by Melbourne-based Social Garden & Urban.com.au.</p>
                        </div>
                        <div className="relative w-full h-4 mb-2 flex flex-col items-center justify-between bg-steelgray-500 order-first lg:order-2 lg:mb-0 lg:min-h-full lg:h-[314px] lg:w-[70px] xl:w-[100px] xl:h-[440px]">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-20 lg:bg-steelgray-500 lg:h-32 lg:-top-16">
                                <div className={clsx(
                                    "absolute w-4 h-4 lg:top-1/2 top-0 left-1/2 rounded-full",
                                    "transform -translate-x-1/2 transition-color duration-300",
                                    !card2inView && 'bg-gray-200/10',
                                    card2inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div ref={card2Ref} className={clsx(
                            "xl:w-[542px] lg:w-[329px] sm:w-[500px] w-full h-full",
                            'flex justify-center items-center sm:block',
                            "relative transition-all duration-300 lg:order-3",
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
                    <article className="relative w-full flex flex-col justify-between items-center lg:items-start lg:flex-row sm:w-[610px] lg:w-[768px] xl:w-[1184px]">
                        <div ref={card3Ref} className={clsx(
                            "xl:w-[542px] lg:w-[329px] sm:w-[500px] w-full h-full",
                            'flex justify-center items-center sm:block',
                            "relative transition-all duration-300 order-3 lg:order-1",
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
                        <div className="relative w-full h-4 mb-2 flex flex-col items-center justify-between bg-steelgray-500 lg:order-2 lg:mb-0 lg:min-h-full lg:h-[314px] lg:w-[70px] xl:w-[100px] xl:h-[440px]">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-20 lg:bg-steelgray-500 lg:h-32 lg:-top-16">
                                <div className={clsx(
                                    "absolute w-4 h-4 lg:top-1/2 top-0 left-1/2 rounded-full",
                                    "transform -translate-x-1/2 transition-color duration-300",
                                    !card3inView && 'bg-gray-200/10',
                                    card3inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div className={clsx(
                            "w-full text-center h-full space-y-10 mb-6",
                            "lg:space-y-4 lg:mb-0 lg:w-[329px] lg:order-3 lg:text-left xl:w-[542px]",
                            'relative transition-all duration-300',
                            !card3inView && 'opacity-0 top-10',
                            card3inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="xl:text-3xl text-1.5xl font-bold text-frost-200">2021</h4>
                            <p className="xl:text-xl text-base text-frost-100">Snaplistings marries the art of brokering and the science of marketing with veteran New York Broker - Alyssa Brody to form Development Marketing Team (DMT) - an integrated marketing & sales brokerage focus on new development condos and rentals in New York and Florida.</p>
                        </div>
                    </article>
                    <article className="relative w-full flex flex-col justify-between items-center lg:items-start lg:flex-row sm:w-[610px] lg:w-[768px] xl:w-[1184px]">
                        <div className={clsx(
                            "w-full text-center h-full space-y-10 mb-6",
                            "lg:space-y-4 lg:mb-0 lg:w-[329px] lg:order-1 lg:text-left xl:w-[542px]",
                            'relative transition-all duration-300',
                            !card4inView && 'opacity-0 top-10',
                            card4inView && 'opacity-100 top-0',
                        )}>
                            <h4 className="xl:text-3xl text-1.5xl font-bold text-frost-200">2023</h4>
                            <p className="xl:text-xl text-base text-frost-100">A year filled with accolades recognizing Snaplistings&apos; unprecedented growth. We ranked in the top 1,000 on the 2023 Inc 5000 list, placing #32 in the Real Estate sector.</p>
                        </div>
                        <div className="relative w-full h-4 mb-2 flex flex-col items-center justify-between bg-steelgray-500 order-first lg:order-2 lg:mb-0 lg:min-h-full lg:h-[314px] lg:w-[70px] xl:w-[100px] xl:h-[440px]">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full z-20 lg:bg-steelgray-500 lg:h-32 lg:-top-16">
                                <div className={clsx(
                                    "absolute w-4 h-4 lg:top-1/2 top-0 left-1/2 rounded-full",
                                    "transform -translate-x-1/2 transition-color duration-300",
                                    !card4inView && 'bg-gray-200/10',
                                    card4inView && 'bg-frost-200',
                                )}></div>
                            </div>
                        </div>
                        <div ref={card4Ref} className={clsx(
                            "xl:w-[542px] lg:w-[329px] sm:w-[500px] w-full h-full",
                            "relative transition-all duration-300 lg:order-3",
                            !card4inView && 'opacity-0 top-10',
                            card4inView && 'opacity-100 top-0',
                        )}>
                            <div id="card-4" className="w-full h-full flex justify-center items-center lg:w-[326px] lg:h-[234px] xl:w-[500px] xl:h-[360px]">
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
                <div className="relative h-[356px] w-full flex flex-col justify-center items-center space-y-8 overflow-y-hidden" >
                    <h4 className="xl:text-3xl text-1.5xl font-bold text-frost-200 text-center z-10">
                        First we went viral, then we went global, be a <br/>
                        part of our next evolution.
                    </h4>
                    <MainButton className="w-40 h-11 border-frost-200 z-10 xl:w-48 xl:h-14" bgClassName="bg-frost-200">
                        <Link href="#formSection" className="text-darkslategray-600 font-bold xl:text-xl text-base whitespace-nowrap z-20 cursor-pointer">Get Connected</Link>
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
                <h2 className="xl:text-5.5xl/tight text-4xl text-center font-bold gradient-t">Meet the All-Star Line Up</h2>
                <p className="xl:text-xl lg:text-base text-sm text-center text-stone-900">We love what we do, where we&apos;re going, and most <br /> importantly, the people we slay alongside.</p>
                <section className={clsx(
                    "max-w-[1172px] w-full mt-14 gap-x-2.5 gap-y-7",
                    "flex flex-wrap justify-center", //mobile flex
                    "lg:grid lg:grid-cols-[repeat(auto-fit,250px)] xl:grid-cols-3 xl:auto-rows-[467px] lg:auto-rows-[310px]", //desktop grid 
                )}>
                    {staff.map((person, key) => (
                    <article key={key} className="w-[176px] h-[215px] p-0.5 pb-3 bg-darkslategray-600 rounded-xl lg:w-full lg:h-full">
                        <div className="w-full h-full bg-white rounded-[10px] overflow-hidden">
                            <div className="relative w-full h-[141px] bg-gray-300 lg:h-[200px] lg:w-full xl:h-[308px] xl:w-[382px]">
                                <Image 
                                    src={person.portrait}
                                    alt={person.name}
                                    fill={true}
                                    sizes="100%"
                                />
                            </div>
                            <div className="w-full flex flex-col justify-between px-3 pt-2 lg:h-24 lg:pt-4 lg:pb-4 xl:h-[145px] xl:px-6 xl:pt-5 xl:pb-8">
                                <h4 className="xl:text-3xl lg:text-2xl text-base font-bold text-darkslategray-600">{person.name}</h4>
                                <p className="xl:text-xl lg:text-sm text-[9px] italic text-stone-900">{person.occupation}</p>
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