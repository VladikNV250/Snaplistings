import { ReactNode } from "react";
interface Props {
    children?: ReactNode,
    className?: string,
} 

const MainButton = ({children, className}: Props) => {
    return (
        <button className={"group relative flex justify-center items-center bg-white border-[1px] border-darkslategray-600 rounded-full overflow-hidden " + className }>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-darkslategray-600 rounded-full w-[96%] h-[90%] transition-all duration-300 group-hover:scale-150">
                <div className="absolute top-[-2%] left-[77%] rotate-[-5deg] w-0 h-0 border-l-[5px] border-r-[2px] border-t-[6px] border-transparent border-t-white bg-transparent"></div>
                <div className="absolute bottom-[-3%] left-[20%] rotate-[84deg] w-0 h-0 border-l-[5px] border-r-[2px] border-t-[6px] border-transparent border-t-white bg-transparent"></div>
            </div>
            {children}
        </button>

    )
}

export default MainButton;