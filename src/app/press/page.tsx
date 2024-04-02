"use client"
import { useEffect, useState } from "react";
import Form from "../../components/form";
import PressCards from "../../components/presscards";

export default function Press() {
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
            <section className="w-full flex flex-col items-center bg-white pt-32 pb-24 space-y-20">
                <h2 className="relative text-5.5xl text-center font-bold mt-5 bg-gradient-to-b from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text"> 
                    Our Latest Press Coverage
                </h2>
                <PressCards />
            </section>
            <Form />
        </main>
    )
}