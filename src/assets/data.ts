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
        
    }
]