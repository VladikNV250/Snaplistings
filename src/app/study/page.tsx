import Link from "next/link";
import MainButton from "../../components/UI/mainbutton";
import Cards from "../../components/cards";
import Image from "next/image";
import { Images } from "../../assets/image";

export default function Study() {
    return (
        <main className="w-full min-h-screen">
            <section className="relative w-full flex flex-col items-center pt-32 pb-12 bg-white">
                <h2 className="relative text-5.5xl text-center font-bold mt-5 bg-gradient-to-b from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text transition-all duration-300">
                    Case Studies
                </h2>
                <p className="text-xl text-center mt-4 relative transition-all duration-700 delay-100">
                    We build and execute effective marketing & sales solutions that deliver real ROI.
                </p>
            </section>
            <section className="relative w-full flex flex-col items-center pb-12 bg-neutral-100 shadow-xl-up">
                <Cards length={10}/>
            </section>
            <section className="relative w-full h-[487px] flex flex-col pt-20  items-center bg-steelgray-500">
                <h2 className="text-5.5xl/tight text-center font-bold text-frost-200 z-10">
                Maximize Leads <br />
                On Your Website
                </h2>
                <p className="text-base text-center text-white z-10">
                    We'll do a free analysis on how your site isn't optimized for lead <br />
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