"use client"
import { CompanyPages } from "@/assets/data";
import { Images } from "@/assets/image";
import Form from "@/components/form";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CompanyPage({params}: { params: { company: string } }) {
    const spaceRegEx = /%20/g;
    const companyName = params.company.replace(spaceRegEx, ' ');
    const Company =  CompanyPages.find(company => company.Href === companyName) ?? {
        Title: '',
        Background: '',
        Client: {name: '', logo: ''},
        Description: '',
        Problem: {
            title: '',
            challenges: [],
            image: '',
        },
        Solution: {
            title: '',
            description: '',
            image: '',
        },
        Results: [],
        Quote: {
            authorPotrait: '',
            quoteText: '',
            author: '',
        }
    };

    const [titleRef, titleInView] = useInView({threshold: 0.5});
    const [descriptionRef, decsriptionInView] = useInView({threshold: 0.4});
    const [problemRef, problemInView] = useInView({threshold: 0.375});
    const [solutionRef, solutionInView] = useInView({threshold: 0.4});
    const [resultsRef, resultsInView] = useInView({threshold: 0.775});
    const [scrollProgress, setScrollProgress] = useState(0);

    function scrollHandler(scrollHeight: number) {
        const currentProgress = Math.round((window.scrollY * 100) / scrollHeight)
        setScrollProgress(currentProgress);
    }

    useEffect(() => {
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        const browserHeight = document.documentElement.clientHeight;
        scrollHandler(scrollHeight - browserHeight);
        window.addEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight));
        return () => window.removeEventListener('scroll', () => scrollHandler(scrollHeight - browserHeight));
    }, [])

    return (
        <main className="min-w-screen w-full min-h-screen">
            <div className={`line fixed h-0.5 top-0 left-1/2 transform -translate-x-1/2 bg-tango-500 shadow shadow-tango-500 z-40 transition-all duration-75`} style={{ width: `${scrollProgress}%` }}></div>
            <section className="w-full pt-28 pb-10 flex flex-col items-center bg-neutral-100">
                <h2 
                    ref={titleRef} 
                    className={clsx(
                        "max-w-full xl:w-[1184px] lg:w-[768px] xl:text-5.5xl/tight lg:text-4xl font-bold text-darkslategray-600 mb-10",
                        'relative transition-all duration-[600ms]',
                        !titleInView && 'opacity-0 top-10',
                        titleInView && 'opacity-100 top-0',
                    )}
                    dangerouslySetInnerHTML={{ __html: Company.Title }}
                ></h2>
                <div className="relative w-full h-[424px] mb-8">
                    <Image 
                        src={Company.Background}
                        alt=""
                        fill={true}
                        sizes="100%"
                        quality={100}
                        className="w-full h-full"
                        objectFit="cover"
                    />
                </div>
                <div className="max-w-full xl:w-[1184px] lg:w-[768px] h-16 flex justify-between items-center">
                    <div className="space-y-2">
                        <p className="xl:text-xl lg:text-base font-medium text-darkslategray-600">Client</p>
                        <p className="xl:text-xl lg:text-base text-stone-900 ml-1.5">{Company.Client.name}</p>
                    </div>
                    <div className="relative w-[103px] h-[59px]">
                        <Image 
                            src={Company.Client.logo}
                            alt=""
                            fill={true}
                            sizes="100%"
                            quality={100}
                            objectFit="contain"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full bg-steelgray-500 flex flex-col items-center py-32">
                <div ref={descriptionRef} className="max-w-full xl:w-[1184px] lg:w-[768px] space-y-2">
                    <h4 className={clsx(
                        "w-full xl:text-3xl lg:text-1.5xl font-bold text-frost-200",
                        'relative transition-all duration-[600ms]',
                        !decsriptionInView && 'opacity-0 top-10',
                        decsriptionInView && 'opacity-100 top-0',
                    )}>
                        Project Brief
                    </h4>
                    <p className={clsx(
                        "w-full xl:text-xl lg:text-base text-frost-100",
                        'relative transition-all duration-[600ms]',
                        !decsriptionInView && 'opacity-0 top-10',
                        decsriptionInView && 'opacity-100 top-0',
                    )}>
                        {Company.Description}
                    </p>
                </div>
            </section>
            <section className="w-full bg-white grid xl:grid-cols-[352px_1fr] lg:grid-cols-[221px_1fr] px-32 py-28">
                <aside className="xl:w-[352px] lg:w-[221px] flex flex-col items-start">
                    <div className="flex flex-col items-start w-full sticky top-32 space-y-4">
                        <Link 
                            href={'#problem'} 
                            className={clsx(
                                "xl:text-5.5xl lg:text-4xl text-center font-bold",
                                "bg-gradient-to-t from-darkslategray-500 to-darkslategray-600",
                                "inline-block text-transparent bg-clip-text",
                                "transition-opacity duration-300",
                                !problemInView && 'opacity-20',
                                problemInView && 'opacity-100',
                            )}
                        >
                            Problem
                        </Link>
                        <Link 
                            href={'#solution'} 
                            className={clsx(
                                "xl:text-5.5xl lg:text-4xl text-center font-bold",
                                "bg-gradient-to-t from-darkslategray-500 to-darkslategray-600",
                                "inline-block text-transparent bg-clip-text",
                                "transition-opacity duration-300",
                                !solutionInView && 'opacity-20',
                                solutionInView && 'opacity-100',
                            )}
                        >
                            Solution
                        </Link>
                        <Link 
                            href={'#results'} 
                            className={clsx(
                                "xl:text-5.5xl lg:text-4xl text-center font-bold",
                                "bg-gradient-to-t from-darkslategray-500 to-darkslategray-600",
                                "inline-block text-transparent bg-clip-text",
                                "transition-opacity duration-300sticky top-80",
                                !resultsInView && 'opacity-20',
                                resultsInView && 'opacity-100',
                            )}
                        >
                            Results
                        </Link>
                    </div>
                </aside>
                <section className="space-y-32">
                    <article id="problem" ref={problemRef} className={clsx('transition-opacity duration-300', !problemInView && 'opacity-0', problemInView && 'opacity-100')}>
                        <h4 className="xl:text-3xl lg:text-1.5xl font-semibold text-darkslategray-600 mb-8">{Company.Problem.title}</h4>
                        <h5 className="xl:text-xl lg:text-base font-medium text-stone-900 mb-6">Challenges</h5>
                        <ol className="xl:text-xl lg:text-base text-stone-900 list-decimal list-inside mb-8">
                            {Company.Problem.challenges.map((challange, key) => (
                                <li key={key}>{challange}</li>
                            ))}
                        </ol>
                        <div className="relative min-w-full rounded-b-xl rounded-t-2xl border-b-2 border-black/20 overflow-hidden">
                            <Image
                                src={Company.Problem.image}
                                alt=""
                                width={9999}
                                height={9999}
                                className="w-full h-max"
                            />
                        </div>
                    </article>
                    <article id="solution" ref={solutionRef} className={clsx('transition-opacity duration-300', !solutionInView && 'opacity-0', solutionInView && 'opacity-100')}>
                        <h4 className="xl:text-3xl lg:text-1.5xl font-semibold text-darkslategray-600 mb-4">{Company.Solution.title}</h4>
                        <p className="xl:text-xl lg:text-base text-stone-900 mb-8" dangerouslySetInnerHTML={{__html: Company.Solution.description}}></p>
                        <div className="relative min-w-full rounded-b-xl rounded-t-2xl border-b-2 border-black/20 overflow-hidden">
                            <Image
                                src={Company.Solution.image}
                                alt=""
                                width={9999}
                                height={9999}
                                className="w-full h-max"
                            />
                        </div>
                    </article>
                    <article id="results" ref={resultsRef} className={clsx('transition-opacity duration-300 space-y-8', !resultsInView && 'opacity-0', resultsInView && 'opacity-100')}>
                        {Company.Results.map((result, key) => (
                            <div key={key} className="space-y-4">
                                <h4 className="xl:text-3xl lg:text-1.5xl font-semibold text-darkslategray-600" dangerouslySetInnerHTML={{__html: result.title}}></h4>
                                <p className="xl:text-xl lg:text-base text-stone-900">{result.description}</p>
                            </div>
                        ))}
                    </article>
                </section>
            </section>
            <section className="relative w-full bg-steelgray-500 py-28 flex flex-col items-center ">
                <article className="xl:w-[1180px] xl:h-[442px] lg:w-[768px] lg:h-[472px] flex justify-between items-center z-10">
                    <div className="relative xl:w-72 xl:h-72 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-white">
                        <Image 
                            src={Company.Quote.authorPotrait}
                            alt=""
                            fill={true}
                            sizes="100%"
                            objectFit="cover"
                        />
                    </div>
                    <div className="xl:w-[774px] lg:w-[474px]">
                        <div className="quote_mark w-full flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                            </svg>
                        </div>
                        <p className="xl:text-xl lg:text-base text-frost-100 px-8">
                            {Company.Quote.quoteText}
                        </p>
                        <div className="quote_mark w-full flex justify-end items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 rotate-180 scale-x-[1.15]" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                            </svg>
                        </div>
                        <h5 className="xl:text-xl lg:text-base text-frost-100 px-8">{Company.Quote.author}</h5>
                    </div>
                </article>
                <Image 
                    src={Images.BACKGROUND6}
                    alt=""
                    fill={true}
                    sizes="100%"
                />
            </section>
            <Form />
        </main>
    )
}