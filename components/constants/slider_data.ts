export type Card = {
  role?: string;
  location?: string;
  dateRange: string;
  title: string;
  techStack?: string[];
  type: string;
  blurb: string;
  blurbBullets?: string[];
  image: string;
  id: number;
};

export const experiences = [
  {
    title: "PayPal",
    location: "Chicago, IL",
    dateRange: "01/2023 - 03/2025",
    role: "Software Engineer I",
    techStack: ["React, TypeScript, Ruby on Rails, Remix"],
    blurb:
      "PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure.",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/paypal-logo2.webp",
    type: "FullStack",
    blurbBullets: [
      "Refactored PayPal React components into a custom library using new designs",
      "Led the redesign and data retrieval restructuring for 10+ new financial reports and statements, enhancing data for 5,000+ merchants across the U.S. and Australia",
      "Implemented KPI monitoring for the new merchant control panel, generating thousands of events for data-driven decisions",
      "Authored integration guides for the GraphQL API, boosting developer adoption",
      "Contributed to weekly sandbox/production builds, deployed to production often, and responded to bugs/questions while on call",
      "Presented team projects to leadership and cross-functional teams",
    ],
    id: 1,
  },
  {
    title: "PayPal",
    location: "San Jose, CA",
    dateRange: "06/2022 - 09/2022",
    role: "Software Engineer Intern",
    techStack: ["Java", "React", "TypeScript, Next.js", "Express"],
    blurb:
      "PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure.",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/paypal-logo.webp",
    type: "FullStack",
    blurbBullets: [
      "Connected a new rules engine to a Java-based compliance service, allowing policy teams to update rules without developer support",
      "Engineered the frontend merchant dashboard for a new gaming initiative",
      "Developed a REST API with Express to support the merchant dashboard",
    ],
    id: 2,
  },
  {
    title: "MyCase",
    location: "San Diego, CA",
    dateRange: "05/2021 - 01/2022",
    role: "Software Engineer Co-op",
    techStack: ["Ruby On Rails", "React", "TypeScript", "MobX", "MySQL"],
    blurb: "MyCase is a SAAS case management platform designed for lawyers",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/mycase.webp",
    type: "FullStack",
    blurbBullets: [
      "Integrated Twilio, enabling 10,000+ law firms to communicate with clients",
      "Built numerous search features for reports, files, clients, and more",
      "Won the 2021 Hack Day by redesigning and demoing a prototype for a new homepage",
    ],
    id: 3,
  },
  {
    title: "Generate",
    location: "Boston, MA",
    dateRange: "08/2021 - 12/2021",
    role: "Software Engineer",
    techStack: ["React.js", "MongoDB", "GraphQL"],
    blurb:
      "Student-led project teams in the build studio collaborate to bring a real world client's vision to life.",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/generate.jpg",
    type: "FullStack",
    blurbBullets: [
      "Built a game that teaches players how to run a sustainable business",
      "Wrote API connections from our database to the frontend",
      "Coded visual and interactive game scenarios on the frontend",
    ],
    id: 4,
  },
];

