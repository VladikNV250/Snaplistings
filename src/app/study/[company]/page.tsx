import { Images } from "@/assets/image";
import Form from "@/components/form";
import Image from "next/image";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <main className="min-w-screen w-full min-h-screen">
            <section className="w-full pt-28 pb-10 flex flex-col items-center bg-neutral-100">
                <h2 className="w-[1184px] text-5.5xl/tight font-bold text-darkslategray-600 mb-10">
                    $27 Million In Contracts & <span className="text-tango-500">50% Pre-Sales</span> In 6 Months $27 Million In Contracts
                </h2>
                <div className="relative w-full h-[424px] mb-8">
                    <Image 
                        src={Images.CARDS.FULL.CARD1}
                        alt=""
                        fill={true}
                        sizes="100%"
                        quality={100}
                        className="w-full h-full"
                        objectFit="cover"
                    />
                </div>
                <div className="w-[1184px] h-16 flex justify-between items-center">
                    <div className="space-y-2">
                        <p className="text-xl font-medium text-darkslategray-600">Client</p>
                        <p className="text-xl text-stone-900 ml-1.5">La Baia</p>
                    </div>
                    <div className="relative w-[103px] h-[59px]">
                        <Image 
                            src={Images.INC}
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
                <div className="w-[1184px] space-y-2">
                    <h4 className="w-full text-3xl font-bold text-frost-200">Project Brief</h4>
                    <p className="w-full text-xl text-frost-100">
                        La Baia North is a new luxury, boutique bayfront condominium in Miami’s exclusive Bay Harbor Islands, imagined by New York visionary and developer Ian Bruce Eichner. Sales absorption was slowing due to unfavorable market conditions, though data showed there was strong product-market fit.
                    </p>
                </div>
            </section>
            <section className="w-full bg-white grid grid-cols-[352px_1fr] px-32 py-28">
                <aside className="w-[352px] flex flex-col items-start">
                    <Link href={'#problem'} className="text-5.5xl text-center font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">Problem</Link>
                    <Link href={'#solution'} className="text-5.5xl text-center font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">Solution</Link>
                    <Link href={'#results'} className="text-5.5xl text-center font-bold bg-gradient-to-t from-darkslategray-500 to-darkslategray-600 inline-block text-transparent bg-clip-text">Results</Link>
                </aside>
                <section className="space-y-32">
                    <article>
                        <h4 className="text-3xl font-semibold text-darkslategray-600 mb-8">How to leverage marketing data for a strategy that optimizes pricing, release and sales decisions.</h4>
                        <h5 className="text-xl font-medium text-stone-900 mb-6">Challenges</h5>
                        <ol className="text-xl text-stone-900 list-decimal list-inside">
                            <li>The market changed considerably since the client's previous project, La Baia South, leaving us with a lack of data about today's buyer market.</li>
                            <li>Within the project, there is a big variation in pricing and little differentiation of product.</li>
                        </ol>
                        <div className="relative w-full h-[562px] rounded-b-xl rounded-t-2xl border-b-2 border-black/20 overflow-hidden">
                            <Image
                                src=""
                                alt=""
                                fill={true}
                                sizes="100%"
                            />
                        </div>
                    </article>
                    <article>
                        <h4 className="text-3xl font-semibold text-darkslategray-600 mb-4">Execute our integrated Buyer & Broker Funnel, collect the right data, and deliver a data-driven strategy.</h4>
                        <p className="text-xl text-stone-900 mb-8">
                            Added critical profile questions to the Buyer Funnel web form to analyze real-time market trends and <br /> 
                            inform pricing, release strategy, ad spend and other key decisions.<br />
                            <br />
                            Categorized inventory into residence collections, increasing perceived value on non-waterfront facing <br /> 
                            inventory without alienating the waterfront residences.
                        </p>
                        <div className="relative w-full h-[562px] rounded-b-xl rounded-t-2xl border-b-2 border-black/20 overflow-hidden">
                            <Image
                                src=""
                                alt=""
                                fill={true}
                                sizes="100%"
                            />
                        </div>
                    </article>
                    <article className="space-y-8">
                        <div className="space-y-4">
                            <h4 className="text-3xl font-semibold text-darkslategray-600">
                                6 Months to Achieve <span className="text-tango-500">$27M</span> in Contracts
                            </h4>
                            <p className="text-xl text-stone-900">
                                The Digital Marketing Funnel yielded 414 Leads, 62 Presentations, and 5 Sales for $27 Million in contracts in 6 months.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-3xl font-semibold text-darkslategray-600">
                                <span className="text-tango-500">38%</span> of All Contracts Attributed to Digital Marketing
                            </h4>
                            <p className="text-xl text-stone-900">
                            Data-driven strategies supercharged the sales process with 50% pre-sales in 6 months and 38% of all contracts attributed to digital marketing efforts.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-3xl font-semibold text-darkslategray-600">
                                <span className="text-tango-500">4%</span> Increase in Pricing
                            </h4>
                            <p className="text-xl text-stone-900">
                            Maintained velocity in a down market with 15.75% conversion from Lead to Presentation, 8% conversion from Presentation to Sale, and a 4% increase in pricing.
                            </p>
                        </div>
                    </article>
                </section>
            </section>
            <section className="relative w-full bg-steelgray-500 py-28 flex flex-col items-center ">
                <article className="w-[1180px] h-[442px] flex justify-between items-center z-10">
                    <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-white">
                        <Image 
                            src=''
                            alt=""
                            fill={true}
                            sizes="100%"
                        />
                    </div>
                    <div className="w-[774px]">
                        <div className="quote_mark w-full flex justify-start items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 scale-x-[1.15]" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                            </svg>
                        </div>
                        <p className="text-xl text-frost-100 px-8">
                            Through our key messaging workshop with the La Baia North sales team, we identified a key opportunity to elevate our sales narrative through the introduction of The Residence Collections, setting us apart in a highly competitive market. By synergizing real-time feedback from sales interactions with insightful buyer funnel data, we refined our marketing strategy to drive home a consistent narrative and disseminate key messages through a diverse mix of channels both online and offline. Our ability to pivot and quickly update creative through the use of dynamic templates, enabled a buyer-focused approach that led to enhanced engagement, drove a distinct brand story, and allowed us to hit sales targets.
                        </p>
                        <div className="quote_mark w-full flex justify-end items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-quote text-frost-200 scale-y-75 rotate-180 scale-x-[1.15]" viewBox="0 0 16 16">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                            </svg>
                        </div>
                        <h5 className="text-xl text-frost-100 px-8">- Carl Lorins, Senior Account Manager</h5>
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