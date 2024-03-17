import tictactoe from "./assets/tictactoe.jpeg";
import weatherapp from "./assets/weatherapp.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project5 from "./assets/project5.png";
import Project6 from "./assets/employee.png";

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
  {
    name: "Career Goals",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const skills = [
  {
    id: 1,
    name: "MERN Stack",
    description:
      "I have a good grasp of MERN stack development, using MongoDB, Express.js, React, and Node.js to build strong and scalable web applications. Through hands-on experience in different projects, I've improved my technical skills and developed a keen interest in full-stack applications.",
  },

  {
    id: 2,
    name: "Languages",
    description:
      "I excel in React development with a deep understanding of its intricacies and a proven track record of building dynamic and responsive user interfaces.",
  },
  {
    id: 3,
    name: "Node JS",
    description:
      "I command a robust skill set in Node.js, leveraging its powerful capabilities to develop scalable and efficient server-side applications. My experience extends to crafting high-performance, event-driven solutions that harness the full potential of Node.js for optimal results.",
  },
  {
    id: 4,
    name: "React Native",
    description:
      "Experienced in React Native, I create cross-platform mobile apps that deliver seamless and high-performance user experiences.",
  },
  {
    id: 5,
    name: "HTML & CSS & Bootstrap & Tailwind CSS",
    // percentage: 95,
    description:
      "I have a strong command of HTML and CSS, using them to structure and style web content. Additionally, I'm proficient in Bootstrap and Tailwind CSS, harnessing these frameworks to enhance the design and responsiveness of web applications.",
  },
  {
    id: 6,
    name: "Python",
    // percentage: 80,
    description:
      "Specialized in Python for data science, I leverage its versatile capabilities to analyze and derive insights from complex datasets. My expertise extends to employing powerful libraries and frameworks, making data-driven decisions a seamless process.",
  },
];

export const projects = [
  {
    id: 2,
    img: Project2,
    category: "Mobile App",
    title: "IPark Mobile Application",
    description:
      "Contributed to a dynamic team in developing a full-stack Parking Reservation Mobile App, actively participating in conceptualization and implementation of an innovative parking reservation system. Engineered a comprehensive solution, seamlessly integrating a mobile app using React Native, Stripe, and Firebase technologies. This highlights my commitment to creating user-friendly applications with a strong emphasis on innovation and functionality.",
    url: "https://gitlab.com/mohammadtalaie321/ipark_mobile_application",
  },
  {
    id: 3,
    img: Project3,
    category: "Web App",
    title: "IPark Web App",
    description:
      "Contributed to a collaborative effort developing a full-stack Parking Reservation Web App, actively involved in conceptualization and implementation of an inventive parking reservation system. Orchestrated a comprehensive solution, seamlessly integrating a web app using React and Firebase technologies, highlighting my commitment to user-friendly applications with a strong emphasis on innovation and functionality.",
    url: "https://github.com/neginheidarii/DevOpshttps://gitlab.com/neginheidari/ipark_web_application",
  },
  {
    id: 4,
    img: tictactoe,
    category: "Web App",
    title: "Tic Tac Toe Game",
    description:
      "This Java-based Tic Tac Toe game boasts a user-friendly interface powered by JavaFX. Its AI opponent, utilizing the MinMax algorithm, offers challenging gameplay. With three modes to choose from, players can compete against another human, challenge the AI, or watch AI-versus-AI matches. It promises hours of fun for players of all skill levels.",
    url: "https://github.com/neginheidarii/Tic-Tac-Toe-Game",
  },
  {
    id: 5,
    img: Project5,
    category: "Web App",
    title: "Video Games Web App",
    description:
      "The Weather App with React is an intuitive web application offering instant weather updates for global cities. Built with React, it boasts a clean, responsive design for effortless city searches, real-time weather checks, and a 5-day forecast. The app's visual interface ensures a seamless experience on various devices, while its integration with a weather API provides a simple and effective means for users to stay informed, enabling confident activity planning.",
    url: "https://github.com/neginheidarii/game-hub",
  },
  {
    id: 6,
    img: weatherapp,
    category: "Web App",
    title: "Weather App",
    description:
      "The Weather App with React is an intuitive web application offering instant weather updates for global cities. Built with React, it boasts a clean, responsive design for effortless city searches, real-time weather checks, and a 5-day forecast. The app's visual interface ensures a seamless experience on various devices, while its integration with a weather API provides a simple and effective means for users to stay informed, enabling confident activity planning.",
    url: "https://github.com/neginheidarii/Weather-App-React",
  },
  {
    id: 1,
    img: Project6,
    category: "Web App",
    title: "Employee Management System",
    description:
      "Crafted with precision and expertise, I developed a sophisticated Employee Management web application from the ground up, seamlessly integrating the power of React and Node.js. This innovative solution boasts a polished and professional interface, designed to optimize the handling of employee data with unparalleled efficiency and accuracy.",
    url: "https://github.com/neginheidarii/Employee-Management-React",
  },
];

export const cv = [
  {
    id: 1,
    title: "Project Summary",
    subtitle: "George Brown College",
    date: "2023 - 2024",
    description:
      "IPark is reshaping the parking sector with a smart management system designed to increase profits for space owners. The system simplifies bookings and automates payments, significantly enhancing operational efficiency. Key analytics offer actionable insights, optimizing lot utilization and strategy. Integrated marketing tools help to effectively fill spaces, and top-tier security protocols ensure safe transactions. With IPark, parking lot owners gain a user-friendly, revenue-boosting solution that delivers convenience and reliability.",
    category: "Capstone Project",
  },

  {
    id: 2,
    title: "Project Vision",
    subtitle: "",
    date: "",
    description:
      "Our project vision for IPark is to revolutionize the parking experience with seamless convenience and efficiency. Through our 24-hour advanced reservation system, drivers can secure parking spaces up to a day in advance, ensuring peace of mind and eliminating last-minute stress. Our application also offers a user-friendly payment method, allowing for hassle-free transactions directly through the platform, eliminating the need for cash payments or paper-based tickets. With flexible reservation management capabilities, users have the freedom to modify or cancel bookings up to 5 hours prior to their scheduled time, enhancing convenience and flexibility. Additionally, our application-based check-in and check-out system streamline the parking process, reducing costs associated with traditional hardware systems and providing a more efficient and secure experience for all users.",
    category: "Capstone Project",
  },

  {
    id: 3,
    title: "Technology Stack",
    subtitle: "",
    date: "",
    description:
      "After careful consideration, we've chosen the best tools for our projects. For the mobile app, we're using React Native for the look and feel, Firebase and Firestore for the backend and storing data, and Stripe for payments. For the web app, we're using React and Next.js for the front end. These choices ensure a smooth user experience and efficient functionality across all platforms.",
    category: "Capstone Project",
  },

  {
    id: 5,
    title: "Wireframe",
    subtitle: "",
    date: "",
    description:
      "Experience the full user interface of our mobile app by simply clicking on the following link: Mobile App UI: (https://app.uizard.io/p/058d3351). For a glimpse of our web app's interface, click here: Web App UI: (https://app.uizard.io/p/e2b54d81). These links will provide you with a visual tour of our intuitive and user-friendly designs, showcasing the seamless experience we've crafted for our users.",
    category: "Capstone Project",
  },

  {
    id: 6,
    title: "Winner of Design Jam 2024 - OPG ",
    subtitle: "hosted by Ontario Power Generation and GBC",
    date: "March 2024",
    description:
      "At the Design Jam competition 2024, hosted by Ontario Power Generation and George Brown College, our team demonstrated remarkable teamwork, collaboration, and problem-solving skills. Leveraging a diverse range of tools and technologies, we created polished user experiences across various platforms, developing feature-rich mobile and web applications that captivated users. Our journey was defined by creativity, resilience, and a shared commitment to excellence, leaving a lasting impression on the competition and highlighting the power of collective effort.",
    category: "experience",
  },

  {
    id: 7,
    title: "IEEE Competition 2023",
    subtitle: "IEEE",
    date: "October 2023",
    description:
      "Immersed in the exhilarating challenge of IEEEXtreme 2023, the renowned International Competitive Programming Competition, our team soared to remarkable heights, securing a place in the esteemed top 15% globally. It was a testament to our dedication, passion, and relentless pursuit of excellence in the dynamic realm of competitive programming. This achievement stands as a proud milestone, showcasing our collective skill, resilience, and unwavering commitment to pushing the boundaries of innovation on a global stage.",
    category: "experience",
  },

  // {
  //   id: 8,
  //   title: "IEEE Competition 2022",
  //   subtitle: "IEEE",
  //   date: "October 2022",
  //   description:
  //     "Engaging in the prestigious IEEEXtreme 2022, the International Competitive Programming Competition, our team achieved a commendable feat, securing a position in the esteemed top 33% globally. This accomplishment speaks volumes about our dedication, perseverance, and proficiency in the realm of competitive programming. It stands as a testament to our collaborative spirit and relentless pursuit of excellence, leaving an indelible mark on the global stage of innovation and problem-solving.",
  //   category: "experience",
  // },

  {
    id: 9,
    title: "Dean's List Distinction",
    subtitle: "George Brown College",
    date: "2022-2024",
    description:
      "Consistently striving for excellence, I have been honored with Dean's List recognition throughout my academic journey, a testament to my steadfast commitment to academic pursuits. Maintaining a perfect GPA of 4.0 for semesters 1, 2, 3, 5, and 6, with a remarkable 3.96 in semester 4, my academic record reflects not only diligence but also a genuine passion for learning. Beyond the classroom, I have actively engaged in various extracurricular activities, further enriching my holistic educational experience. This outstanding academic performance, coupled with my involvement in diverse activities, underscores my dedication to personal and intellectual growth.",
    category: "experience",
  },
  {
    id: 9,
    title: "Leadership Engagement and Volunteering",
    subtitle: "Leadership Association",
    date: "2022-2024",
    description:
      "Enthusiastically contributed to the growth and development of George Brown's Leadership Association. With a passionate commitment to nurturing future leaders, I actively promoted leadership development initiatives, encouraging fellow students to embrace their potential and cultivate invaluable skills. In addition, I seized opportunities to give back to the community by volunteering for various roles, such as conducting campus tours for first-year students. Through these experiences, I not only honed my own leadership abilities but also had the privilege of inspiring others to embark on their own journeys of growth and empowerment.",
    category: "experience",
  },
];