export const projects = [
  {
    title: "Beat The Book Inc.",
    location: "Boston, MA",
    dateRange: "06/2020 - 11/2023",
    role: "Frontend Engineer",
    techStack: [
      "React",
      "TypeScript",
      "React Native",
      "Expo Go",
      "Next.js",
      "Redux",
    ],
    blurb: "Social media site to discuss virtual betting games. ",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/btb.jpg",
    type: "Frontend",
    blurbBullets: [
      "Built the frontend MVP for a social media startup",
      "Advised on database structure and UI/UX design",
      "Collaborated with an outside firm to build the mobile application",
    ],
    id: 1,
  },
  {
    title: "Lax Dolphins",
    dateRange: "09/2021",
    techStack: ["React", "TypeScript"],
    blurb:
      "Constructed a static NFT landing page integrated with an Ethereum smart contract.",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/castle-image.webp",
    type: "Frontend",
    blurbBullets: [],
    id: 2,
  },
  {
    title: "GB Paccers",
    dateRange: "05/2022",
    techStack: ["Python"],
    blurb:
      "Final project for Artificial Intelligence: A team for Berkley's Pacman-Capture-The-Flag contest.",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/greenbay.webp",
    type: "Backend",
    blurbBullets: [
      "Includes code for an Offensive and Defensive agent",
      "Uses Q-Learning and Monte-Carlo Tree Search to make decisions",
      "Due to the rules of the game, it performs the best with two offensive agents",
    ],
    id: 3,
  },
  {
    title: "Lyric Generator",
    dateRange: "05/2022",
    techStack: ["Python", "Tensorflow", "Keras"],
    blurb:
      "Final project for Natural Language Processing: A song lyric generator",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/song-lyrics.webp",
    type: "Backend",
    blurbBullets: [
      "Employs a Recurrent Neural Network and Long Short-term Memory",
      "Input a few lyrics to see the model build off of them into a new song",
    ],
    id: 4,
  },
  {
    title: "Bad Day",
    dateRange: "11/2020",
    techStack: ["C#", "Unity"],
    blurb:
      "Play as the villains in this reverse-dungeon crawler and stop the heroes from stealing back your hard-earned treasure!",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/badDayTitle.webp",
    type: "Backend",
    blurbBullets: [
      "Fight as the dungeon boss while moving around the map to buy smaller AI minions with 'hero bones'",
      "Custom art and music",
      "Available to play on PC",
    ],
    id: 5,
  },
  {
    title: "Webscrapers",
    dateRange: "12/2020 + 05/2022",
    techStack: ["Python", "Selenium", "HTML", "Javascript", "CSS"],
    blurb:
      "Tinder: Grabs Tinder profile data and hosts it on a website to be classified for a future project that will help people make better dating profiles.\nTwitter: Grabs Twitter tweet data to supplement a Machine-Learning final project.",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/tinder_and_twitter.webp",
    type: "Backend",
    blurbBullets: [
      "Used a Python/Selenium script to scrape 20,000 Tinder profiles for data",
      "Static website built in HTML/Javascript/CSS",
    ],
    id: 6,
  },
  {
    title: "Easy Animator",
    dateRange: "11/2020",
    techStack: ["Java", "Swing"],
    blurb:
      "A program that takes a list of shapes and instructions and produces an animation. It includes features such as speed control, looping, key-frame fast forward mode, new shape types, and more!",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/easyAnimator.webp",
    type: "FullStack",
    blurbBullets: [
      "Can produce either Java Swing or SVG animations",
      "Features were added continuously throughout the development of the program in order to practice extensible design principles",
    ],
    id: 7,
  },
];

export const skills = [
  {
    title: "React.js",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/The-Unofficial-Guide-to-React-Native.webp",
    type: "Frontend",
    dateRange: "05/2021",
    blurb:
      "A free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    id: 1,
  },
  {
    title: "TypeScript/JavaScript",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/ts-baner.webp",
    type: "Frontend",
    dateRange: "05/2021",
    blurb:
      "A programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
    id: 2,
  },
  {
    title: "Ruby On Rails",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/rubynew.webp",
    type: "FullStack",
    dateRange: "05/2021",
    blurb:
      "A server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.",
    id: 3,
  },
  {
    title: "React Native",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/reactnative.webp",

    type: "Frontend",
    dateRange: "05/2022",
    blurb:
      "React Native is an open-source framework developed by Meta for building native mobile applications using JavaScript and React. It allows developers to write code once and deploy it on both iOS and Android platforms, reducing development time and costs.",
    id: 4,
  },
  {
    title: "Python",
    image: "https://netflix-site.s3.amazonaws.com/static/python.webp",
    type: "Backend",
    dateRange: "01/2020",
    blurb:
      "A high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.",
    id: 5,
  },
  {
    title: "SQL",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/sql.webp",
    type: "Query",
    dateRange: "01/2021",
    blurb: "An open-source relational database management system.",
    id: 6,
  },
  {
    title: "GraphQL",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/graphql-reasons.webp",
    type: "Query",
    dateRange: "08/2021",
    blurb:
      "An open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.",
    id: 7,
  },
  {
    title: "Node.js",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/nodenew.webp",
    type: "Backend",
    dateRange: "01/2020",
    blurb:
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.",
    id: 8,
  },
  {
    title: "Next.js",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/nextjs.webp",
    type: "Frontend",
    dateRange: "01/2022",
    blurb:
      "An open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
    id: 9,
  },
  {
    title: "Remix",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/remix-glowing-logo.133ad3cc_dRRD.webp",
    type: "Frontend",
    dateRange: "01/2022",
    blurb:
      "Remix JS is a Full Stack React-based framework that allows you to render code on the server which tends to result in better performance and Search Engine Optimization as compared to using React on the client-side.",
    id: 10,
  },
  {
    title: "Redux",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/redux.webp",
    type: "Frontend",
    dateRange: "05/2021",
    blurb:
      "An open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    id: 11,
  },
  {
    title: "MobX",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/MobX.webp",
    type: "Frontend",
    dateRange: "05/2021",
    blurb:
      "MobX is unopinionated and allows you to manage your application state outside of any UI framework. This makes your code decoupled, portable, and above all, easily testable.",
    id: 12,
  },
  {
    title: "React Testing Library",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/React-Testing-Libraries.webp",
    type: "Frontend",
    dateRange: "05/2021",
    blurb:
      "The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is: The more your tests resemble the way your software is used, the more confidence they can give you.",
    id: 13,
  },
  {
    title: "Git",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/github.webp",
    type: "FullStack",
    dateRange: "02/2020",
    blurb:
      "A software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
    id: 14,
  },
  {
    title: "Docker",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/dockernew.webp",
    type: "FullStack",
    dateRange: "02/2020",
    blurb:
      "An open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure.",
    id: 15,
  },
  {
    title: "Jenkins",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/jenkinsnew.webp",
    type: "FullStack",
    dateRange: "02/2020",
    blurb: "Jenkins is an open source continuous integration (CI) server.",
    id: 16,
  },
  {
    title: "Expo Go",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/expogo.webp",
    type: "FullStack",
    dateRange: "02/2020",
    blurb:
      "A software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
    id: 17,
  },
  {
    title: "Vercel",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/vercel.webp",
    type: "Frontend",
    dateRange: "02/2020",
    blurb:
      "Vercel builds a frontend-as-a-service product—they make it easy for engineers to deploy and run the user facing parts of their applications.",
    id: 17,
  },
  {
    title: "Tailwind CSS",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/tailwind.webp",
    type: "Frontend",
    dateRange: "08/2021",
    blurb:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    id: 18,
  },
];

