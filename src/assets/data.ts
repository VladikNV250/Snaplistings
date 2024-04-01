import { Images } from "./image";

export const staff = [
    {
        name: 'Erica Sachse',
        occupation: 'CEO',
        portrait: Images.STAFF.ERICA
    },
    {
        name: 'Jordan Griffey',
        occupation: 'Director of Operations',
        portrait: Images.STAFF.JORDAN
    },
    {
        name: 'Sophie Schneider',
        occupation: 'Creative Director',
        portrait: Images.STAFF.SOPHIE
    },
    {
        name: 'Carl Lorins',
        occupation: 'Senior Account Manager',
        portrait: Images.STAFF.CARL
    },
    {
        name: 'Christian Laliberte',
        occupation: 'Head of Performance Marketing',
        portrait: Images.STAFF.CHRISTIAN
    },
    {
        name: 'Mike Bramante',
        occupation: 'Senior Directior',
        portrait: Images.STAFF.MIKE
    },
    {
        name: 'Eric Ballesteros',
        occupation: 'UX Designer',
        portrait: Images.STAFF.ERIC
    },
    {
        name: 'David Giraldo',
        occupation: 'Motion Designer',
        portrait: Images.STAFF.DAVID
    },
    {
        name: 'Max Spinelli',
        occupation: 'Copywriting & Digital Creative',
        portrait: Images.STAFF.MAX
    },
    {
        name: 'Johanna Dilao',
        occupation: 'Campaign Manager',
        portrait: Images.STAFF.JOHANNA
    },
    {
        name: 'Rachel Wagschal',
        occupation: 'Technical Project Manager',
        portrait: Images.STAFF.RACHEL
    },
    {
        name: 'Jessa Macalintal',
        occupation: 'Product Manager',
        portrait: Images.STAFF.JESSA
    },
    {
        name: 'JC Magtibay',
        occupation: 'Developer',
        portrait: Images.STAFF.JC
    },
    {
        name: 'Matthew Calabia',
        occupation: 'Developer',
        portrait: Images.STAFF.MATTHEW
    },
]

export const Brands = [
    {
        name: 'Cretech', 
        src: Images.BRANDS.CRETECH, 
        width: Images.BRANDS.BRANDSIZES.CRETECH.width, 
        height: Images.BRANDS.BRANDSIZES.CRETECH.height
    },
    {
        name: '30 Kent Street', 
        src: Images.BRANDS.KENT_STREET, 
        width: Images.BRANDS.BRANDSIZES.KENT_STREET.width, 
        height: Images.BRANDS.BRANDSIZES.KENT_STREET.height
    },
    {
        name: 'Labaia', 
        src: Images.BRANDS.LABAIA, 
        width: Images.BRANDS.BRANDSIZES.LABAIA.width, 
        height: Images.BRANDS.BRANDSIZES.LABAIA.height
    },
    {
        name: 'Ori', 
        src: Images.BRANDS.ORI, 
        width: Images.BRANDS.BRANDSIZES.ORI.width, 
        height: Images.BRANDS.BRANDSIZES.ORI.height
    },
    {
        name: 'Sachse', 
        src: Images.BRANDS.SACHSE, 
        width: Images.BRANDS.BRANDSIZES.SACHSE.width, 
        height: Images.BRANDS.BRANDSIZES.SACHSE.height
    },
    {
        name: 'Stonehenge', 
        src: Images.BRANDS.STONEHENGE, 
        width: Images.BRANDS.BRANDSIZES.STONEHENGE.width, 
        height: Images.BRANDS.BRANDSIZES.STONEHENGE.height
    },
    {
        name: 'Tree Top', 
        src: Images.BRANDS.TREETOP, 
        width: Images.BRANDS.BRANDSIZES.TREETOP.width, 
        height: Images.BRANDS.BRANDSIZES.TREETOP.height
    },
    {
        name: 'WW', 
        src: Images.BRANDS.WONDERWORKS, 
        width: Images.BRANDS.BRANDSIZES.WONDERWORKS.width, 
        height: Images.BRANDS.BRANDSIZES.WONDERWORKS.height
    },
];

