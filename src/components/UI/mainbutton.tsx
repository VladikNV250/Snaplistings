import { ReactNode } from "react";
interface Props {
    children?: ReactNode,
    className?: string,
    bgClassName?: string,
    type?: 'submit' | 'button',
    form?: string,
} 

const MainButton = ({children, className, bgClassName, type = 'button', form}: Props) => {

    return (
        <button 
            form={form}
            type={type}
            className={
                `group relative flex justify-center items-center
                border-[1px] rounded-full overflow-hidden ` + className }
        >
            <div 
                className={
                    `clip-btn absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 rounded-full 
                    w-[calc(100%-0.4rem)] h-[calc(100%-0.4rem)] transition-all duration-300 
                    group-hover:scale-150 z-10 ` + bgClassName}
            ></div>
            {children}
        </button>

    )
}

export default MainButton;