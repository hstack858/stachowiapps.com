export type Card = {
  company?: string;
  location?: string;
  dateRange: string;
  title: string;
  techStack?: string[];
  type: string;
  blurb?: string;
  image: string;
};

export const experiences = [
  {
    company: "Beat The Book Inc.",
    location: "Boston, MA",
    dateRange: "5/21 - Present",
    title: "Frontend Lead",
    techStack: ["React w/TypeScript + Next.js"],
    blurb: "Web hosted software that facilitates virtual betting games.",
    image: "https://netflix-site.s3.amazonaws.com/static/btb.jpg",
    type: "Frontend",
  },
  {
    company: "MyCase",
    location: "San Diego, CA",
    dateRange: "5/21 - 1/22",
    title: "SE Co-op",
    techStack: ["Ruby On Rails", "React w/TypeScript", "MySQL"],
    blurb: "MyCase is a SAAS case management platform designed for lawyers",
    image: "https://netflix-site.s3.amazonaws.com/static/mycase.png",
    type: "FullStack",
  },
  {
    company: "PayPal",
    location: "San Jose, CA",
    dateRange: "6/22 - 9/22",
    title: "SE Intern",
    techStack: ["Java"],
    blurb:
      "PayPal is an online payment system that makes paying for things online and sending and receiving money safe and secure.",
    image: "https://netflix-site.s3.amazonaws.com/static/paypal.png",
    type: "Backend",
  },
  {
    company: "Generate",
    location: "Boston, MA",
    dateRange: "8/21 - 12/21",
    title: "Software Engineer",
    techStack: ["React.js", "MongoDB", "GraphQL"],
    blurb:
      "Student-led project teams in the build studio collaborate to bring a real world client's vision to life.",
    image: "https://netflix-site.s3.amazonaws.com/static/generate.jpg",
    type: "FullStack",
  },
];

export const projects = [
  {
    title: "Lax Dolphins",
    dateRange: "9/21",
    techStack: ["React w/TypeScript"],
    blurb:
      "My roommate, good friend, and I created an NFT Series called Lax Dolphin Lagoon. It has a smart contract on the Ethereum blockchain.",
    image: "https://netflix-site.s3.amazonaws.com/static/castle-image.jpg",
    type: "Frontend",
  },
  {
    title: "GB Paccers",
    dateRange: "5/22",
    techStack: ["Python"],
    blurb:
      "Final project for Artificial Intelligence: A team for Berkley's Pacman-Capture-The-Flag contest.",
    image: "https://netflix-site.s3.amazonaws.com/static/greenbay.jpeg",
    type: "Backend",
  },
  {
    title: "Lyric Generator",
    dateRange: "5/22",
    techStack: ["Python", "Tensorflow", "Keras"],
    blurb:
      "Final project for Natural Language Processing: A lyric generator using a Recurrent Neural Network and Long Short-term Memory",
    image: "https://netflix-site.s3.amazonaws.com/static/song-lyrics.jpeg",
    type: "Backend",
  },
  {
    title: "A Bad Day To Be A Hero",
    dateRange: "11/20",
    techStack: ["C#", "Unity"],
    blurb:
      "Play as the villains in this reverse-dungeon crawler and stop the heroes from stealing back your hard-earned treasure! Worked together with other Game Dev students to include custom art and music.",
    image: "https://netflix-site.s3.amazonaws.com/static/badDayTitle.png",
    type: "Backend",
  },
  {
    title: "Webscrapers",
    dateRange: "12/20 + 5/22",
    techStack: ["Python", "HTML", "Javascript", "CSS"],
    blurb:
      "Tinder: Grabs Tinder profile data and hosts it on a website to be classified for a future project that will help people make better dating profiles.\nTwitter: Grabs Twitter tweet data to supplement a Machine-Learning final project.",
    image:
      "https://netflix-site.s3.amazonaws.com/static/tinder_and_twitter.webp",
    type: "Backend",
  },
  {
    title: "Easy Animator",
    dateRange: "11/20",
    techStack: ["Java", "Swing"],
    blurb:
      "A program that takes a list of shapes and instructions and produces an animation. It includes features such as speed control, looping, key-frame fast forward mode, new shape types, and more!",
    image: "https://netflix-site.s3.amazonaws.com/static/easyAnimator.png",
    type: "FullStack",
  },
];