export const awards = [
  {
    title: "Eagle Scout",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/eaglescout.webp",
    blurb:
      "Eagle Scout is the highest achievement or rank attainable in the Scouts BSA program of the Boy Scouts of America.",
    type: "Certification",
    dateRange: "11/2018",
    blurbBullets: [
      "Project involved soliciting businesses and residents to collect school supplies for 110 underprivileged elementary students for the whole year",
      "Since its inception in 1911, only four percent of Scouts have earned this rank after a lengthy review process",
    ],
    id: 1,
  },
  {
    title: "Udemy",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/udemy.webp",
    blurb:
      "A massive open online course provider aimed at professional adults and students.",
    type: "Certification",
    dateRange: "08/2021",
    blurbBullets: [
      "The Complete JavaScript Course 2021",
      "The Complete Ruby on Rails Developer Course",
    ],
    id: 2,
  },
  {
    title: "LI Skill Badges",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/linkedin_logo3.webp",
    blurb:
      "The LinkedIn Skill Assessments feature allows you to demonstrate your knowledge of the skills you've added on your profile by completing assessments specific to those skills.",
    type: "Certification",
    dateRange: "11/2020 - 05/2021",
    blurbBullets: [
      "Proud owner of 21 LinkedIn CS-related skill badges and counting",
      "Must score in the top 30% of test takers to recieve a badge",
    ],
    id: 3,
  },
  {
    title: "CodeCademy",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/codecademy.webp",
    blurb:
      "An American online interactive platform that offers free coding classes in 12 different programming languages.",
    type: "Certification",
    dateRange: "05/2021",
    blurbBullets: [
      "Learn HTML Course",
      "Learn Intermediate CSS Course",
      "Learn Ruby Course",
      "Learn Bootstrap Course",
    ],
    id: 4,
  },
  {
    title: "National Merit",
    image: "https://netflix-site.s3.us-east-1.amazonaws.com/static/nmsp.jpg",
    blurb:
      "The National Merit Scholarship Program is an academic competition for recognition and scholarships that began in 1955.",
    dateRange: "11/2018",
    type: "Scholarship",
    blurbBullets: [
      "One of approximately 7,600 competitors selected from a pool of 1.5 million students",
      "Selection criteria includes PSAT scores and academic performance",
    ],
    id: 5,
  },
  {
    title: "Keep Doing Great Things",
    image:
      "https://netflix-site.s3.us-east-1.amazonaws.com/static/keepdoinggreatthings.webp",
    blurb:
      "The Foundation’s mission is to encourage Glen Ellyn community volunteerism and extend Jim Rasins’ legacy of doing great things for the community.",
    type: "Scholarship",
    dateRange: "05/2019",
    blurbBullets: [
      "Glenbard West's 2019 Winner",
      "Earned from volunteer work through Boy Scouts and the Morton Arboretum",
    ],
    id: 6,
  },
];
