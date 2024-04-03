'use client'
import { Brands } from "@/assets/data";
import { Images } from "@/assets/image";
import Image from "next/image";
import { ReactNode } from "react";


const BrandSlider = ({ mode, id }: { mode?: 'brand' | 'snaplistings', id: string }) => {

    return (
        <>
            {
                mode === 'brand' || mode === undefined ?
                    <div key={id} id={id} className="absolute left-0 bottom-16 h-28 w-full">
                        <div className={`xl:animate-slide-firstly absolute xl:left-[2536px] sm:left-0 top-0 h-28 min-w-full w-[2536px] overflow-x-hidden flex items-center xl:justify-end sm:justify-start space-x-18 z-30`}>
                            {Brands.map((brand, index) => (
                                <div 
                                    key={index} 
                                    className={`h-full flex items-center`}
                                >
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        width={brand.width}
                                        height={brand.height}
                                        quality={100}
                                        className={`xl:h-[70px] lg:h-[55px] w-max `}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="xl:animate-slide sm:hidden xl:block absolute left-[2536px] top-0 h-28 min-w-full w-[2536px] overflow-x-hidden flex items-center justify-end space-x-18 z-30 pl-12">
                            {Brands.map((brand, index) => (
                                <div 
                                    key={`${index}-second`} 
                                    className={`h-full w-max flex items-center`}
                                >
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        width={brand.width}
                                        height={brand.height}
                                        quality={100}
                                        className={`h-[70px] w-max `}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    : null
            }
            {
                mode === 'snaplistings' ?
                    <div key={id} id={id} className="absolute top-1/4 left-0 w-full h-28">
                        <div className="xl:flex sm:hidden animate-slide-slower-firstly absolute top-0 left-[3366px] h-28 min-w-full w-[3366px] overflow-x-hidden flex items-center space-x-18 z-10 pl-12">
                            {Array.from({ length: 4 }, (_, index): ReactNode => (
                                <>
                                    <div key={index} className={`h-full w-max flex items-center`}>
                                        <Image
                                            src={Images.SNAPLISTINGS_WHITE}
                                            alt={'SNAPLISTINGS'}
                                            width={700}
                                            height={75}
                                            quality={100}
                                        />
                                    </div>
                                    <div key={index + 8} className="clip-triangle w-2 h-1.5 bg-white"></div>
                                </>
                            ))}
                        </div>
                        <div className="xl:flex sm:hidden animate-slide-slower absolute top-0 left-[3366px] h-28 min-w-full w-[3366px] overflow-x-hidden flex items-center space-x-18 z-10 pl-12">
                            {Array.from({ length: 4 }, (_, index): ReactNode => (
                                <>
                                    <div key={index} className={`h-full w-max flex items-center`}>
                                        <Image
                                            src={Images.SNAPLISTINGS_WHITE}
                                            alt={'SNAPLISTINGS'}
                                            width={700}
                                            height={75}
                                            quality={100}
                                        />
                                    </div>
                                    <div key={index + 8} className="clip-triangle w-2 h-1.5 bg-white"></div>
                                </>
                            ))}
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default BrandSlider;