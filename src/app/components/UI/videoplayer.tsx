"use client"

import clsx from "clsx"


interface Props {
    src: string,
    className?: string,
}

const VideoPlayer = ({src, className}: Props) => {

    return (
        <>
            <video className={className} controls autoPlay loop muted>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </>
    )
} 

export default VideoPlayer;