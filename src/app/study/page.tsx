"use client"
import Link from "next/link";
import MainButton from "../../components/UI/mainbutton";
import Cards from "../../components/cards";
import Image from "next/image";
import { Images } from "../../assets/image";
import { useEffect, useState } from "react";

export default function Study() {
    const [scrollProgress, setScrollProgress] = useState(0);

    function scrollHandler(scrollHeight: number) {
        const currentProgress = Math.round((window.scrollY * 100) / scrollHeight)
        setScrollProgress(currentProgress);
    }

    useEffect(() => {
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const browserHeight = document.documentElement.clientHeight;
        scrollHandler(scrollHeight - browserHeight);
        window.addEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight));
        return () => window.removeEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight));
    }, [])

    return (
        <main className="w-full min-h-screen">
            <div className={`line fixed h-0.5 top-0 left-1/2 transform -translate-x-1/2 bg-tango-500 shadow shadow-tango-500 z-40 transition-all duration-75`} style={{ width: `${scrollProgress}%` }}></div>
            <section className="relative w-full flex flex-col items-center pt-32 pb-12 bg-white">
                <h2 className="relative xl:text-5.5xl/none text-4xl text-center font-bold mt-5 gradient-b transition-all duration-300">
                    Case Studies
                </h2>
                <p className="xl:text-xl text-base text-center mt-4 relative transition-all duration-700 delay-100">
                    We build and execute effective marketing & sales solutions that deliver real ROI.
                </p>
            </section>
            <section className="relative w-full flex flex-col items-center pb-12 bg-neutral-100 shadow-xl-up">
                <Cards length={10}/>
            </section>
            <section className="relative w-full lg:h-[487px] h-[434px] flex flex-col pt-20 items-center bg-steelgray-500">
                <h2 className="xl:text-5.5xl/tight text-4xl/tight text-center font-bold text-frost-200 z-10">
                Maximize Leads <br />
                On Your Website
                </h2>
                <p className="text-base text-center text-white z-10">
                    We&apos;ll do a free analysis on how your site isn&apos;t optimized for lead <br />
                    generation and where to improve to get 30% more qualified leads.
                </p>
                <MainButton className="w-80 h-12 bg-transparent mt-14 z-10 border-frost-200" bgClassName="bg-frost-200">
                    <Link href={'/website-analysis'} className="text-xl text-darkslategray-600 font-semibold z-10">
                        Get Free a Website Analysis
                    </Link>
                </MainButton>
                <div className="absolute w-full h-full top-0 left-0">
                    <Image 
                        src={Images.BACKGROUND4}
                        alt="background"
                        fill={true}
                    />
                </div>
            </section>
        </main>
    )
}