export const skills = [
  {
    title: "React.js",
    image: "https://netflix-site.s3.amazonaws.com/static/reactPic.png",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "Java",
    image: "https://netflix-site.s3.amazonaws.com/static/java.png",
    type: "Backend",
    dateRange: "1/20",
  },
  {
    title: "Python",
    image: "https://netflix-site.s3.amazonaws.com/static/python.webp",
    type: "Backend",
    dateRange: "1/20",
  },
  {
    title: "Ruby On Rails",
    image: "https://netflix-site.s3.amazonaws.com/static/rubyonrails.png",
    type: "FullStack",
    dateRange: "5/21",
  },
  {
    title: "Javascript",
    image: "https://netflix-site.s3.amazonaws.com/static/javascript.png",
    type: "Frontend",
    dateRange: "4/21",
  },
  {
    title: "CSS",
    image: "https://netflix-site.s3.amazonaws.com/static/css.jpeg",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "TypeScript",
    image: "https://netflix-site.s3.amazonaws.com/static/typescript.png",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "MySQL",
    image: "https://netflix-site.s3.amazonaws.com/static/mysql.jpeg",
    type: "Query",
    dateRange: "1/21",
  },
  {
    title: "AWS",
    image: "https://netflix-site.s3.amazonaws.com/static/aws.png",
    type: "Cloud",
    dateRange: "1/22",
  },
  {
    title: "Selenium",
    image: "https://netflix-site.s3.amazonaws.com/static/selenium.webp",
    type: "Backend",
    dateRange: "12/20",
  },
  {
    title: "GraphQL",
    image: "https://netflix-site.s3.amazonaws.com/static/graphql.png",
    type: "Backend",
    dateRange: "8/21",
  },
  {
    title: "Redux",
    image: "https://netflix-site.s3.amazonaws.com/static/redux.png",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "MobX",
    image: "https://netflix-site.s3.amazonaws.com/static/mobx.png",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "React Testing Library",
    image:
      "https://netflix-site.s3.amazonaws.com/static/react-testing-library.webp",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "Git",
    image: "https://netflix-site.s3.amazonaws.com/static/git.png",
    type: "FullStack",
    dateRange: "2/20",
  },
  {
    title: "Next.js",
    image: "https://netflix-site.s3.amazonaws.com/static/nextjs.png",
    type: "Frontend",
    dateRange: "1/22",
  },
  {
    title: "Bootstrap",
    image: "https://netflix-site.s3.amazonaws.com/static/bootstrap.png",
    type: "Frontend",
    dateRange: "5/21",
  },
  {
    title: "Tailwind CSS",
    image: "https://netflix-site.s3.amazonaws.com/static/tailwind.png",
    type: "Frontend",
    dateRange: "8/21",
  },
];

export const awards = [
  {
    title: "National Merit",
    image: "https://netflix-site.s3.amazonaws.com/static/nmsp.jpg",
    blurb:
      "One of approcimately 7,600 competitors selected from a pool of 1.5 million students",
    dateRange: "11/18",
    type: "Scholarship",
  },
  {
    title: "Eagle Scout",
    image: "https://netflix-site.s3.amazonaws.com/static/eagle.png",
    blurb:
      "Project involved soliciting businesses and residents to collect school supplies for 110 underprivileged elementary students for the whole year",
    type: "Certification",
    dateRange: "11/18",
  },
  {
    title: "Udemy",
    image: "https://netflix-site.s3.amazonaws.com/static/udemy.jpeg",
    blurb:
      "The Complete JavaScript Course 2021 + The Complete Ruby on Rails Developer Course",
    type: "Certification",
    dateRange: "8/21",
  },
  {
    title: "LI Skill Badges",
    image: "https://netflix-site.s3.amazonaws.com/static/linkedin.png",
    blurb: "Proud owner of 21 LinkedIn coding skill badges and counting!",
    type: "Certification",
    dateRange: "11/20 - 5/21",
  },
  {
    title: "CodeCademy",
    image: "https://netflix-site.s3.amazonaws.com/static/code_cademy.png",
    blurb:
      "Learn HTML Course + Learn Intermediate CSS Course + Learn Ruby Course + Learn Bootstrap Course",
    type: "Certification",
    dateRange: "5/21",
  },
  {
    title: "KDGT",
    image:
      "https://netflix-site.s3.amazonaws.com/static/keepdoinggreatthings.png",
    blurb:
      "The Foundation’s mission is to encourage Glen Ellyn community volunteerism and extend Jim Rasins’ legacy of doing great things for the community",
    type: "Scholarship",
    dateRange: "5/19",
  },
];
