"use client"

import clsx from "clsx"
import { useInView } from "react-intersection-observer"

interface Props {
    src: string,
    className?: string,
}

const VideoPlayer = ({src, className}: Props) => {
    const [videoRef, videoInView] = useInView({threshold: 0.1, triggerOnce: true})
    
    return (
        <>
            <video 
                ref={videoRef}
                className={clsx(
                    className,
                    `relative transition-all duration-500 lg:delay-[600ms]`,
                    !videoInView && 'opacity-0 top-5',
                    videoInView && 'opacity-100 top-0'
                )} 
                controls autoPlay loop muted
            >
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </>
    )
} 

export default VideoPlayer;