export const CompanyCards = [
    {
        title: {
            name: '$27 Million in Contracts & <span class="text-tango-500">50% Pre-Sales</span> in 6 Months', 
            type: 'balance'
        },
        tags: ['Marketing', 'Branding', 'Web Design'],
        bgImage: {src: Images.CARDS.CARD1, alt: 'LA BAIA builing'},
        brandImage: {src: Images.BRANDS.LABAIA, alt: 'La Baia', width: 134, height: 50},
        available: true,
        href: 'la-baia'
    },
    {
        title: {
            name: '35% Pre-Leased, <span class="text-tango-500">58x Marketing ROI </span> For Market-Rate Apartments', 
            type: 'pretty'
        },
        tags: ['Marketing', 'Branding'],
        bgImage: {src: Images.CARDS.CARD2, alt: '30 Kent Building'},
        brandImage: {src: Images.BRANDS.KENT_STREET, alt: '30 Kent Street', width: 134, height: 50},
        available: true,
        href: 'kent-street'
    },
    {
        title: {
            name: 'Generated  <span class="text-tango-500">2K Renter Leads</span> in 50 States, Creating Consumer Demand', 
            type: 'pretty'
        },
        tags: ['Marketing'],
        bgImage: {src: Images.CARDS.CARD3, alt: 'COHO business cards'},
        brandImage: {src: Images.BRANDS.ORI, alt: 'ORI', width: 70, height: 30},
        available: true,
        href: 'ori'
    },
    {
        title: {
            name: '<span class="text-tango-500">224% Increase</span> in the Total Value of Leases Within 6 Months', 
            type: 'balance'
        },
        tags: ['Marketing', 'Branding', 'Web Design'],
        bgImage: {src: Images.CARDS.CARD4, alt: 'Tree Top Building'},
        brandImage: {src: Images.BRANDS.TREETOP, alt: 'Tree Top', width: 134, height: 30},
        available: true,
        href: 'tree-top'
    },
    {
        title: {
            name: '<span class="text-tango-500">522.78% ROI</span> and $1.5M Increase in Lease Value', 
            type: 'balance'
        },
        tags: ['Marketing', 'Branding'],
        bgImage: {src: Images.CARDS.CARD5, alt: 'Stonehenge building'},
        brandImage: {src: Images.BRANDS.STONEHENGE, alt: 'Stonehenge', width: 128, height: 20},
        available: true,
        href: 'stonehenge'
    },
    {
        title: {
            name: '<span class="text-tango-500">26% Increase</span> in B2B sales opportunity attribution using a multi-touch funnel', 
            type: 'balance'
        },
        tags: ['Marketing', 'Branding', 'Web Design'],
        bgImage: {src: Images.CARDS.CARD6, alt: 'photo of a living room that can raise a bed to reveal a couch'},
        brandImage: {src: Images.BRANDS.ORI, alt: 'ORI', width: 70, height: 30},
        available: true,
        href: 'ori-living'
    },
    {
        title: {
            name: 'Achieved <span class="text-tango-500">highest rental PPSQFT</span> in <br> lower Manhattan', 
            type: 'balance'
        },
        tags: ['Marketing', 'Web Design'],
        bgImage: {src: Images.CARDS.CARD7, alt: '2 Cooper Unit'},
        brandImage: {src: Images.BRANDS.TWOCOOPER, alt: '2COOPER', width: 70, height: 30},
        available: true,
        href: 'two-cooper'
    },
    {
        title: {
            name: 'Achieved <span class="text-tango-500">5.4x ROAS</span> for a global real estate conference', 
            type: 'balance'
        },
        tags: ['Marketing', 'Branding'],
        bgImage: {src: Images.CARDS.CARD8, alt: 'Cretech conference event'},
        brandImage: {src: Images.BRANDS.CRETECH, alt: 'Cretech', width: 70, height: 30},
        available: false,
        href: 'cretech'
    },
    {
        title: {
            name: '<span class="text-tango-500">17.2% lead-to-sale</span> with integrated marketing & sales for Westview', 
            type: 'balance'
        },
        tags: ['Marketing'],
        bgImage: {src: Images.CARDS.CARD9, alt: 'WestView Room'},
        brandImage: {src: Images.BRANDS.WV, alt: 'WV', width: 70, height: 30},
        available: false,
        href: 'west-view'
    },
    {
        title: {
            name: 'Successful market-entry website & product positioning for <span class="text-tango-500">AI powered</span> investor platform', 
            type: 'balance'
        },
        tags: ['Marketing', 'Web Design'],
        bgImage: {src: Images.CARDS.CARD10, alt: 'Haystacks Location Map'},
        brandImage: {src: Images.BRANDS.HAYSTACKAI, alt: 'Haystack.ai', width: 70, height: 30},
        available: false,
        href: 'haystack'
    },
]

