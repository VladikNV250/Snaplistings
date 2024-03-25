import { MutableRefObject } from "react";
import MainButton from "./UI/mainbutton";
import clsx from "clsx";

interface Props {
    titileVisibe: boolean,
}

const Form = ({ titileVisibe }: Props) => {
    return (
        <section className="relative overflow-hidden w-full flex flex-col items-center pt-32 pb-64 bg-neutral-100">
            <div className="background absolute w-full h-full top-0 left-0">
                <div className="absolute w-full h-4 bg-black/15 top-0 left-0 blur-lg"></div>
                <div className="absolute w-full h-4 bg-black/30 bottom-0 left-0  blur-lg"></div>
                {/* <div className="absolute w-[650px] h-[600px] rotate-[-30deg] rounded-full bg-tango-500/30 bottom-[-8rem] right-64 blur-3xl"></div> */}
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" className="absolute rotate-[-30deg] scale-x-[0.7] bottom-[-90rem] right-[-50rem] opacity-30 blur-3xl" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path className="" fill="#f47f20" d="M24.5,-1.6C24.5,12.5,12.3,25,-0.5,25C-13.3,25,-26.6,12.5,-26.6,-1.6C-26.6,-15.8,-13.3,-31.6,-0.5,-31.6C12.3,-31.6,24.5,-15.8,24.5,-1.6Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>              
                </svg>
            </div>
            <h2 className={clsx(
                "text-5.5xl text-center font-bold",
                "bg-gradient-to-b from-darkslategrey-500 to-darkslategrey-600",
                "inline-block text-transparent bg-clip-text",
                'relative transition-all duration-300 delay-100',
                !titileVisibe && 'opacity-0 top-5',
                titileVisibe && 'opacity-100 top-0',
            )}>
                Hi! Let's solve your problem together
            </h2>
            <p className="text-xl text-stone-900 mt-4">Request a case study in your industry and chat with our team!</p>
            <form action="" className="flex flex-col items-center z-10 mt-18 space-y-6">
                <div className="w-full relative flex flex-col">
                    <h5 className="text-base text-darkslategrey-600 font-medium">What is your industry?</h5>
                    <div className="flex justify-between items-center space-x-4 mt-1">
                        <div className="checkbox group w-50 h-14 flex justify-center items-center space-x-1.5 bg-white border-2 border-darkslategrey-600 rounded-full cursor-pointer transition-color duration-300 hover:border-tango-500">
                            <p className="text-base text-darkslategrey-600 font-medium transition-color duration-300 group-hover:text-tango-500">Condos</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building text-darkslategrey-600 transition-color duration-300 group-hover:text-tango-500" viewBox="0 0 16 16">
                                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
                                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
                            </svg>
                        </div>
                        <div className="checkbox w-50 h-14 flex justify-center items-center space-x-1.5 bg-white border-2 border-darkslategrey-600 rounded-full cursor-pointer transition-color duration-300 hover:border-tango-500">
                            <p className="text-base text-darkslategrey-600 font-medium transition-color duration-300 group-hover:text-tango-500">Rentals</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key text-darkslategrey-600 transition-color duration-300 group-hover:text-tango-500" viewBox="0 0 16 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                            </svg>
                        </div>
                        <div className="checkbox w-50 h-14 flex justify-center items-center space-x-1.5 bg-white border-2 border-darkslategrey-600 rounded-full cursor-pointer transition-color duration-300 hover:border-tango-500">
                            <p className="text-base text-darkslategrey-600 font-medium transition-color duration-300 group-hover:text-tango-500">Proptech</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings text-darkslategrey-600 transition-color duration-300 group-hover:text-tango-500" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
                                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
                            </svg>
                        </div>
                        <div className="checkbox w-50 h-14 flex justify-center items-center space-x-1.5 bg-white border-2 border-darkslategrey-600 rounded-full cursor-pointer transition-color duration-300 hover:border-tango-500">
                            <p className="text-base text-darkslategrey-600 font-medium transition-color duration-300 group-hover:text-tango-500">Others</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots text-darkslategrey-600 transition-color duration-300 group-hover:text-tango-500" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center space-x-4">
                    <div className="w-1/2 flex flex-col space-y-1">
                        <h5 className="text-base text-darkslategrey-600 font-medium">First Name</h5>
                        <input 
                          required
                          defaultValue={''} 
                          type="text" 
                          name="first-name" 
                          className="w-full py-3 px-3.5 bg-white border-[1px] border-darkslategrey-600 rounded text-base text-stone-900 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col space-y-1">
                        <h5 className="text-base text-darkslategrey-600 font-medium">Last Name</h5>
                        <input 
                          required
                          type="text" 
                          name="last-name" 
                          className="w-full py-3 px-3.5 bg-white border-[1px] border-darkslategrey-600 rounded text-base text-stone-900 font-semibold focus:outline-none focus:border-tango-500" 
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center space-x-4">
                    <div className="w-1/2 flex flex-col space-y-1">
                        <h5 className="text-base text-darkslategrey-600 font-medium">Email Address</h5>
                        <input 
                          required 
                          defaultValue={''} 
                          type="email" 
                          name="email" 
                          className="w-full py-3 px-3.5 bg-white border-[1px] border-darkslategrey-600 rounded text-base text-stone-900 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col space-y-1">
                        <div className="flex justify-between items-center">
                            <h5 className="text-base text-darkslategrey-600 font-medium">Phone</h5>
                            <p className="text-sm text-neutral-400">Optional</p>
                        </div>
                        <input 
                          type="number" 
                          name="phone" 
                          className="w-full py-3 px-3.5 bg-white border-[1px] border-darkslategrey-600 rounded text-base text-stone-900 font-semibold focus:outline-none focus:border-tango-500" 
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="w-full flex flex-col space-y-1">
                        <h5 className="text-base text-darkslategrey-600 font-medium">Company</h5>
                        <input 
                          required
                          defaultValue={''} 
                          type="text" name="company" 
                          className="w-full py-3 px-3.5 bg-white border-[1px] border-darkslategrey-600 rounded text-base text-stone-900 font-semibold focus:outline-none focus:border-tango-500"
                        />
                    </div>
                </div>
                <MainButton className="h-14 w-48">
                    <p className="text-white font-medium text-xl whitespace-nowrap z-20 cursor-pointer">Get Connected</p>
                </MainButton>
            </form>
        </section>
    )
}

export default Form;