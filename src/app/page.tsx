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
        <div className={clsx(
          "relative w-[126px] h-[35px] transition-all duration-500 delay-100",
          "lg:w-[165px] lg:h-[47px]",
          !incInView && 'opacity-0 top-5',
          incInView && 'opacity-80 top-0',
        )}>
          <Image
            ref={incRef}
            src={Images.INC}
            alt="INC.500"
            fill
            sizes="100%"
          />
        </div>
        
        <h1
          ref={title1Ref}
          className={clsx(
            "mt-12 text-3xl text-center font-bold",
            "bg-gradient-to-b from-darkslategray-500 to-darkslategray-600",
            "inline-block text-transparent bg-clip-text",
            "relative transition-all duration-700 delay-100",
            "lg:mt-20 lg:text-5.25xl/tight",
            "xl:mt-5 xl:text-7.5xl/tight",
            !title1InView && 'opacity-0 top-5',
            title1InView && 'opacity-100 top-0',
          )}
        >
          The Most Effective <br /> Marketing In Real Estate
        </h1>
        <p
          className={clsx(
            "text-sm text-center mt-2 relative",
            "transition-all duration-700 delay-100",
            "xl:text-xl lg:text-base",
            !buttonInView && 'opacity-0 top-5',
            buttonInView && 'opacity-100 top-0',
          )}
        >
          We build and execute effective marketing & sales solutions that deliver real ROI
        </p>
        <MainButton
          className={clsx(
            'w-40 h-11 bg-white border-darkslategray-600',
            "mt-16 transition-all duration-700 delay-100",
            "xl:w-48 xl:h-14",
            !buttonInView && 'opacity-0 top-5',
            buttonInView && 'opacity-100 top-0',
          )}
          bgClassName="bg-darkslategray-600"
        >
          <Link href="#formSection" ref={buttonRef} className="text-white font-bold text-base whitespace-nowrap z-20 cursor-pointer xl:text-xl">
            Get Connected
          </Link>
        </MainButton>
        <div className="relative w-full mt-16 relative overflow-hidden flex justify-center pt-20 lg:h-[532px] xl:h-[768px]">
          <Image
            src={Images.BACKGROUND1}
            alt=""
            fill={true}
            sizes="100%"
            // width={9999}
            // height={768}
            // className="absolute h-full w-screen bg-neutral-100"
          />
          <div
            className={`w-full h-[459px] flex justify-center transition-all mobile:!scale-100 lg:w-[768px] lg:h-[432px] xl:w-[1184px] xl:h-[668px]`}
            style={{ transform: `scale(${(videoScaleHandler() / 100).toFixed(6)}) translateY(-${videoTransformHandler().toFixed(6)}px)` }}
          >
            <VideoPlayer
              src={'/teaser.mp4'}
              className={`z-20 w-full h-full object-cover border-[1px] border-black lg:rounded-xl`}
            />
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 w-full pt-24 pb-16 px-2 lg:px-0 flex flex-col items-center">
        <h2
          ref={title2Ref}
          className={clsx(
            "xl:text-5.5xl lg:text-4xl/tight",
            "relative text-2xl text-center font-bold mt-5",
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
      <section className="bg-white w-full xl:pt-24 lg:pt-12 pb-32 flex flex-col items-center">
        <h2
          ref={title3Ref}
          className={clsx(
            "xl:text-5.5xl/tight lg:text-4xl",
            "w-full mt-5 text-2xl text-center font-bold",
            "bg-gradient-to-t from-darkslategray-500 to-darkslategray-600",
            "inline-block text-transparent bg-clip-text",
            "relative transition-all duration-300 delay-100",
            !title3InView && 'opacity-0 top-5',
            title3InView && 'opacity-100 top-0',
          )}
        >
          Traditional Real Estate <br /> Marketing Doesn&apos;t Work
        </h2>
        <article className="relative w-[390px] flex flex-col justify-between items-center space-y-9 mt-12 lg:w-auto lg:mt-24 lg:space-y-0 lg:space-x-24 lg:flex-row xl:mt-40 xl:space-x-40">
          <div className="text xl:space-y-4 md:space-y-2 z-10">
            <h4 className="text-1.5xl/6 text-center w-full font-bold gradient-t lg:w-auto xl:text-3xl lg:text-2xl">
              We start with your <br />
              success metrics.
            </h4>
            <p className="text-base/6 text-center text-darkslategray-600 lg:text-left lg:text-sm/tight xl:text-xl/6 ">
              We don&apos;t glorify vanity metrics like <br />
              impressions and clicks, or sell you big <br />
              ideas with no execution firepower.
            </p>
          </div>
          <div className="relative w-[330px] h-[236px] rounded-xl border-2 border-tango-500 z-10 overflow-hidden xl:w-[504px] xl:h-[360px]">
            <Image
              src={Images.ANIMATEDCARD1}
              alt="Diagram"
              fill={true}
              sizes="100%"
            />
          </div>
          <div className="line block lg:hidden absolute left-1/2 -bottom-24 transform -translate-x-1/2 h-92 w-0.5 bg-tango-500"></div>
          <svg className="hidden lg:block absolute lg:top-20 lg:left-32 lg:w-[475px] lg:h-[286px] xl:w-[730px] xl:h-[439px] xl:top-38 xl:left-48" width="100%" height="100%" viewBox="0 0 728 438" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 18.8836C166.5 -30.1165 438.2 31.3714 525 153.772C633.5 306.772 615 375.102 571.5 388.272C539 398.111 504.049 357.573 533 320.772C562.5 283.272 683.5 263.272 721 357.772C737.27 398.772 713 431.272 705.5 436.772" stroke="#F47F20" strokeWidth="3" />
          </svg>
        </article>
        <article className="relative w-[390px] flex flex-col justify-between items-center space-y-9 mt-24 space-y-reverse lg:w-auto lg:mt-20 lg:space-y-0 lg:space-x-18 lg:flex-row xl:mt-33 xl:space-x-30">
          <div className="relative w-[330px] h-[236px] rounded-xl border-2 border-tango-500 z-10 overflow-hidden order-2 lg:order-1 xl:w-[504px] xl:h-[360px]">
            <Image
              src={Images.ANIMATEDCARD2}
              alt="City on demand"
              fill={true}
              sizes="100%"
            />
          </div>
          <div className="text space-y-2 z-10 order-1 lg:order-2 xl:space-y-4">
            <h4 className="text-1.5xl/6 text-center w-full font-bold gradient-t lg:text-2xl lg:w-[300px] xl:w-[453px] xl:text-3xl">
              We generate demand for your
              property, portfolio, company 
              or product.
            </h4>
            <p className="text-base text-center text-darkslategray-600 lg:text-left lg:text-sm/tight xl:text-xl/6">
              We set goals, solve problems, and execute <br />
              customer acquisition strategies with a unified  <br />
              team of experts. Our focus on essential metrics <br />
              optimizes leads, opportunities, and sales.
            </p>
          </div>
          <div className="line block lg:hidden absolute left-1/2 -bottom-32 transform -translate-x-1/2 h-92 w-0.5 bg-tango-500"></div>
          <svg className="hidden lg:block absolute lg:top-20 lg:left-16 lg:w-[248px] lg:h-[334px] xl:top-30 xl:left-24 xl:w-[378px] xl:h-[513px]" width="100%" height="100%" viewBox="0 0 378 513" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M344.748 2C316.814 2 287.687 2.939 258.749 5.439M377.749 510C298.644 515.161 256.608 492.037 206.249 473M2.06585 201C0.212851 254.888 37.2489 397 140.749 437" stroke="#F47F20" strokeWidth="3" strokeMiterlimit="10" />
          </svg>
        </article>
        <article className="relative w-[390px] flex flex-col justify-between items-center space-y-9 mt-24 lg:w-auto lg:pr-8 lg:space-y-0 lg:space-x-20 lg:flex-row xl:mt-32 xl:space-x-30">
          <div className="text space-y-2 xl:space-y-4 z-10">
            <h4 className="text-1.5xl/6 text-center lg:text-left w-full font-bold gradient-t lg:text-2xl lg:w-[295px] xl:text-3xl xl:w-[400px]">
              We&apos;ll be talking about your
              funnel, A LOT.
            </h4>
            <p className="text-base text-center lg:text-left text-darkslategray-600 lg:text-sm/tight xl:text-xl/6">
              The full funnel execution is through strategy, <br />
              market research, branding, persona building, <br />
              print and digital advertising, websites, <br />
              interactive design, CRM, lead generation, <br />
              lead nurture and full funnel analytics.
            </p>
          </div>
          <div className="relative w-[330px] h-[236px] rounded-xl border-2 border-tango-500 z-10 overflow-hidden xl:w-[504px] xl:h-[360px]">
            <Image
              src={Images.ANIMATEDCARD3}
              alt="Phone, notebook"
              fill={true}
              sizes="100%"
            />
          </div>
          <div className="line block lg:hidden absolute left-1/2 bottom-0 transform -translate-x-1/2 h-69 w-0.5 bg-tango-500"></div>
        </article>
      </section>
      <Form />
      <section
        ref={backgroundRef}
        className={clsx(
          "relative w-full flex flex-col items-center pt-48 px-4 pb-64 space-y-20 lg:px-96",
          'transition-color duration-700 delay-100',
          !backgroundInView && 'bg-white',
          backgroundInView && 'bg-steelgray-500',
        )}
      >
        <div className="absolute top-0 bottom-0 w-full h-full pb-[735px] pt-28">
          <h2 className={clsx(
            "xl:text-5.5xl lg:text-4xl",
            "text-2xl text-center font-bold text-frost-100 ",
            "relative transition-opacity duration-700 z-30 sticky top-20",
            !backgroundInView && 'opacity-0 top-5',
            backgroundInView && 'opacity-100 top-0',
          )}
            id="company_cards_title"
          >
            Who We Work With
          </h2>
        </div>
        <section className="flex flex-col items-center space-y-24 h-[2517px] w-full z-10 lg:w-[822px]">
          <article className={`w-full bg-frost-100 p-0.5 pb-3 rounded-3xl z-10 transition-transform duration-75 sticky top-48`} style={{transform: `scale(${cardsScaleHandler()})`}}> 
            <div className="w-full bg-steelgray-500 flex flex-col items-center px-4 space-y-4 pt-4 pb-8 rounded-t-[22px] rounded-b-3xl">
              <div className="quote w-full flex justify-start items-center">
                <svg className="bi bi-quote w-8 h-8 text-frost-200 scale-y-75 scale-x-[1.15] lg:w-10 lg:h-10 xl:w-16 xl:h-16" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="quote-text w-full flex justify-center items-center">
                <p className="xl:text-3xl text-1.5xl text-frost-100 text-center px-8">
                  Snaplistings has become a vital extension of our leasing and marketing department at Stonehenge and has helped seamlessly bridge the gap <span className="text-frost-200 font-medium">between our tech and leasing.</span>
                </p>
              </div>
              <div className="quote w-full flex justify-end items-center">
                <svg className="bi bi-quote w-8 h-8 text-frost-200 rotate-180 scale-y-75 scale-x-[1.15] lg:w-10 lg:h-10 xl:w-16 xl:h-16" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <Image
                src={Images.BRANDS.STONEHENGE}
                width={512}
                height={84}
                alt="Stonehenge"
                className="xl:w-[202px] xl:h-[33px] lg:w-[138px] lg:h-[22px] w-[124px] h-[20px] object-contain"
              />
            </div>
          </article>
          <article className={"w-full bg-frost-100 p-0.5 pb-3 rounded-3xl z-20 sticky top-59"}>
            <div className="w-full bg-steelgray-500 flex flex-col items-center px-4 space-y-4 pt-4 pb-8 rounded-t-[22px] rounded-b-3xl">
              <div className="quote w-full flex justify-start items-center">
                <svg className="bi bi-quote w-8 h-8 text-frost-200 scale-y-75 scale-x-[1.15] lg:w-10 lg:h-10 xl:w-16 xl:h-16" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="quote-text w-full flex justify-center items-center">
                <p className="xl:text-3xl text-1.5xl text-frost-100 text-center px-8">
                  <span className="text-frost-200 font-medium">Terrific customer service. Brilliant strategists.</span> Flawless execution. Highly highly customized approach. Best firm I have worked with over 35 years!
                </p>
              </div>
              <div className="quote w-full flex justify-end items-center">
                <svg className="bi bi-quote w-8 h-8 text-frost-200 rotate-180 scale-y-75 scale-x-[1.15] lg:w-10 lg:h-10 xl:w-16 xl:h-16" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <Image
                src={Images.BRANDS.CRETECH}
                width={512}
                height={84}
                alt="Creetech"
                className="xl:w-[140px] xl:h-[33px] lg:w-[177px] lg:h-[28px] w-[158px] h-[25px] object-contain"
              />
            </div>
          </article>
          <article className={"w-full bg-frost-100 p-0.5 pb-3 rounded-3xl z-30 sticky top-69"}> 
            <div className="w-full bg-steelgray-500 flex flex-col items-center px-4 space-y-4 pt-4 pb-8 rounded-t-[22px] rounded-b-3xl">
              <div className="quote w-full flex justify-start items-center">
                <svg className="bi bi-quote w-8 h-8 text-frost-200 scale-y-75 scale-x-[1.15] lg:w-10 lg:h-10 xl:w-16 xl:h-16" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <div className="quote-text w-full flex justify-center items-center">
                <p className="xl:text-3xl text-1.5xl text-frost-100 text-center px-8">
                  <span className="text-frost-200 font-medium">Their ability to use analytics and market data</span> to rapidly pivot the advertising approach was crucial in keeping us competitive in a very active buyers’ market.
                </p>
              </div>
              <div className="quote w-full flex justify-end items-center">
                <svg className="bi bi-quote w-8 h-8 text-frost-200 rotate-180 scale-y-75 scale-x-[1.15] lg:w-10 lg:h-10 xl:w-16 xl:h-16" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor"  viewBox="0 0 16 16">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>
              <Image
                src={Images.BRANDS.JMH}
                width={496}
                height={348}
                alt="JMH Development"
                className="xl:w-[103px] xl:h-[73px] lg:w-[122px] lg:h-[48px] w-[122px] h-[43px] object-contain"
              />
            </div>
          </article>
        </section>
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
