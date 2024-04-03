"use client"
import { pressCards } from "@/assets/data";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PressPage( {params}: { params: { press: string } } ) {
    const spaceRegEx = /%20/g;
    const pressName = params.press.replace(spaceRegEx, ' ');
    const press = pressCards.find(card => card.company === pressName) ?? {
        title: '', 
        src: '', 
        company: '',
        href: '',
        description: '',
    };

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
            <section className="relative w-full pt-32 pb-18 flex flex-col items-center bg-white shadow shadow-black/15 z-10">
                <article className="xl:w-[1180px] lg:w-full xl:px-0 lg:px-14"> 
                    <Image 
                        src={press.src}
                        alt={press.company}
                        width={9999}
                        height={9999}
                        className="xl:h-[55px] lg:h-[30px] w-auto object-contain"
                    />
                    <h2 className="w-full xl:text-5.5xl/tight lg:text-4xl font-bold text-darkslategray-600 mt-8 xl:mb-18 lg:mb-8">{press.title}</h2>
                    <Link href={press.href ?? ''} className="xl:text-xl lg:text-base text-tango-500 underline w-full">View Featured Article</Link>
                </article>
            </section>
            <section className="relative w-full py-16 flex flex-col items-center bg-neutral-100">
                <p 
                    className="xl:text-xl lg:text-base text-stone-900 max-w-full xl:w-[1183px] lg:w-[1160px]"
                    dangerouslySetInnerHTML={{ __html: press.description }}
                ></p>
            </section>
            <Form />
        </main>
    )
}