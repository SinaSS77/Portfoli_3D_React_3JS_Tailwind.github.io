import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sql,
  PhotoShop,
  postgreSQL,
  github,
  ruby,
  jest,
  sass,
  star,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgreSQL,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "PhotoShop",
    icon: PhotoShop,
  },
];

const experiences = [
  {
    title: "Full-Stack web Developer",
    company_name: "Lighthouse Labs",
    icon: star,
    iconBg: "#383E56",
    date: "Jan 2023 - Apr 2023",
    points: [
      "An intense web development bootcamp program (16 weeks) that I attended full-time, where I gained over 1300 hours of valuable hands-on experience working with various tech stacks.",
      "During this program, I learned to think as a developer and write full-stack applications with libraries such as React, Databases in PSQL and servers with NodeJs and much more.",
      "My time at Lighthouse was difficult and challenging but well worth the effort.",
      "This not only taught me resilience but solidified my confidence in myself being a well-trained Web Developer.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Padir Gostar",
    icon: star,
    iconBg: "#E6DEDD",
    date: "Feb 2020 - Aug 2022",
    points: [
      "Used Figma and Photoshop for design and presentation to ensure clients' demands and requests.",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Coordinated with other web designers to manage projects using HTML, CSS, SASS and JavaScript.",
      "Created responsive, reusable and dynamic form components to make the user onboarding form.",
    ],
  },
  {
    title: "Computer Programming Instructor",
    company_name: "Karaj Azad University",
    icon: star,
    iconBg: "#383E56",
    date: "Sep 2019 - May 2021",
    points: [
      "Taught HTML and CSS coding language.",
      "Used lectures, demonstrations and discussions to instruct students individually and in small groups.",
      "Attended professional development technology courses to increase my knowledge base and learn new information.",
    ],
  },
  ];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
