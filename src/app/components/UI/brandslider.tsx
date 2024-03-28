'use client'
import { Images } from "@/app/image";
import Image from "next/image";
import { ReactNode, useEffect} from "react";


const BrandSlider = ({ mode, id }: { mode?: 'brand' | 'snaplistings', id: string }) => {
    const brandsSource = Images.BRANDS;
    const brandsSizes = Images.BRANDS.BRANDSIZES;
    const Brands = [
        {name: 'Cretech', src: brandsSource.CRETECH, width: brandsSizes.CRETECH.width, height: brandsSizes.CRETECH.height},
        {name: '30 Kent Street', src: brandsSource.KENT_STREET, width: brandsSizes.KENT_STREET.width, height: brandsSizes.KENT_STREET.height},
        {name: 'Labaia', src: brandsSource.LABAIA, width: brandsSizes.LABAIA.width, height: brandsSizes.LABAIA.height},
        {name: 'Ori', src: brandsSource.ORI, width: brandsSizes.ORI.width, height: brandsSizes.ORI.height},
        {name: 'Sachse', src: brandsSource.SACHSE, width: brandsSizes.SACHSE.width, height: brandsSizes.SACHSE.height},
        {name: 'Stonehenge', src: brandsSource.STONEHENGE, width: brandsSizes.STONEHENGE.width, height: brandsSizes.STONEHENGE.height},
        {name: 'Tree Top', src: brandsSource.TREETOP, width: brandsSizes.TREETOP.width, height: brandsSizes.TREETOP.height},
        {name: 'WW', src: brandsSource.WONDERWORKS, width: brandsSizes.WONDERWORKS.width, height: brandsSizes.WONDERWORKS.height},
    ];


    function arrangeSlider() {
        const brandSlider = document.getElementById(id);
        const firstPart = brandSlider?.firstElementChild;
        if (firstPart) {
        switch (mode) {
            case 'brand':
                firstPart.className = 
                `animate-slide
                absolute left-[2536px] top-0 
                h-28 min-w-full w-[2536px] overflow-x-hidden 
                flex items-center justify-end space-x-18 z-30 pl-12`;
                break;
            case 'snaplistings':
                firstPart.className = `
                animate-slide-slower 
                absolute top-0 left-[3366px] 
                h-28 min-w-full w-[3366px] overflow-x-hidden 
                flex items-center space-x-18 z-10 pl-12`;
                break;
        }

        
        }
    }

    useEffect(() => {
        const brandSlider = document.getElementById(id);
        const firstPart = brandSlider?.firstElementChild;
        if (firstPart) {
            firstPart.addEventListener('animationend', arrangeSlider, {once: true});
            return () => firstPart.removeEventListener('animationend', arrangeSlider);
        }
    }, [])
    
    return (
        <>
            {
                mode === 'brand' || mode === undefined ?
                    <div id={id} className="absolute left-0 bottom-16 h-28 w-full">
                        <div className={`animate-slide-firstly absolute left-0 top-0 h-28 min-w-full w-max overflow-x-hidden flex items-center justify-end space-x-18 z-30`}>
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
                                        className={`h-[70px] w-max `}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="animate-slide absolute left-[2536px] top-0 h-28 min-w-full w-[2536px] overflow-x-hidden flex items-center justify-end space-x-18 z-30 pl-12">
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
                    <div id={id} className="absolute top-1/4 left-0 w-full h-28">
                        <div className="animate-slide-slower-firstly absolute top-0 left-0 h-28 min-w-full overflow-x-hidden flex items-center space-x-18 z-10">
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
                        <div className="animate-slide-slower absolute top-0 left-[3366px] h-28 min-w-full w-[3366px] overflow-x-hidden flex items-center space-x-18 z-10 pl-12">
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