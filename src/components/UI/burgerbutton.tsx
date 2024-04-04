"use client"

import clsx from "clsx";
import { useState } from "react";

interface Props {
    className?: string;
    active: boolean;
    setActive: Function;
}

const BurgerButton = ({className, active, setActive}: Props) => {

    function changeState() {
        if (active) setActive(false);
        else setActive(true);
    }

    return (
        <button className={`lg:hidden sm:flex sm:flex-col sm:justify-between sm:items-center ${className}`} onClick={changeState}>
            <div className={clsx(
                "w-full h-0.5 transition-all duration-300 delay-70", 
                active && 'bg-frost-200 origin-right -rotate-45', 
                !active && 'bg-darkslategray-600')}>
            </div>
            <div className={clsx(
                "w-full h-0.5 bg-darkslategray-600 transition-all duration-300 delay-70", 
                active && 'w-0')}>
            </div>
            <div className={clsx(
                "w-full h-0.5 transition-all duration-300 delay-70", 
                active && 'bg-frost-200 origin-right rotate-45', 
                !active && 'bg-darkslategray-600')}>
            </div>
        </button>
    )
}

export default BurgerButton;