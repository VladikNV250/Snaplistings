import Image from "next/image";
import MainButton from "./components/UI/mainbutton";
import VideoPlayer from "./components/UI/videoplayer";
import { Images } from "./image";
import Cards from "./components/cards";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center pt-32 bg-white">
      <div className="line fixed w-1/4 h-0.5 top-0 bg-tango-500 shadow shadow-tango-500 z-40"></div>
      <section className="w-full h-full flex flex-col items-center">
        <Image
          src={Images.INC}
          width={165}
          height={47}
          alt="INC.500"
        />
        <h1 className="mt-5 text-7.5xl text-center font-bold bg-gradient-to-b from-darkslategrey-500 to-darkslategrey-600 inline-block text-transparent bg-clip-text">The Most Effective <br /> Marketing In Real Estate</h1>
        <p className="text-xl text-center mt-2">We build and execute effective marketing & sales solutions that deliver real ROI</p>
        <MainButton className="mt-16" >
          <p className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer">Get Connected</p>
        </MainButton>
        <div className="w-full h-[768px] mt-16 relative overflow-hidden flex justify-center items-center">
          <Image
            src={Images.BACKGROUND}
            width={9999}
            height={768}
            alt="INC.500"
            className="absolute h-full w-full bg-neutral-100"
          />
          <VideoPlayer width={1184} height={668} src={'/teaser.mp4'} className="mt-24 z-20 border-[1px] border-black rounded-xl" />
        </div>
      </section>
      <section className="bg-neutral-100 w-full pt-24 flex flex-col items-center pb-16">
        <h2 className="mt-5 text-5.5xl text-center font-bold bg-gradient-to-b from-darkslategrey-500 to-darkslategrey-600 inline-block text-transparent bg-clip-text">Problem Solving & Delivering Results</h2>
        <Cards />
        <MainButton className="mt-18">
          <p className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer">View Case Studies</p>
        </MainButton>
      </section>
      <section className="bg-white w-full pt-32 flex flex-col items-center">
      <h2 className="mt-5 text-5.5xl text-center font-bold bg-gradient-to-b from-darkslategrey-500 to-darkslategrey-600 inline-block text-transparent bg-clip-text">Traditional Real Estate <br /> Marketing Doesn't Work</h2>
      </section>
    </main>
  );
}