export const pressCards = [
    {
        title: 'Snaplistings ranks in top 1,000 on the 2023 Inc 5000 List!', 
        src: Images.PRESS.INC, 
        company: 'inc',
        href: 'https://www.inc.com/profile/snaplistings',
        description: `Companies on the 2023 Inc. 5000 are ranked according to percentage revenue growth from 2019 to 2022. To qualify,
        companies must have been founded and generating revenue by March 31, 2019. They must be U.S.-based, privately held, 
        for-profit, and independent--not subsidiaries or divisions of other companies--as of December 31, 2022. (Since then, some 
        on the list may have gone public or been acquired.) The minimum revenue required for 2019 is $100,000; the minimum for 
        2022 is $2 million. As always, Inc. reserves the right to decline applicants for subjective reasons. Growth rates used to
        determine rankings were calculated to four decimal places.`,
    },
    {
        title: "Crain's 2023 Notable Leaders in Marketing Award Winner", 
        src: Images.PRESS.CRAINCOMM, 
        company: 'crain-communications',
        href: 'https://www.crainsnewyork.com/awards/erica-sachse-notable-leaders-advertising-marketing-pr-2023',
        description: `As chief executive officer of Snaplistings, a real estate marketing agency, Erica Sachse leads a team of more than 15 
        marketing professionals across locations including New York City, Miami, and international offices. She is responsible for 
        developing and executing campaign strategies for 20 clients, and oversees an ad spend of approximately $1 million. 
        Sachse has played a pivotal role in brand development and implementation for luxury properties worldwide while offering 
        her clients expertise in data personalization and advanced marketing automation. She also helped organize the Climate 
        Global Leadership Summit in Copenhagen, producing a documentary to amplify the summit’s message.`,
    },
    {
        title: 'HousingWire 2023 Marketing Leader Award Winner', 
        src: Images.PRESS.HS, 
        company: 'housingwire',
        href: 'https://www.housingwire.com/winner-profile/2023-marketing-leader-erica-sachse/',
        description: `Marketing Leaders 2023<br />
        <br />
        Erica Sachse is a growth marketing expert, data scientist and entrepreneur who is transforming the real estate marketing 
        industry as CEO and co-founder at Snaplistings and Development Marketing Team (DMT). Specializing in full-funnel 
        property marketing, Sachse’s expertise in data and technology have enabled her to develop digital campaigns that drive 
        high-quality lead generation and sales, taking real estate projects from first impressions through close. Sachse created 
        groundbreaking content and outstanding audience engagement across both digital and traditional channels, delivering 
        exceptional results for her clients and helping them achieve record sales.<br />
        <br />
        Sachse is a dynamic leader and data expert who has achieved remarkable success in growing two companies in the real 
        estate industry. She is the founder of Snaplistings, a property marketing agency, and DMT, an integrated sales and 
        marketing new development brokerage. Sachse keeps her finger on the pulse of new and emerging trends, leveraging 
        data and technology to drive awareness for real estate projects in NYC and South Florida. Her advanced algorithms 
        optimize engagement and increase conversion, creating an elevated buyer journey that delivers exceptional results for her 
        clients. Sachse leads with dedication and a passion for excellence, always striving to take her companies to the next level.`
    },
    {
        title: 'Data Drives Deals; How Digital Marketing and Analytics Can Help Drive Real Estate Sales', 
        src: Images.PRESS.CUSTOMTHINK, 
        company: 'customer-think',
        href: 'https://customerthink.com/data-drives-deals-how-digital-marketing-and-analytics-can-help-drive-real-estate-sales/',
        description: `Technology has upended nearly every sector, allowing businesses to scale and grow thanks to advanced tools and 
        software. In real estate especially – a notably antiquated industry resistant to change – technology has been at the 
        forefront of much-needed improvements and progression, helping to transform the way real estate is bought and sold.<br />
        <br />
        Over the past decade, there have been significant strides in how brokerages and agents use technology. It is often – at the 
        most basic levels – incorporated into agents’ sales and marketing funnels. Everyone is familiar with the “must haves,” 
        which include websites, e-blasts, newsletters, and a social media presence; however, there are several digital marketing 
        tools that are underutilized and misunderstood.<br />
        <br />
        The advancements in digital marketing allow us to collect invaluable data that explains homebuyers’ thoughts, feelings, 
        needs, and desires. By utilizing this information, agents can develop tailored buyer profiles. Determining traits such as 
        location, price point, square footage, and other details, allows you to accurately deduce what characteristics may impact 
        a buyer’s decision-making process. Through various digital marketing tactics, such as social listening, content 
        development, and lead nurture campaigns, you can effectively collect information and data about what inspires your 
        consumers and what prompts engagement.<br />
        <br />
        So how can utilizing cutting-edge technology increase conversion rates?<br />
        <br />
        By actively implementing digital tools, agents can more effectively source, identify, and nurture prospective buyers and 
        sellers, leading to an increase in sales conversion.<br />
        <br />
        We see new apps and tech platforms emerge daily. There’s an overwhelming amount of places you can promote your 
        business or product and to achieve conversions, but it’s first important to understand the role that digital marketing plays
        in full-funnel optimization. The biggest goal of any digital marketing campaign is to generate traffic and create new leads 
        that ultimately result in sales. A strong digital presence is one of the most effective ways to reach your audience, but in 
        the current crowded landscape, it’s important to provide numerous touchpoints – both online and offline. Touchpoints 
        should be personalized across each step of the consumer journey as these greatly contribute to the decision-making 
        process.<br />
        <br />
        At Development Marketing Team (DMT), we seamlessly marry the sales and marketing process and utilize today’s 
        technology to elevate the consumer journey, optimize engagement and increase conversion. Through the development of 
        innovative digital processes, we can use real-time data to generate high-quality leads and nurture prospects based on 
        behaviors, interactions, and touchpoints.<br />
        <br />
        Now more than ever, it’s faster and easier to connect with potential buyers and keep up to date on what’s happening in the 
        market. Yet sometimes, we can be blinded by the chaos and forget that buyers are consumers of goods and services. To 
        successfully communicate with them, we must remember the human connection. As such, the sales and marketing 
        process needs to focus more on personalization, evoking a sense of empathy and creating an elevated and humanized 
        consumer journey.<br />
        <br />
        Not only can you employ these various marketing strategies to tailor interactions with potential buyers, but the data 
        collected can also be used to optimize future campaigns to fit buyer needs and shifting trends. Implementing 
        personalized campaigns assists in developing trust and building credibility, which in turn, will elevate agents’ personal 
        brands.<br />
        <br />
        It’s no surprise that marketing plays an integral role in the entire real estate process, as it’s the primary method of 
        communication between you and potential prospects. Today, with technology at our disposal, digital marketing remains a 
        driving force in shaping how we interact with our target audiences. With more technological innovations appearing, digital 
        marketing will continue to be the primary method used to generate qualified leads and convert them into successful sales.`
    },
    {
        title: '2023 Top Women in Marketing Awards Winners', 
        src: Images.PRESS.TOPWOMEN, 
        company: 'topwomen',
        href: "https://chiefmarketer.com/event/2023-top-women-in-marketing/",
        description: `The Top Women in Marketing Awards shout out the women among us who hustle from home, from office, and every stop 
        in between to exceed expectations. Over the last year, these women overcame unpredictable challenges and obstacles 
        while being the fuel for creative excellence and catalysts for change.<br />
        <br />
        These are the women making names for themselves at companies spanning both brands and agencies, and the B2B and 
        B2C sectors. They are groundbreakers and ceiling shatterers. Creative visionaries and mentors.<br />
        <br />
        Sophie Schneider, Creative Director at Snaplistings, was recognized as a standout amongst The Creatives and 
        Snaplistings CEO, Erica Sachse, stood tall with The Data Artists.<br />
        Congratulations to the 2023 Top Women in Marketing!`
    },
]

