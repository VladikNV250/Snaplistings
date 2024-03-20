import Image from "next/image";
import Navbar from "./components/navbar";
import inc from "./../../public/inc500.png";
import MainButton from "./components/UI/mainbutton";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center pt-32">
        <div className="line fixed w-1/4 h-0.5 top-0 bg-tango-500 shadow shadow-tango-500"></div>
        <Image
          src={inc.src}
          width={165}
          height={47}
          alt="INC.500"
        />
        <h1 className="mt-5 text-7.5xl text-center font-bold bg-gradient-to-b from-darkslategrey-500 to-darkslategrey-600 inline-block text-transparent bg-clip-text">The Most Effective <br /> Marketing In Real Estate</h1>
        <p className="text-xl text-center mt-2">We build and execute effective marketing & sales solutions that deliver real ROI</p>
        <MainButton className="mt-16" >
          <p className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer">Get Connected</p>
        </MainButton>
    </main>
  );
}
