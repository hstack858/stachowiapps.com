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
    title: "Beat The Book Inc.",
    location: "Boston, MA",
    dateRange: "5/21 - Present",
    role: "Frontend Lead",
    techStack: ["React", "TypeScript", "Next.js", "AWS", "Docker"],
    blurb: "Web hosted software that facilitates virtual betting games. ",
    image: "https://netflix-site.s3.amazonaws.com/static/btb.jpg",
    type: "Frontend",
    blurbBullets: [
      "Building and designing the frontend bookkeeper and player experiences",
      "Designing tickets and code reviewing for my team of frontend developers",
      "Helping design our database and how our API calls to it are structured",
    ],
    id: 1,
  },
  {
    title: "MyCase",
    location: "San Diego, CA",
    dateRange: "5/21 - 1/22",
    role: "SE Co-op",
    techStack: ["Ruby On Rails", "React", "TypeScript", "MobX", "MySQL"],
    blurb: "MyCase is a SAAS case management platform designed for lawyers",
    image: "https://netflix-site.s3.amazonaws.com/static/mycase.png",
    type: "FullStack",
    blurbBullets: [
      "Won 'Best in Show' at both 2021 Hack Days",
      "Helped in the dashboard redesign process",
      "Implementing simple full-stack user experiences to solve client concerns",
      "Writing controller endpoints including background workers, complex database queries, and more",
    ],
    id: 2,
  },
  {
    title: "PayPal",
    location: "San Jose, CA",
    dateRange: "6/22 - 9/22",
    role: "SE Intern",
    techStack: ["Java"],
    blurb:
      "PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure.",
    image: "https://netflix-site.s3.amazonaws.com/static/paypal.png",
    type: "Backend",
    blurbBullets: ["Member of a payment transaction team"],
    id: 3,
  },
  {
    title: "Generate",
    location: "Boston, MA",
    dateRange: "8/21 - 12/21",
    role: "Software Engineer",
    techStack: ["React.js", "MongoDB", "GraphQL"],
    blurb:
      "Student-led project teams in the build studio collaborate to bring a real world client's vision to life.",
    image: "https://netflix-site.s3.amazonaws.com/static/gen.png",
    type: "FullStack",
    blurbBullets: [
      "Building a game that teaches players how to run a sustainable business",
      "Writing API connections from our database to the frontend",
      "Coding visual and interactive game scenarios on the frontend",
    ],
    id: 4,
  },
];

export const projects = [
  {
    title: "Lax Dolphins",
    dateRange: "9/21",
    techStack: ["React", "TypeScript"],
    blurb:
      "My roommate, good friend, and I created an NFT Series called Lax Dolphin Lagoon. It has a smart contract on the Ethereum blockchain.",
    image: "https://netflix-site.s3.amazonaws.com/static/castle-image.jpg",
    type: "Frontend",
    blurbBullets: [
      "Designed and implemented the static landing webpage",
      "Wrote the async JavaScript code for the minting process",
    ],
    id: 1,
  },
  {
    title: "GB Paccers",
    dateRange: "5/22",
    techStack: ["Python"],
    blurb:
      "Final project for Artificial Intelligence: A team for Berkley's Pacman-Capture-The-Flag contest.",
    image: "https://netflix-site.s3.amazonaws.com/static/greenbay.jpeg",
    type: "Backend",
    blurbBullets: [
      "Includes code for an Offensive and Defensive agent",
      "Uses Q-Learning and Monte-Carlo Tree Search to make decisions",
      "Due to the rules of the game, it performs the best with two offensive agents",
    ],
    id: 2,
  },
  {
    title: "Lyric Generator",
    dateRange: "5/22",
    techStack: ["Python", "Tensorflow", "Keras"],
    blurb:
      "Final project for Natural Language Processing: A song lyric generator",
    image: "https://netflix-site.s3.amazonaws.com/static/song-lyrics.jpeg",
    type: "Backend",
    blurbBullets: [
      "Employs a Recurrent Neural Network and Long Short-term Memory",
      "Input a few lyrics to see the model build off of them into a new song",
    ],
    id: 3,
  },
  {
    title: "Bad Day",
    dateRange: "11/20",
    techStack: ["C#", "Unity"],
    blurb:
      "Play as the villains in this reverse-dungeon crawler and stop the heroes from stealing back your hard-earned treasure!",
    image: "https://netflix-site.s3.amazonaws.com/static/badDayTitle.png",
    type: "Backend",
    blurbBullets: [
      "Fight as the dungeon boss while moving around the map to buy smaller AI minions with 'hero bones'",
      "Custom art and music",
      "Available to play on PC",
    ],
    id: 4,
  },
  {
    title: "Webscrapers",
    dateRange: "12/20 + 5/22",
    techStack: ["Python", "Selenium", "HTML", "Javascript", "CSS"],
    blurb:
      "Tinder: Grabs Tinder profile data and hosts it on a website to be classified for a future project that will help people make better dating profiles.\nTwitter: Grabs Twitter tweet data to supplement a Machine-Learning final project.",
    image:
      "https://netflix-site.s3.amazonaws.com/static/tinder_and_twitter.webp",
    type: "Backend",
    blurbBullets: [
      "My first ever website",
      "Used a Python/Selenium script to scrape 20,000 Tinder profiles for data",
      "Static website built in HTML/Javascript/CSS",
    ],
    id: 5,
  },
  {
    title: "Easy Animator",
    dateRange: "11/20",
    techStack: ["Java", "Swing"],
    blurb:
      "A program that takes a list of shapes and instructions and produces an animation. It includes features such as speed control, looping, key-frame fast forward mode, new shape types, and more!",
    image: "https://netflix-site.s3.amazonaws.com/static/easyAnimator.png",
    type: "FullStack",
    blurbBullets: [
      "Can produce either Java Swing or SVG animations",
      "Features were added continuously throughout the development of the program in order to practice extensible design principles",
    ],
    id: 6,
  },
];

