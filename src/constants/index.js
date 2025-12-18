const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    // {
    //     name: "Testimonials",
    //     link: "#testimonials",
    // },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 10, suffix: "+", label: "Applications & ML Projects Delivered" },
    { value: 4, suffix: ".0/4.0", label: " Masters Dissertation Score" },
    { value: 1, suffix: "G", label: "Stamp" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const skillHighlights = [
    {
        label: "Languages I ship in",
        skills: ["C", "C++", "Java", "Python", "Swift"],
    },
    {
        label: "Frontend & app frameworks",
        skills: ["React", "TailwindCSS", "SwiftUI", "UIKit", "Combine"],
    },
    {
        label: "Data & infrastructure",
        skills: ["Apache Spark", "Kafka", "Airflow", "PostgreSQL", "RedisDB"],
    },
];

const skillCategories = [
    {
        title: "Programming Languages",
        usage: "Core stack",
        description: "Systems, backend, and application development across compiled and interpreted languages.",
        skills: ["C", "C++", "Java", "Python", "Swift", "LINUX", "Bash Scripts"],
    },
    {
        title: "Frameworks & Libraries",
        usage: "Building experiences",
        description: "Web, mobile, and server frameworks for rapid delivery and polished UX.",
        skills: [
            "React",
            "TailwindCSS",
            "UIKit",
            "SwiftUI",
            "Spring Boot",
            "PyTorch",
            "TensorFlow",
            "CUDA",
            "Combine",
            "XCTest",
            "XCUITest",
        ],
    },
    {
        title: "Data & Big Data",
        usage: "Processing & storage",
        description: "Batch, streaming, orchestration, and data stores for resilient pipelines.",
        skills: ["Apache Spark", "Kafka", "Airflow", "CoreData", "PostgreSQL", "RedisDB"],
    },
    {
        title: "Cloud & Distribution",
        usage: "Deploying reliably",
        description: "Cloud services and dependency management for scalable delivery.",
        skills: ["AWS (S3, Lambda, SageMaker)", "SPM", "Cocoa pods"],
    },
    {
        title: "CI/CD & Ops",
        usage: "Ship with confidence",
        description: "Pipelines, containers, and version control to keep releases smooth.",
        skills: ["Docker", "Git", "Jenkins"],
    },
];

const expCards = [
    {
        review:
            "Mahendran consistently brought innovation and technical depth to the team, modernizing our frameworks and improving app performance across platforms through his proactive approach.",
        imgPath: "/images/zoho.svg",
        logoPath: "/images/zoho.svg",
        title: "Software Engineer",
        date: "April 2022 - July 2024",
        responsibilities: [
            "Redesigned core backend workflows including authentication, request validation, caching and database optimisation resulting in 25% lower PostgreSQL load and improved performance under high traffic.",
            "Developed and optimized Spring Boot REST APIs for Zoho Desk, improving overall API response times by 30% through clean architecture design, efficient query handling and code review.",
            "Enhanced microservice communication using Feign clients and structured request/response models, increasing system reliability and reducing inter-service failures by 20%.",
            "Implemented robust exception handling and monitoring using Spring AOP and logging frameworks, improving issue detection speed and reducing production debugging time by 40%"
        ],
    },
    {
        review:
            "Mahendran quickly mastered new technologies and delivered scalable, well-architected solutions. His problem-solving skills and dedication earned him the Best Performer award.”.",
        imgPath: "/images/zoho.svg",
        logoPath: "/images/zoho.svg",
        title: "Software Engineer",
        date: "April 2022 - June 2024",
        responsibilities: [
            "Contributed to the Zoho Desk iOS App (4.75/5 rating, 100K+ installs), implementing multiple features using SwiftUI, UIKit, and Combine. Implemented Instant Messaging features for an application using multiple bots and live person messaging.",
            "Built a UI framework deployed via Cocoa Pods and SPM, standardizing 20+ apps and reducing development time by 50%.",
            "Migrated applications from iOS 12 → iOS 14 and introduced iOS 17 support within a month, increasing team productivity by 10%. Improved app stability by optimizing CoreData, reducing crash rates by 40%.",
        ],
    },
    {
        review:
            "Mahendran showed exceptional ownership and efficiency. His automation scripts and backend optimization reduced turnaround times and boosted performance",
        imgPath: "/images/multicoreware.svg",
        logoPath: "/images/multicoreware.svg",
        title: "Software Developer",
        date: "September 2021 - March 2022",
        responsibilities: [
            "Developed backend API endpoints using Python (FastAPI) with RedisDB caching, improving response latency by 20% and overall system performance by 25%.",
            "Automated large-scale document extraction workflows using Bash + Linux scripts, saving 10+ hours/week of manual processing time.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/_mithu_29/",
        imgPath: "/images/insta.png",
    },
    {
        name: "Git",
        url: "https://github.com/mahendran-jinachandran",
        imgPath: "/images/git.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/mahendran-jinachandran/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackImgs,
    navLinks,
    skillHighlights,
    skillCategories,
};