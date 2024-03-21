interface Props {
    src: string,
    className?: string,
    width?: number,
    height?: number, 
}

const VideoPlayer = ({src, className, width, height}: Props) => {
    return (
        <>
            <video width={width ? width : 320} height={height ? height : 240} controls autoPlay loop muted className={className}>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </>
    )
} 

export default VideoPlayer;