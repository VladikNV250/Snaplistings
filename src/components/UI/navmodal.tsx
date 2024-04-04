import clsx from "clsx";
import Link from "next/link";
import MainButton from "./mainbutton";

const NavModal = ({active, setActive}: {active: boolean, setActive: Function}) => {
    return (
        <div className={clsx(
            'fixed flex flex-col items-center space-y-16 w-full bg-darkslategray-600 z-40 transition-all',
            active && 'h-full',
            !active && 'h-0',
        )}>
            <div className={clsx("links flex flex-col items-center space-y-10 pt-32 ", active && 'visible', !active && 'collapse')}>
                <Link 
                    href={'/'} 
                    className={clsx("relative text-3xl font-bold text-frost-200", active && 'transition-opacity duration-300 delay-300 opacity-100', !active && 'opacity-0')}
                    onClick={() => setActive(false)}
                >Home</Link>
                <Link 
                    href={'/about'} 
                    className={clsx("relative text-3xl font-bold text-frost-200", active && 'transition-opacity duration-300 delay-300 opacity-100', !active && 'opacity-0')}
                    onClick={() => setActive(false)}
                >About</Link>
                <Link 
                    href={'/study'} 
                    className={clsx("relative text-3xl font-bold text-frost-200", active && 'transition-opacity duration-300 delay-300 opacity-100', !active && 'opacity-0')}
                    onClick={() => setActive(false)}
                >Case Studies</Link>
                <Link 
                    href={'/press'} 
                    className={clsx("relative text-3xl font-bold text-frost-200", active && 'transition-opacity duration-300 delay-300 opacity-100', !active && 'opacity-0')}
                    onClick={() => setActive(false)}
                >Press</Link>
            </div>
            <div onClick={() => setActive(false)}>
                <MainButton className={clsx("w-44 h-11", active && 'visible transition-opacity duration-300 delay-[500ms] opacity-100', !active && 'collapse opacity-0')} bgClassName="bg-frost-200">
                    <Link href={'#formSection'} className="text-base font-bold text-darkslategray-600 z-10">Get Connected</Link>
                </MainButton>
            </div>
            <div className={clsx("socialnetworks flex justify-between items-center space-x-4", active && 'visible transition-opacity duration-300 delay-[500ms] opacity-100', !active && 'collapse opacity-0')}>
                <Link href={'https://www.linkedin.com/company/snaplistings'} className="text-frost-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                </Link>
                <Link href={'https://www.instagram.com/snaplistings/?utm_medium=copy_link'} className="text-frost-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EDF4D9" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default NavModal;