export const skills = [
  {
    title: "React.js",
    image: "https://netflix-site.s3.amazonaws.com/static/reactPic.png",
    type: "Frontend",
    dateRange: "5/21",
    blurb:
      "A free and open-source front-end JavaScript library for building user interfaces based on UI components",
    id: 1,
  },
  {
    title: "Java",
    image: "https://netflix-site.s3.amazonaws.com/static/java.png",
    type: "Backend",
    dateRange: "1/20",
    blurb:
      "A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible",
    id: 2,
  },
  {
    title: "Python",
    image: "https://netflix-site.s3.amazonaws.com/static/python.webp",
    type: "Backend",
    dateRange: "1/20",
    blurb:
      "A high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected.",
    id: 3,
  },
  {
    title: "Ruby On Rails",
    image: "https://netflix-site.s3.amazonaws.com/static/rubyonrails.png",
    type: "FullStack",
    dateRange: "5/21",
    blurb:
      "A server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.",
    id: 4,
  },
  {
    title: "TypeScript",
    image: "https://netflix-site.s3.amazonaws.com/static/typescript.png",
    type: "Frontend",
    dateRange: "5/21",
    blurb:
      "A programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
    id: 5,
  },
  {
    title: "Javascript",
    image: "https://netflix-site.s3.amazonaws.com/static/trio2.png",
    type: "Frontend",
    dateRange: "4/21",
    blurb:
      "A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
    id: 6,
  },
  {
    title: "MySQL",
    image: "https://netflix-site.s3.amazonaws.com/static/mysql.jpeg",
    type: "Query",
    dateRange: "1/21",
    blurb: "An open-source relational database management system.",
    id: 8,
  },
  {
    title: "AWS",
    image: "https://netflix-site.s3.amazonaws.com/static/aws.png",
    type: "Cloud",
    dateRange: "1/22",
    blurb:
      "Provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. These cloud computing web services provide distributed computing processing capacity and software tools via AWS server farms.",
    id: 9,
  },
  {
    title: "Selenium",
    image: "https://netflix-site.s3.amazonaws.com/static/selenium.webp",
    type: "Backend",
    dateRange: "12/20",
    blurb:
      "An open source umbrella project for a range of tools and libraries aimed at supporting browser automation.",
    id: 10,
  },
  {
    title: "GraphQL",
    image: "https://netflix-site.s3.amazonaws.com/static/graphql.png",
    type: "Backend",
    dateRange: "8/21",
    blurb:
      "An open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.",
    id: 11,
  },
  {
    title: "Next.js",
    image:
      "https://netflix-site.s3.amazonaws.com/static/800px-Nextjs-logo.svg.png",
    type: "Frontend",
    dateRange: "1/22",
    blurb:
      "An open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
    id: 12,
  },
  {
    title: "Redux",
    image: "https://netflix-site.s3.amazonaws.com/static/redux.png",
    type: "Frontend",
    dateRange: "5/21",
    blurb:
      "An open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
    id: 13,
  },
  {
    title: "MobX",
    image: "https://netflix-site.s3.amazonaws.com/static/mobxx.png",
    type: "Frontend",
    dateRange: "5/21",
    blurb:
      "MobX is unopinionated and allows you to manage your application state outside of any UI framework. This makes your code decoupled, portable, and above all, easily testable.",
    id: 14,
  },
  {
    title: "React Testing Library",
    image: "https://netflix-site.s3.amazonaws.com/static/rtl.jpeg",
    type: "Frontend",
    dateRange: "5/21",
    blurb:
      "The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is: The more your tests resemble the way your software is used, the more confidence they can give you.",
    id: 15,
  },
  {
    title: "Git",
    image: "https://netflix-site.s3.amazonaws.com/static/GitHub-logo.png",
    type: "FullStack",
    dateRange: "2/20",
    blurb:
      "A software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
    id: 16,
  },
  {
    title: "Bootstrap",
    image: "https://netflix-site.s3.amazonaws.com/static/bootstrap.png",
    type: "Frontend",
    dateRange: "5/21",
    blurb:
      "A free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    id: 17,
  },
  {
    title: "Tailwind CSS",
    image: "https://netflix-site.s3.amazonaws.com/static/tailwind.png",
    type: "Frontend",
    dateRange: "8/21",
    blurb:
      "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    id: 18,
  },
];

