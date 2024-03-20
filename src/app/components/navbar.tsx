import Image from "next/image";
import logo from "./../../../public/snaplistings.png";
import Link from "next/link";
import MainButton from "./UI/mainbutton";

const Navbar = () => {
    return (
        <nav className="fixed flex justify-between items-center w-full h-18 px-12 border-b-[1px] border-darkslategrey-500 z-20">
            <Image
              src={logo.src}
              width={235}
              height={26}
              alt="SNAPLISTINGS" 
            />
            <div className="links absolute left-1/2 transform -translate-x-1/2 h-full flex items-center space-x-14">
                <Link href={'/about'} className="relative text-base text-darkslategrey-600">About</Link>
                <Link href={'/study'} className="relative text-base text-darkslategrey-600">Case Studies</Link>
                <Link href={'/press'} className="relative text-base text-darkslategrey-600">Press</Link>
            </div>
            <MainButton>
                <p className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer">Get Connected</p>                
            </MainButton>
        </nav>
    )
}

export default Navbar;