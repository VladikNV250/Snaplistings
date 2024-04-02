"use client"
import Image from "next/image";
import MainButton from "../components/UI/mainbutton";
import VideoPlayer from "../components/UI/videoplayer";
import { Images } from "../assets/image";
import Cards from "../components/cards";
import Form from "../components/form";
import BrandSlider from "../components/UI/brandslider";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "next/link";


export default function Home() {
  const [cardsProgress, setCardsProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [progress, setProgress] = useState(0);

  const [backgroundRef, backgroundInView] = useInView({threshold: 0.17, triggerOnce: true})
  const [incRef, incInView] = useInView({threshold: 0.5, triggerOnce: true})
  const [title1Ref, title1InView] = useInView({threshold: 0.5, triggerOnce: true})
  const [title2Ref, title2InView] = useInView({threshold: 0.5})
  const [title3Ref, title3InView] = useInView({threshold: 0.35, triggerOnce: true})
  const [buttonRef, buttonInView] = useInView({threshold: 0.1})

  function scrollHandler(scrollHeight: number) {
    const currentProgress = Math.round((window.scrollY * 100) / scrollHeight)
    setProgress(currentProgress);
  }

  function videoTransformHandler() {
    let percent = 142 - ((142 * videoProgress) / 100);
    if (percent <= 0) return 0;
    else return percent;
  }
  function videoScaleHandler() {
    let percent = 52 + ((52 * videoProgress) / 100);
    if (percent <= 57) return 57;
    if (percent >= 100) return 100;
    else return percent
  }

  function cardsScaleHandler() {
    const scale = +(93 + cardsProgress).toFixed(6);
    if (scale >= 100) return 1;
    if (scale <= 93) return 0.93;
    return (scale / 100);
  }

  useEffect(() => {
    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const browserHeight = document.documentElement.clientHeight;
    scrollHandler(scrollHeight - browserHeight);
    window.addEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight))
    return () => window.removeEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight));
  })

  useEffect(() => {
    if (progress >= 0 && progress <= 18) {
      setVideoProgress(+((window.scrollY * 100) / 551).toFixed(6));
    }
    if (progress >= 69 && progress <= 75)
     setCardsProgress(+(100 - (window.scrollY * 100) / 6159).toFixed(6));
  }, [progress])


  return (
    <main className="relative flex flex-col items-center pt-32 bg-white">
      <div className={`line fixed h-0.5 top-0 bg-tango-500 shadow shadow-tango-500 z-40 transition-all duration-75`} style={{ width: `${progress}%` }}></div>
      <section className="w-full h-full flex flex-col items-center bg-white">
        <Image
          ref={incRef}
          src={Images.INC}
          width={165}
          height={47}
          alt="INC.500"
          className={clsx(
            "relative transition-all duration-500 delay-100",
            !incInView && 'opacity-0 top-5',
            incInView && 'opacity-100 top-0',
          )}
        />
        <h1
          ref={title1Ref}
          className={clsx(
            "mt-5 text-7.5xl/tight text-center font-bold",
            "bg-gradient-to-b from-darkslategray-500 to-darkslategray-600",
            "inline-block text-transparent bg-clip-text",
            "relative transition-all duration-700 delay-100",
            !title1InView && 'opacity-0 top-5',
            title1InView && 'opacity-100 top-0',
          )}
        >
          The Most Effective <br /> Marketing In Real Estate
        </h1>
        <p
          className={clsx(
            "text-xl text-center mt-2 relative",
            "transition-all duration-700 delay-100",
            !buttonInView && 'opacity-0 top-5',
            buttonInView && 'opacity-100 top-0',
          )}
        >
          We build and execute effective marketing & sales solutions that deliver real ROI
        </p>
        <MainButton
          className={clsx(
            'w-48 h-14 bg-white border-darkslategray-600',
            "mt-16 transition-all duration-700 delay-100",
            !buttonInView && 'opacity-0 top-5',
            buttonInView && 'opacity-100 top-0',
          )}
          bgClassName="bg-darkslategray-600"
        >
          <Link href="#formSection" ref={buttonRef} className="text-white font-bold text-xl whitespace-nowrap z-20 cursor-pointer">
            Get Connected
          </Link>
        </MainButton>
        <div className="w-full h-[768px] mt-16 relative overflow-hidden flex justify-center pt-20 px-52">
          <Image
            src={Images.BACKGROUND1}
            width={9999}
            height={768}
            alt=""
            className="absolute h-full w-screen bg-neutral-100"
          />
          <div
            className={`w-[1184px] h-[668px] flex justify-center transition-all`}
            style={{ transform: `scale(${(videoScaleHandler() / 100).toFixed(6)}) translateY(-${videoTransformHandler().toFixed(6)}px)` }}
          >
            <VideoPlayer
              src={'/teaser.mp4'}
              className={`z-20 w-full h-full object-cover border-[1px] border-black rounded-xl`}
            />
          </div>

        </div>
      </section>
      <section className="bg-neutral-100 w-full pt-24 flex flex-col items-center pb-16">
        <h2
          ref={title2Ref}
          className={clsx(
            "relative text-5.5xl text-center font-bold mt-5",
            "bg-gradient-to-b from-darkslategray-500 to-darkslategray-600",
            "inline-block text-transparent bg-clip-text",
            "transition-all duration-300",
            !title2InView && 'opacity-0 top-5',
            title2InView && 'opacity-100 top-0',
          )}
        >
          Problem Solving & Delivering Results
        </h2>
        <Cards length={6}/>
        <MainButton className="mt-18 w-60 h-14 bg-white border-darkslategray-600" bgClassName="bg-darkslategray-600">
          <p className="text-white font-bold text-xl whitespace-nowrap z-20 cursor-pointer">View Case Studies</p>
        </MainButton>
      </section>
      <section className="bg-white w-full pt-24 pb-32 flex flex-col items-center">
        <h2
          ref={title3Ref}
          className={clsx(
            "mt-5 text-5.5xl text-center font-bold",
            "bg-gradient-to-t from-darkslategray-500 to-darkslategray-600",
            "inline-block text-transparent bg-clip-text",
            "relative transition-all duration-300 delay-100",
            !title3InView && 'opacity-0 top-5',
            title3InView && 'opacity-100 top-0',
          )}
        >
          Traditional Real Estate <br /> Marketing Doesn&apos;t Work
        </h2>
        <section className="relative flex justify-between items-center space-x-40 mt-40">
          <div className="text space-y-4 z-10">
            <h4 className="text-3xl font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">
              We start with your <br />
              success metrics.
            </h4>
            <p className="text-xl/6 text-darkslategray-600">
              We don&apos;t glorify vanity metrics like <br />
              impressions and clicks, or sell you big <br />
              ideas with no execution firepower.
            </p>
          </div>
          <Image
            src={Images.ANIMATEDCARD1}
            width={504}
            height={360}
            alt="Diagram"
            className="rounded-xl border-2 border-tango-500 z-10"
          />
          <svg className="absolute top-38 left-48" width="728" height="438" viewBox="0 0 728 438" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 18.8836C166.5 -30.1165 438.2 31.3714 525 153.772C633.5 306.772 615 375.102 571.5 388.272C539 398.111 504.049 357.573 533 320.772C562.5 283.272 683.5 263.272 721 357.772C737.27 398.772 713 431.272 705.5 436.772" stroke="#F47F20" strokeWidth="3" />
          </svg>
        </section>
        <section className="relative flex justify-between items-center space-x-30 mt-33">
          <Image
            src={Images.ANIMATEDCARD2}
            width={504}
            height={360}
            alt="City on demand"
            className="rounded-xl border-2 border-tango-500 z-10"
          />
          <div className="text space-y-4 z-10">
            <h4 className="text-3xl font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">
              We generate demand for your <br />
              property, portfolio, company <br />
              or product.
            </h4>
            <p className="text-xl/6 text-darkslategray-600">
              We set goals, solve problems, and execute <br />
              customer acquisition strategies with a unified  <br />
              team of experts. Our focus on essential metrics <br />
              optimizes leads, opportunities, and sales.
            </p>
          </div>
          <svg className="absolute top-30 left-24" width="378" height="513" viewBox="0 0 378 513" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.748 2C316.814 2 287.687 2.939 258.749 5.439M377.749 510C298.644 515.161 256.608 492.037 206.249 473M2.06585 201C0.212851 254.888 37.2489 397 140.749 437" stroke="#F47F20" strokeWidth="3" strokeMiterlimit="10" />
          </svg>
        </section>
        <section className="relative flex justify-between items-center space-x-30 mt-32 pr-8">
          <div className="text space-y-4 z-10">
            <h4 className="text-3xl font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">
              We&apos;ll be talking about your <br />
              funnel, A LOT.
            </h4>
            <p className="text-xl/6 text-darkslategray-600">
              The full funnel execution is through strategy, <br />
              market research, branding, persona building, <br />
              print and digital advertising, websites, <br />
              interactive design, CRM, lead generation, <br />
              lead nurture and full funnel analytics.
            </p>
          </div>
          <Image
            src={Images.ANIMATEDCARD3}
            width={504}
            height={360}
            alt="Phone, notebook"
            className="rounded-xl border-2 border-tango-500 z-10"
          />
        </section>
      </section>
      <Form />
      <section
        ref={backgroundRef}
        className={clsx(
          "relative w-full flex flex-col items-center pt-48 px-96 pb-64 space-y-20",
          'transition-color duration-700 delay-100',
          !backgroundInView && 'bg-white',
          backgroundInView && 'bg-steelgray-500',
        )}
      >
        <div className="absolute top-0 bottom-0 w-full h-full pb-[735px] pt-28">
          <h2 className={clsx(
            "text-5.5xl text-center font-bold text-frost-100",
            "relative transition-opacity duration-700 z-30 sticky top-20",
            !backgroundInView && 'opacity-0 top-5',
            backgroundInView && 'opacity-100 top-0',
          )}
            id="company_cards_title"
          >
            Who We Work With
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-24 h-[2517px] w-full z-10">
          <div className={`w-full bg-frost-100 p-0.5 pb-3 rounded-3xl z-10 transition-transform duration-75 sticky top-48`} style={{transform: `scale(${cardsScaleHandler()})`}}> 
            <div className="w-full bg-steelgray-500 flex flex-col items-center px-4 space-y-4 pt-4 pb-8 rounded-t-[22px] rounded-b-3xl">
              <div className="quote w-full flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="quote-text w-full flex justify-center items-center">
                <p className="text-3xl text-frost-100 text-center px-8">
                  Snaplistings has become a vital extension of our leasing and marketing department at Stonehenge and has helped seamlessly bridge the gap <span className="text-frost-200 font-medium">between our tech and leasing.</span>
                </p>
              </div>
              <div className="quote w-full flex justify-end items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 rotate-180 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <Image
                src={Images.BRANDS.STONEHENGE}
                width={512}
                height={84}
                alt="Stonehenge"
                className="w-[202px] h-[33px]"
              />
            </div>
          </div>
          <div className={"w-full bg-frost-100 p-0.5 pb-3 rounded-3xl z-20 sticky top-59"}>
            <div className="w-full bg-steelgray-500 flex flex-col items-center px-4 space-y-4 pt-4 pb-8 rounded-t-[22px] rounded-b-3xl">
              <div className="quote w-full flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="quote-text w-full flex justify-center items-center">
                <p className="text-3xl text-frost-100 text-center px-8">
                  <span className="text-frost-200 font-medium">Terrific customer service. Brilliant strategists.</span> Flawless execution. Highly highly customized approach. Best firm I have worked with over 35 years!
                </p>
              </div>
              <div className="quote w-full flex justify-end items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 rotate-180 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <Image
                src={Images.BRANDS.CRETECH}
                width={512}
                height={84}
                alt="Creetech"
                className="w-[140px] h-[33px]"
              />
            </div>
          </div>
          <div className={"w-full bg-frost-100 p-0.5 pb-3 rounded-3xl z-30 sticky top-69"}> 
            <div className="w-full bg-steelgray-500 flex flex-col items-center px-4 space-y-4 pt-4 pb-8 rounded-t-[22px] rounded-b-3xl">
              <div className="quote w-full flex justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="quote-text w-full flex justify-center items-center">
                <p className="text-3xl text-frost-100 text-center px-8">
                  <span className="text-frost-200 font-medium">Their ability to use analytics and market data</span> to rapidly pivot the advertising approach was crucial in keeping us competitive in a very active buyers’ market.
                </p>
              </div>
              <div className="quote w-full flex justify-end items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 rotate-180 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <Image
                src={Images.BRANDS.JMH}
                width={496}
                height={348}
                alt="JMH Development"
                className="w-[103px] h-[73px]"
              />
            </div>
          </div>
        </div>
        <BrandSlider id="brands-slider" mode="brand"/>
        <div className="absolute w-full h-[280px] bottom-0 left-0">
          <Image
            src={Images.BACKGROUND2}
            fill={true}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