export const awards = [
  {
    title: "National Merit",
    image: "https://netflix-site.s3.amazonaws.com/static/nmsp.jpg",
    blurb:
      "The National Merit Scholarship Program is an academic competition for recognition and scholarships that began in 1955.",
    dateRange: "11/18",
    type: "Scholarship",
    blurbBullets: [
      "One of approximately 7,600 competitors selected from a pool of 1.5 million students",
      "Selection criteria includes PSAT scores and academic performance",
    ],
    id: 1,
  },
  {
    title: "Eagle Scout",
    image: "https://netflix-site.s3.amazonaws.com/static/eagle.png",
    blurb:
      "Eagle Scout is the highest achievement or rank attainable in the Scouts BSA program of the Boy Scouts of America.",
    type: "Certification",
    dateRange: "11/18",
    blurbBullets: [
      "Project involved soliciting businesses and residents to collect school supplies for 110 underprivileged elementary students for the whole year",
      "Since its inception in 1911, only four percent of Scouts have earned this rank after a lengthy review process",
    ],
    id: 2,
  },
  {
    title: "Udemy",
    image: "https://netflix-site.s3.amazonaws.com/static/udemy.jpeg",
    blurb:
      "A massive open online course provider aimed at professional adults and students.",
    type: "Certification",
    dateRange: "8/21",
    blurbBullets: [
      "The Complete JavaScript Course 2021",
      "The Complete Ruby on Rails Developer Course",
    ],
    id: 3,
  },
  {
    title: "LI Skill Badges",
    image: "https://netflix-site.s3.amazonaws.com/static/linkedin.png",
    blurb:
      "The LinkedIn Skill Assessments feature allows you to demonstrate your knowledge of the skills you've added on your profile by completing assessments specific to those skills.",
    type: "Certification",
    dateRange: "11/20 - 5/21",
    blurbBullets: [
      "Proud owner of 21 LinkedIn CS-related skill badges and counting",
      "Must score in the top 30% of test takers to recieve a badge",
    ],
    id: 4,
  },
  {
    title: "CodeCademy",
    image: "https://netflix-site.s3.amazonaws.com/static/code_cademy.png",
    blurb:
      "An American online interactive platform that offers free coding classes in 12 different programming languages",
    type: "Certification",
    dateRange: "5/21",
    blurbBullets: [
      "Learn HTML Course",
      "Learn Intermediate CSS Course",
      "Learn Ruby Course",
      "Learn Bootstrap Course",
    ],
    id: 5,
  },
  {
    title: "Keep Doing Great Things",
    image:
      "https://netflix-site.s3.amazonaws.com/static/keepdoinggreatthings.png",
    blurb:
      "The Foundation’s mission is to encourage Glen Ellyn community volunteerism and extend Jim Rasins’ legacy of doing great things for the community",
    type: "Scholarship",
    dateRange: "5/19",
    blurbBullets: [
      "Glenbard West's 2019 Winner",
      "Earned from volunteer work through Boy Scouts and the Morton Arboretum",
    ],
    id: 6,
  },
];