export const CompanyPages = [
    {
        Href: 'la-baia',
        Title: '$27 Million in Contracts & <span class="text-tango-500">50% Pre-Sales</span> In 6 Months $27 Million in Contracts',
        Background: Images.CARDS.FULL.CARD1,
        Client: {name: "La Baia", logo: Images.BRANDS.LABAIA_BLACK},
        Description: 'La Baia North is a new luxury, boutique bayfront condominium in Miami’s exclusive Bay Harbor Islands, imagined by New York visionary and developer Ian Bruce Eichner. Sales absorption was slowing due to unfavorable market conditions, though data showed there was strong product-market fit.',
        Problem: {
            title: 'How to leverage marketing data for a strategy that optimizes pricing, release and sales decisions.',
            challenges: [
                "The market changed considerably since the client's previous project, La Baia South, leaving us with a lack of data about today's buyer market.",
                "Within the project, there is a big variation in pricing and little differentiation of product.",
            ],
            image: Images.COMPANIES.LABAIA.CARD1,
        },
        Solution: {
            title: 'Execute our integrated Buyer & Broker Funnel, collect the right data, and deliver a data-driven strategy.',
            description: `Added critical profile questions to the Buyer Funnel web form to analyze real-time market trends and
            inform pricing, release strategy, ad spend and other key decisions.<br />
            <br />
            Categorized inventory into residence collections, increasing perceived value on non-waterfront facing 
            inventory without alienating the waterfront residences.`,
            image: Images.COMPANIES.LABAIA.CARD2,
        },
        Results: [
            {
                title: '6 Months to Achieve <span class="text-tango-500">$27M</span> in Contracts',
                description: 'The Digital Marketing Funnel yielded 414 Leads, 62 Presentations, and 5 Sales for $27 Million in contracts in 6 months.',
            },
            {
                title: '<span class="text-tango-500">38%</span> of All Contracts Attributed to Digital Marketing',
                description: 'Data-driven strategies supercharged the sales process with 50% pre-sales in 6 months and 38% of all contracts attributed to digital marketing efforts.',
            },
            {
                title: '<span class="text-tango-500">4%</span> Increase in Pricing',
                description: 'Maintained velocity in a down market with 15.75% conversion from Lead to Presentation, 8% conversion from Presentation to Sale, and a 4% increase in pricing.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.CARL,
            quoteText: 'Through our key messaging workshop with the La Baia North sales team, we identified a key opportunity to elevate our sales narrative through the introduction of The Residence Collections, setting us apart in a highly competitive market. By synergizing real-time feedback from sales interactions with insightful buyer funnel data, we refined our marketing strategy to drive home a consistent narrative and disseminate key messages through a diverse mix of channels both online and offline. Our ability to pivot and quickly update creative through the use of dynamic templates, enabled a buyer-focused approach that led to enhanced engagement, drove a distinct brand story, and allowed us to hit sales targets.',
            author: '- Carl Lorins, Senior Account Manager',
        }
    },
    {
        Href: 'kent-street',
        Title: '35% Pre-Leased, <span class="text-tango-500">58x Marketing ROI</span> For Market-Rate Apartments',
        Background: Images.CARDS.FULL.CARD2,
        Client: {name: "BNS Real Estate, WonderWorks Construction", logo: Images.BRANDS.KENT_STREET_BLACK},
        Description: '30 Kent Street is an 80-unit, ground up, mixed-use rental building on the Greenpoint waterfront. The 56 market rate apartments range from studios to 3 bedrooms - priced $3,000-$10,000/mo.',
        Problem: {
            title: 'How To Differentiate In The Highly Competitive Brooklyn Sub-Market',
            challenges: [
                "Six competitive buildings in the local area were also in lease-up.",
                'The location was still "up and coming" and not as well known as Williamsburg.',
                'Project was still under construction during tours and lead generation.',
            ],
            image: Images.COMPANIES.KENTSTREET.CARD1,
        },
        Solution: {
            title: 'Our Differentiated Marketing Strategy Resulted In A Lease Up That Exceeded Revenue Targets By +21%',
            description: `During our competitive analysis, we uncovered an opportunity to differentiate 30 Kent Street's amenity 
            programming and create sub-identities for the amenity spaces. This was in stark contrast to the 
            "laundry list" of amenities that our competitors marketed.<br />
            <br />
            Our market analysis revealed renters' confusion between Kent Ave in well-known Williamsburg and 
            Kent Street in Greenpoint. During early construction, we launched a guerilla brand awareness 
            campaign on the streets of Brooklyn and Lower Manhattan to create awareness about Kent Street, 
            Greenpoint.`,
            image: Images.COMPANIES.KENTSTREET.CARD2,
        },
        Results: [
            {
                title: '<span class="text-tango-500">58x</span> Return On Marketing Spend',
                description: 'Through effective strategy and positioning, we built a robust funnel that generated 1067 Leads, 217 Tours, and 56 Signed Leases for a 58x Return on Marketing Spend.',
            },
            {
                title: '<span class="text-tango-500">35%</span> of Units Pre-Leased Prior to Launch',
                description: 'We generated unprecedented interest in a lesser-known neighborhood with our innovative guerilla marketing campaign, Pre-Leasing 35% of units prior to launch, 10% higher than our target.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.SOPHIE,
            quoteText: 'This was a really fun experiment in creating an effective brand in both the digital and physical realms. We had the privilege of being involved with the project from day one with our hands in everything from amenity planning through building signage, allowing us to create a really cohesive message across all visual and marketing assets. The guerilla marketing posters were the cherry on top presenting an awesome opportunity to deliver a creative approach to the Kent Street vs. Kent Ave confusion.',
            author: '- Sophie Schneider, Creative Director',
        }
    },
    {
        Href: 'ori',
        Title: 'Generated <span class="text-tango-500">2K Renter Leads</span> In 50 States, Creating Consumer Demand',
        Background: Images.CARDS.FULL.CARD3,
        Client: {name: "Ori Living & Watermark", logo: Images.BRANDS.ORI_BLACK},
        Description: 'CoHo is a 54-unit, ground up rental building in Forth Worth, Texas. 80% of the units are Ori Expandable Semi-Furnished Studios - a market-making living option and the first of its kind in the Fort Worth Area. Expandable Studio apartments are $1,100-$1,500/mo.',
        Problem: {
            title: 'How to Create Rental Demand for A Better Studio in Fort Worth',
            challenges: [
                "Ori Expandable Studios are a new apartment category that require high touch education about their benefits.",
                "Achieve rent premiums on the Ori Expandable Studios compared to the traditional studios.",
            ],
            image: Images.COMPANIES.ORI.CARD1,
        },
        Solution: {
            title: 'Execute A High-Tough Renter Journey To Achieve A 5% Lead To Lease Conversion Rate',
            description: `Devised a Coming Soon lead generation and nurture campaign to educate early and often.<br />
            <br />
            Created a virtual presentation in partnership with Ori featuring custom animations to demonstrate the 
            benefits of Expandable Studios.`,
            image: Images.COMPANIES.ORI.CARD2,
        },
        Results: [
            {
                title: 'Achieved <span class="text-tango-500">15%</span> PPSQFT Rent Premium',
                description: 'Not only did we define a new apartment category, we also properly educated buyers and generated high interest to achieve a 15% ppsqft rent premium on Expandable Studios vs. Traditional Studios.',
            },
            {
                title: '<span class="text-tango-500">100%</span> Leased in Just 30 Days',
                description: 'Thanks to a robust funnel and creative execution, we successfully leased 100% of available units. From 891 Leads, we executed 44 Expandable Studio Leases in 30 Days.',
            },
            {
                title: '<span class="text-tango-500">50%</span> of Apartments Pre-Leased',
                description: 'Thanks to our innovative coming soon campaign and ample, quality lead generation, 50% of apartments were pre-leased. We effectively communicated with prospective buyers on a deeper level.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.SOPHIE,
            quoteText: 'We got to let our hair down with this one, creating a more playful brand for the vibrant, art enthusiast community of Fort Worth. It was a bit of a balancing act crafting a brand that highlighted not only the modularity of the Ori Studios but also the building itself, which was constructed from shipping containers. For a market who knew nothing about the Ori Product, it was really important to highlight their expandable, transformative nature within the brand identity to help educate and drive interest from our target market across all touch points. Shoutout to the Ori team for trusting us and making this a really fun project overall.',
            author: '- Sophie Schneider, Creative Director',
        }
    },
    {
        Href: 'tree-top',
        Title: '<span class="text-tango-500">224% Increase</span> In The Total Value of Leases Within 6 Months',
        Background: Images.CARDS.FULL.CARD4,
        Client: {name: "Tree Top", logo: Images.BRANDS.TREETOP_BLACK},
        Description: 'Tree Top is a 152-unit multifamily rental building located in Spartanburg, South Carolina. It recently changed ownership and needed to urgently reposition itself as a desirable community for higher quality renters.',
        Problem: {
            title: 'How to attract higher-quality renters, address low occupancy rates, and establish a consistent and appealing brand identity for the property',
            challenges: [
                "Tree Top needed to rebrand as a newly renovated community through its value add renovations. The previous owners had created a neighborhood that had a negative reputation for being an undesirable community.",
                "Accelerate leasing through digital ad-targeting and attract high quality renters that elevate the neighborhood and development.",
            ],
            image: Images.COMPANIES.TREETOP.CARD1,
        },
        Solution: {
            title: 'Increase lease numbers, attract a higher caliber of tenants, transform the development from a traditional complex into a modern vibrant & gated community.',
            description: `Established a strong and recognizable identity by implementing consistent branding across various 
            channels to reposition Tree Top as the most sought after multi-family development in Spartanburg, 
            South Carolina.<br />
            <br />
            Activated highly targeted digital advertising highlighting the newly renovated complex, and elevated 
            the quality and of renters.`,
            image: Images.COMPANIES.TREETOP.CARD2,
        },
        Results: [
            {
                title: 'Total Value of Leases Increased by <span class="text-tango-500">224%</span>',
                description: 'Through our lead generation advertising efforts, we successfully elevated the perceived value of Tree Top Apartments, resulting in a remarkable 224% increase in the total value of leases within 6 months.',
            },
            {
                title: 'Average Monthly Leases Skyrocketed by <span class="text-tango-500">250%</span>',
                description: 'Our targeted digital ads not only attracted a larger volume of potential renters but also led to a substantial 250% increase in the average number of monthly leases.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.ERIC,
            quoteText: 'This was our first project in Framer which really allowed us to push the interactions on our websites. Creating the floor plan picker really helped us tell the story of Tree Top and allow the user to envision what it could possibly be like to move in and furnish the place how they’d like.',
            author: '- Eric Ballesteros, UX Designer',
        }
    },
    {
        Href: 'stonehenge',
        Title: '<span class="text-tango-500">522.78% ROI</span> And $1.5M Increase in Lease Value',
        Background: Images.CARDS.FULL.CARD5,
        Client: {name: "Stonehenge", logo: Images.BRANDS.STONEHENGE_BLACK},
        Description: 'Stonehenge NYC is a vertically integrated, private real estate company with expertise in investing, operating and developing communities that are environmentally, socially and governmentally responsible. Stonehenge, together with its investment partners, owns and manages a portfolio of properties in New York City valued at approximately $2.5 billion. The portfolio is comprised of 28 income-producing properties with over 3,200 apartments representing 3.5 million square feet of prime real estate.',
        Problem: {
            title: "How to solve Stonehenge's market presence and lease value dilemma while increasing occupancy and brand recognition.",
            challenges: [
                "Strengthen Stonehenge’s market position as a leader in the NYC luxury real estate rental industry.",
                "Enhance lease values and occupancy rates.",
                "Reduce reliance on external listing sites.",
            ],
            image: Images.COMPANIES.STONEHENGE.CARD1,
        },
        Solution: {
            title: 'Generate high-quality tenant leads through Targeted Digital Campaigns',
            description: `Executed a cohesive brand identity overhaul to solidify Stonehenge’s presence as a top-tier real 
            estate entity.<br />
            <br />
            Launched highly targeted digital advertising campaigns on platforms like Facebook, Google Ads, and 
            LinkedIn, designed to attract premium tenants and maximize lease values.<br />
            <br />
            Audited, Pivoted, and Optimized Stonehenge's MarTech stack to delivery maximum ROI`,
            image: Images.COMPANIES.STONEHENGE.CARD2,
        },
        Results: [
            {
                title: '<span class="text-tango-500">522.78%</span> Return on Investment',
                description: 'Delivered a staggering 522.78% return on investment, with a direct increase in lease value totaling $1,515,510.00, showcasing the effectiveness of the marketing strategies.',
            },
            {
                title: '<span class="text-tango-500">3,965</span> Leads Generated',
                description: 'Revolutionized Lead Generation with 3,965 leads, including 1,441 from Facebook/Meta and 2,189 from search leads, driving an influx of high-quality rental inquiries and conversions.',
            },
            {
                title: '<span class="text-tango-500">60%</span> Savings in EMS Monthly Fees',
                description: 'Enhanced email marketing effectiveness, leading to a 55% increase in average open rates post-switching to Mailchimp, coupled with a 60% savings in EMS monthly fees without any loss in engagement.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.JORDAN,
            quoteText: 'Our collaboration with Stonehenge was both professionally enriching and highly productive. Their team’s insightful contributions and eagerness to innovate perfectly complemented our expertise in digital marketing. Together, we crafted a strategy that was not just effective, but also a testament to the remarkable results that can be achieved through collaborative excellence in the real estate industry.',
            author: '- Jordan Griffey, Director of Operations',
        }
    },
    {
        Href: 'ori-living',
        Title: '<span class="text-tango-500">26% increase</span> In B2B sales opportunity attribution using a multi-touch funnel',
        Background: Images.CARDS.FULL.CARD6,
        Client: {name: "Ori Living", logo: Images.BRANDS.ORI_BLACK},
        Description: 'We were able to leverage our new multi-touch funnel approach to improve attribution, and scale marketing channels that were heavily weighted towards leads. Using Paid Search, Paid Social, Email & Organic marketing channels, we understood how the developer journey consisted of 5 touchpoints over 14 days across multiple marketing channels before a conversion happened. ',
        Problem: {
            title: 'Reaching multi-family developers in High Vacancy & New Supply markets who would benefit from differentiation with Ori Cloud Beds.',
            challenges: [
                "Identify the most scalable marketing channels to reach Real Estate Developers.",
                "Use effective messaging & creative that educated top-of-funnel traffic to the Ori for Developers website",
                "Test Paid Meta as a scalable marketing channel to reach Real Estate Developers (historically they have been on LinkedIn)",
            ],
            image: Images.COMPANIES.ORI_LIVING.CARD1,
        },
        Solution: {
            title: 'A multi-touch approach that leveraged marketing channels effectively to drive conversions.',
            description: `We combined paid meta ads with email & organic traffic to populate top of funnel traffic. These real 
            estate developers, asset managers, architects, were then heavily retargeted in a closed-loop 
            marketing system that sought to educate them on Ori as a value-add proposition for prospective 
            renters.`,
            image: Images.COMPANIES.ORI_LIVING.CARD2,
        },
        Results: [
            {
                title: 'Doubled monthly qualified leads by <span class="text-tango-500">112%</span>',
                description: 'Crediting a robust funnel spread across various marketing channels, we scaled lead generation by 112% from the previous year. ',
            },
            {
                title: 'Average opportunity amount <span class="text-tango-500">tripled</span>',
                description: 'By improving lead quality, we were able to increase the average opportunity amount by 260%',
            },
            {
                title: 'Reduced the speed to conversion by <span class="text-tango-500">42%</span>',
                description: 'By scaling the multi-touch approach across organic, paid & email, we were able to hit the developer with messaging that resonated at each stage of the funnel.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.CHRISTIAN,
            quoteText: 'Our multi-touch funnel approach transformed our marketing landscape, targeting real estate developers effectively across diverse channels. By optimizing messaging and leveraging Paid Meta ads alongside organic and email traffic, we doubled monthly qualified leads, tripled average opportunity amounts, and slashed conversion time by 42%. This success showcases the power of a tailored, multi-channel strategy in driving significant business growth, especially using a traditionally misunderstood channel like Meta Ads, in the context of B2B marketing to Real Estate Developers.',
            author: '- Christian Laliberte, Head of Performance Marketing',
        }
    },
    {
        Href: 'two-cooper',
        Title: 'Achieved <span class="text-tango-500">Highest Rental PPSQFT</span> In Lower Manhattan',
        Background: Images.CARDS.FULL.CARD7,
        Client: {name: "2 Cooper", logo: Images.BRANDS.TWOCOOPER_BLACK},
        Description: '2 Cooper Square is the premier rental building in NoHo, NYC with easy access to some of the hottest restaurants and retailers, along with the best entertainment and nightlife in the area. The 133-units are luxuriously appointed and the building features one of the few rooftop pools in Manhattan with unparalleled views.',
        Problem: {
            title: 'Reduce reliance on StreetEasy (Zillow) and increase pricing make up for COVID-era discounts.',
            challenges: [
                "Increased competition in neighborhood and on external listing sites like StreetEasy",
                "Tight marketing budget due to decreased NOI from COVID-era",
            ],
            image: Images.COMPANIES.TWOCOOPER.CARD1,
        },
        Solution: {
            title: 'Execute high quality lead generation through the 2 Cooper lead capture page.',
            description: `Build demand and awareness via organic social content and use targeted paid ads on social and 
            search to convert demand into high quality lead generation through the 2 Cooper lead capture page.`,
            image: Images.COMPANIES.TWOCOOPER.CARD2,
        },
        Results: [
            {
                title: '<span class="text-tango-500">+$110</span> PPSQFT on new leases',
                description: 'Using our lead generation program, we were able to reduce negotiability and increase pricing faster.',
            },
            {
                title: '<span class="text-tango-500">42%</span> of Leases Attributed to Lead Gen',
                description: 'Compared to 38% attributed to StreetEasy (external listing site). We were able to successfully reduce reliance on StreetEasy and maximize the marketing budget.',
            },
            {
                title: '<span class="text-tango-500">$3.1M</span> Annual Revenue from Lead Gen',
                description: 'Annual revenue equated to +55x return on marketing spend.',
            },
        ],
        Quote: {
            authorPotrait: Images.STAFF.ERICA,
            quoteText: 'By collecting and analyzing the lead data for 2 Cooper, we were able to recommend strategic pricing for units were coming to market. In addition, the huge pipeline of leads looking a few months in advance allowed the leasing team to pre-lease the majority of units with no vacancy.',
            author: '- Erica Sachse, CEO',
        }
    },
]