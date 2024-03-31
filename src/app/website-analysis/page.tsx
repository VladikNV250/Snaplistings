import Image from "next/image";
import { Images } from "../../assets/image";
import MainButton from "../../components/UI/mainbutton";

export default function Analysis() {
    return (
        <main className="w-full min-h-screen">
            <section className="relative w-full pt-32 pb-16 flex flex-col items-center bg-stone-800">
                <h4 className="text-3xl font-bold text-center text-frost-200 z-10">
                    Are you getting as many leads on <br />
                    your website as you should be? 
                </h4>
                <p className="text-xl text-frost-100 text-center z-10">
                    We&apos;ll do a free analysis on how your site isn&apos;tb <br />
                    optimized for lead generation and where to improve to <br />
                    get 30% more qualified leads.
                </p>
                <form className="z-10 w-96 flex flex-col items-center mt-16" action="">
                    <div className="flex flex-col w-full space-y-1 mb-6">
                        <label htmlFor="url" className="text-base text-frost-200 font-medium">Website URL*</label>
                        <input 
                            required
                            defaultValue={''}
                            type="text" 
                            name="url"
                            className="w-full py-2.5 px-3.5 bg-steelgray-500 border-[1px] border-frost-200 rounded text-base text-frost-200 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                    <div className="flex flex-col w-full space-y-1 mb-3">
                        <label htmlFor="email" className="text-base text-frost-200 font-medium">Email*</label>
                        <input 
                            required
                            defaultValue={''}
                            type="email" 
                            name="email"
                            className="w-full py-2.5 px-3.5 bg-steelgray-500 border-[1px] border-frost-200 rounded text-base text-frost-200 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                    <div className="flex flex-col w-full space-y-1 mb-6">
                        <label htmlFor="numberOfUnits" className="text-base text-frost-200 font-medium">Number of Units Left to Lease</label>
                        <input 
                            required
                            defaultValue={''}
                            type="text" 
                            name="numberOfUnits"
                            className="w-full py-2.5 px-3.5 bg-steelgray-500 border-[1px] border-frost-200 rounded text-base text-frost-200 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                    <div className="flex flex-col w-full space-y-1 mb-16">
                        <label htmlFor="avarageRent" className="text-base text-frost-200 font-medium">Avarage Rent</label>
                        <input 
                            required
                            defaultValue={''}
                            type="text" 
                            name="avarageRent"
                            className="w-full py-2.5 px-3.5 bg-steelgray-500 border-[1px] border-frost-200 rounded text-base text-frost-200 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                    <MainButton className="w-80 h-12 bg-transparent z-10 border-frost-200" bgClassName="bg-frost-200">
                    <p className="text-xl text-darkslategray-600 font-bold z-10">
                        Get Free a Website Analysis
                    </p>
                    </MainButton>
                </form>
                <Image 
                    src={Images.BACKGROUND5}
                    alt=""
                    fill={true}
                    sizes="100vw"
                />
            </section>
        </main>
    )
}