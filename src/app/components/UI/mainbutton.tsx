import { ReactNode } from "react";
interface Props {
    children?: ReactNode,
    className?: string,
} 

const MainButton = ({children, className}: Props) => {
    return (
        <div className={"relative main_btn flex justify-center items-center h-full " + className}>
            <span className="absolute center w-40 h-11 border-[1px] border-darkslategrey-600 rounded-full z-20">
                <div className="triangle-1 z-20"></div>
                <div className="triangle-2 z-20"></div>
            </span>
            <button className="absolute center bg-darkslategrey-600 w-38 h-9 z-10 rounded-full hover:w-40 hover:h-11 transition-all" >
            </button>
            {children}
        </div>

    )
}

export default MainButton;