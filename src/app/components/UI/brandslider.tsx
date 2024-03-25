import { Images } from "@/app/image";
import Image from "next/image";
import { ReactNode } from "react";
type BrandSize = {
    [key: string]: {
        width: number,
        height: number,
    }
}

const BrandSlider = ({ mode }: { mode?: 'brand' | 'snaplistings' }) => {
    return (
        <>
            {
                mode === 'brand' || mode === undefined ?
                    <div className="absolute h-28 min-w-full overflow-x-hidden bottom-16 left-0 flex items-center space-x-18 z-10">
                        {Object.entries(Images.BRANDS).map((brand, index) => {
                            const [name, src] = brand;
                            if (name === 'BRANDSIZES') return null;
                            if (name === 'BRODER_SACHSE') return null;
                            if (name === 'CONTINUUM') return null;
                            if (name === 'HORIZONS') return null;
                            if (name === 'JMH') return null;

                            const brandSizes: BrandSize = Images.BRANDS.BRANDSIZES;
                            return (
                                <div key={index} className={`brand h-full w-max flex items-center`}>
                                    <Image
                                        src={src}
                                        alt={name}
                                        width={brandSizes[name].width}
                                        height={brandSizes[name].height}
                                        quality={100}
                                        className={`h-[70px] w-max `}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    : null
            }
            {
                mode === 'snaplistings' ?
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-0 h-28 min-w-full overflow-x-hidden flex items-center space-x-18 z-10">
                        {
                            Array.from({ length: 8 }, (_, index): ReactNode => {
                                return (
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
                                )
                            })
                        }
                    </div>
                    : null
            }
        </>
    )
}

export default BrandSlider;