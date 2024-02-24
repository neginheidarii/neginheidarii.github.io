import tictactoe from "./assets/tictactoe.jpeg";
import weatherapp from "./assets/weatherapp.png";
import Project3 from "./assets/project3.jpeg";
import Project4 from "./assets/project4.jpeg";
import Project5 from "./assets/project5.jpg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "work",
  },
  {
    name: "Resume",
    path: "resume",
  },

  // {
  //   name: "Pricing",
  //   path: "pricing",
  // },
  // {
  //   name: "Blog",
  //   path: "blog",
  // },
  {
    name: "Contact",
    path: "contact",
  },
];

export const skills = [
  {
    id: 1,
    name: "JavaScript",
    percentage: 85,
    description:
      "Proficient in JavaScript, I navigate the language's dynamic landscape with ease. Whether crafting interactive web interfaces or developing server-side applications, my expertise in JavaScript allows me to create efficient and engaging solutions.",
  },

  {
    id: 2,
    name: "React JS",
    percentage: 75,
    description:
      "I excel in React development with a deep understanding of its intricacies and a proven track record of building dynamic and responsive user interfaces.",
  },
  {
    id: 3,
    name: "Node JS",
    percentage: 70,
    description:
      "I command a robust skill set in Node.js, leveraging its powerful capabilities to develop scalable and efficient server-side applications. My experience extends to crafting high-performance, event-driven solutions that harness the full potential of Node.js for optimal results.",
  },
  {
    id: 4,
    name: "React Native",
    percentage: 70,
    description:
      "Experienced in React Native, I create cross-platform mobile apps that deliver seamless and high-performance user experiences.",
  },
  {
    id: 5,
    name: "HTML & CSS & Bootstrap & Tailwind CSS",
    percentage: 95,
    description:
      "I have a strong command of HTML and CSS, using them to structure and style web content. Additionally, I'm proficient in Bootstrap and Tailwind CSS, harnessing these frameworks to enhance the design and responsiveness of web applications.",
  },
  {
    id: 6,
    name: "Python",
    percentage: 80,
    description:
      "Specialized in Python for data science, I leverage its versatile capabilities to analyze and derive insights from complex datasets. My expertise extends to employing powerful libraries and frameworks, making data-driven decisions a seamless process.",
  },
];

export const projects = [
  {
    id: 1,
    img: tictactoe,
    category: "Web App",
    title: "Tic Tac Toe Game",
    description:
      "This Java-based Tic Tac Toe game utilizes JavaFX for the graphical user interface and features an AI opponent powered by the MinMax algorithm. The game provides three modes of play, allowing users to play against another human, against the AI, or watch the AI play against itself.",
    url: "https://www.javascript.com/",
  },
  {
    id: 2,
    img: weatherapp,
    category: "Web App",
    title: "Weather App",
    description:
      "The Weather App with React is an intuitive web application offering instant weather updates for global cities. Built with React, it boasts a clean, responsive design for effortless city searches, real-time weather checks, and a 5-day forecast. The app's visual interface ensures a seamless experience on various devices, while its integration with a weather API provides a simple and effective means for users to stay informed, enabling confident activity planning.",
    url: "https://www.javascript.com/",
  },
  {
    id: 3,
    img: Project3,
    category: "Development",
    title: "Explore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    id: 4,
    img: Project4,
    category: "UI UX Design",
    title: "Mozar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "https://www.javascript.com/",
  },
  {
    id: 5,
    img: Project5,
    category: "Data Science",
    title: "Stay Fit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    url: "https://www.javascript.com/",
  },
];

export const cv = [
  {
    id: 1,
    title: "CoderHouse Courses",
    subtitle: "Backend Programming",
    date: "2014 - 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 2,
    title: "Lviv National Academy of Arts",
    subtitle: "Faculty of Design",
    date: "2012 - 2014",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 3,
    title: "IT Future",
    subtitle: "High School",
    date: "2010 - 2012",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "education",
  },

  {
    id: 4,
    title: "UI Head & Manager",
    subtitle: "Soft Tech Inc.",
    date: "2020 - PRESENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 5,
    title: "UI / UX Specialist",
    subtitle: "Kana Design Studio",
    date: "2018 - 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },

  {
    id: 6,
    title: "Plugins Developer",
    subtitle: "Fiverr.com",
    date: "2016 - 2018",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "experience",
  },
];
