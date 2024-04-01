"use client"
import Image from "next/image";
import Link from "next/link";
import MainButton from "./UI/mainbutton";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Images } from "@/assets/image";

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const oldScroll = useRef(0);

    function scrollHandler() {
        if (window.scrollY > oldScroll.current) 
            setVisible(false);
        else 
            setVisible(true);

        oldScroll.current = window.scrollY;
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    },)

    return (
        <nav 
            className={clsx(
                "fixed w-full h-18 px-12 z-30",
                "flex justify-between items-center",
                "bg-white/85 backdrop-blur border-b-[1px] border-darkslategray-500/60",
                "transition-all duration-500 transform",
                !visible && '-translate-y-18'
            )}
        >   
            <Link href={'/'}>
                <Image
                    src={Images.SNAPLISTINGS}
                    width={235}
                    height={26}
                    alt="SNAPLISTINGS" 
                />
            </Link>
            <div className="links absolute left-1/2 transform -translate-x-1/2 h-full flex items-center space-x-12">
                <Link href={'/about'} className="relative text-base text-darkslategray-600">About</Link>
                <Link href={'/study'} className="relative text-base text-darkslategray-600">Case Studies</Link>
                <Link href={'/press'} className="relative text-base text-darkslategray-600">Press</Link>
            </div>
            <MainButton className="w-40 h-11 bg-white border-darkslategray-600" bgClassName="bg-darkslategray-600">
                <Link href="#form" className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer">Get Connected</Link>                
            </MainButton>
        </nav>
    )
}

export default Navbar;