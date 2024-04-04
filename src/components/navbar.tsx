"use client"
import Image from "next/image";
import Link from "next/link";
import MainButton from "./UI/mainbutton";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Images } from "@/assets/image";
import NavModal from "./UI/navmodal";
import BurgerButton from "./UI/burgerbutton";

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [active, setActive] = useState(false);
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
        <>
            <NavModal active={active} setActive={setActive}/>
            <nav 
                className={clsx(
                    "fixed w-full h-18 lg:px-12 md:px-3 z-40",
                    "flex justify-between items-center",
                    "backdrop-blur border-darkslategray-500/60",
                    "lg:transition-all lg:duration-500 transform",
                    !visible && 'lg:-translate-y-18',
                    active && 'border-0 bg-darkslategray-600',
                    !active && 'border-b-[1px] bg-white/85'
                )}
            >   
                <Link href={'/'} className="relative xl:h-[32px] xl:w-max lg:h-[26px]">
                    <Image
                        src={Images.SNAPLISTINGS}
                        width={235}
                        height={26}
                        alt="SNAPLISTINGS"
                        className={clsx("h-full w-full", active && 'hidden')} 
                    />
                    <Image
                        src={Images.SNAPLISTINGS_WHITE}
                        width={235}
                        height={26}
                        alt="SNAPLISTINGS"
                        className={clsx("h-full w-full", !active && 'hidden')} 
                    />
                </Link>
                <div className="links sm:hidden lg:flex items-center  absolute left-1/2 transform -translate-x-1/2 h-full  space-x-12">
                    <Link href={'/about'} className="relative text-base text-darkslategray-600">About</Link>
                    <Link href={'/study'} className="relative text-base text-darkslategray-600">Case Studies</Link>
                    <Link href={'/press'} className="relative text-base text-darkslategray-600">Press</Link>
                </div>
                <BurgerButton active={active} setActive={setActive} className="w-8 h-6"/>
                <MainButton className="sm:hidden lg:flex w-40 h-11 bg-white border-darkslategray-600" bgClassName="bg-darkslategray-600">
                    <Link href="#formSection" className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer">Get Connected</Link>                
                </MainButton>
            </nav>
        </>
        
    )
}

export default Navbar;