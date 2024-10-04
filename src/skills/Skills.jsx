import "./Skills.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faSquareJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faGitAlt,
  faGithub,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import "devicon/devicon.min.css";
import {
  faCircleChevronUp,
  faDatabase,
  faRobot,
  faUserShield,
  faWandMagic,
} from "@fortawesome/free-solid-svg-icons";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
const Skills = () => {
  const iconsFront = [
    {
      icon: null,
      icon_class: "devicon-nextjs-plain",
      name: "Next.js",
      info: "Next.js is a React framework that enables functionality such as server-side rendering and static site generation.",
      color: "#000",
      percent: 90,
    },
    {
      icon: faReact,
      name: "React",
      info: "React is a JavaScript library for building user interfaces, especially single-page applications.",
      color: "#61dbfb",
      percent: 95,
    },
    {
      icon: faReact,
      name: "React Query",
      info: "React Query is a data-fetching library that simplifies fetching, caching, and updating server state in React apps.",
      color: "#ff4154",
      percent: 85,
    },
    {
      icon: null,
      icon_class: "devicon-redux-original",
      name: "Redux Toolkit",
      info: "Redux Toolkit is a toolset for efficient Redux development, simplifying state management in React apps.",
      color: "#7549b9",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-redux-original",
      name: "Redux Saga",
      info: "Redux Saga is a middleware library that helps in handling complex asynchronous tasks in React-Redux applications.",
      color: "#89d96d",
      percent: 75,
    },
    {
      icon: faReact,
      name: "React-Native",
      info: "React Native is a framework for building native apps using React, allowing for cross-platform mobile development.",
      color: "#6dacd9",
      percent: 85,
    },
    {
      icon: faJs,
      name: "Javascript",
      info: "JavaScript is a versatile programming language that enables dynamic content and interactivity on web pages.",
      color: "yellow",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-typescript-plain",
      name: "TypeScript",
      info: "TypeScript is a superset of JavaScript that adds static typing, improving code quality and reducing errors.",
      color: "#007acc",
      percent: 85,
    },
    {
      icon: faHtml5,
      name: "HTML",
      info: "HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
      color: "#ff5325",
      percent: 98,
    },
    {
      icon: faCss3Alt,
      name: "CSS",
      info: "CSS (Cascading Style Sheets) is used to style and layout web pages, including design, colors, and fonts.",
      color: "#264ee4",
      percent: 90,
    },
    {
      icon: faSass,
      name: "SASS",
      info: "SASS (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS.",
      color: "#cd669a",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-tailwindcss-original",
      name: "Tailwind CSS",
      info: "Tailwind CSS is a utility-first CSS framework for quickly building custom designs without leaving HTML.",
      color: "#38bdf8",
      percent: 85,
    },
    {
      icon: faWandMagic,
      name: "Shadcnui",
      info: "Shadcnui is a modern, customizable UI component library for React applications.",
      color: "#5a547c",
      percent: 70,
    },
    {
      icon: faBootstrap,
      name: "Bootstrap",
      info: "Bootstrap is a popular CSS framework for building responsive, mobile-first websites.",
      color: "#7111f5",
      percent: 85,
    },
    {
      icon: null,
      icon_class: "devicon-framermotion-original",
      name: "Framer Motion",
      info: "Framer Motion is a library for React that makes it easy to create animations and transitions.",
      color: "#e630be",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-materialui-plain",
      name: "Material UI",
      info: "Material UI is a popular React UI framework that implements Google's Material Design guidelines.",
      color: "#007fff",
      percent: 75,
    },
    {
      icon: null,
      icon_class: "devicon-stylus-original",
      name: "Style Component",
      info: "Styled-components is a library for React and React Native that allows you to use component-level styles in your application.",
      color: "#bf4f74",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-firebase-plain",
      name: "Firebase",
      info: "Firebase is a platform developed by Google for building mobile and web applications, offering services like authentication, real-time databases, and more.",
      color: "#ffcc31",
      percent: 75,
    },
    {
      icon: faGitAlt,
      name: "Git",
      info: "Git is a distributed version control system for tracking changes in source code during software development.",
      color: "#f34f29",
      percent: 90,
    },
    {
      icon: faGithub,
      name: "GitHub",
      info: "GitHub is a web-based platform for version control using Git, providing repositories to host code and collaborate with others.",
      color: "#171515",
      percent: 90,
    },
  ];

  const iconsBack = [
    {
      icon: null,
      icon_class: "devicon-python-plain",
      name: "Python",
      info: "Python is a high-level, versatile programming language known for its readability and wide range of applications.",
      color: "#d5f43d",
      percent: 90,
    },
    {
      icon: null,
      icon_class: "devicon-mysql-plain-wordmark",
      name: "MySQL",
      info: "MySQL is an open-source relational database management system.",
      color: "#5a547c",
      percent: 85,
    },
    {
      icon: faNodeJs,
      name: "Node.js",
      info: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine for server-side programming.",
      color: "#8cc03e",
      percent: 88,
    },
    {
      icon: null,
      icon_class: "devicon-express-original",
      name: "Express.js",
      info: "Express.js is a web application framework for Node.js designed for building web applications and APIs.",
      color: "#828282",
      percent: 85,
    },
    {
      icon: null,
      icon_class: "devicon-nestjs-original",
      name: "NestJS",
      info: "NestJS is a framework for building efficient, scalable Node.js server-side applications.",
      color: "#e0234e",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-mongodb-plain",
      name: "MongoDB",
      info: "MongoDB is a NoSQL database known for its flexibility in handling unstructured data.",
      color: "#4faa41",
      percent: 87,
    },
    {
      icon: null,
      icon_class: "devicon-postgresql-plain",
      name: "PostgreSQL",
      info: "PostgreSQL is a powerful, open-source object-relational database system.",
      color: "#336791",
      percent: 83,
    },
    {
      icon: null,
      icon_class: "devicon-tensorflow-original",
      name: "TensoFlow.js",
      info: "TensorFlow.js is a JavaScript library for training and deploying machine learning models in the browser and on Node.js.",
      color: "#ed900c",
      percent: 70,
    },
    {
      icon: faRobot,
      name: "AI",
      info: "AI (Artificial Intelligence) involves the development of systems that can perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.",
      color: "#5a547c",
      percent: 70,
    },
    {
      icon: faCircleChevronUp,
      name: "Expo",
      info: "Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
      color: "#5a547c",
      percent: 80,
    },
    {
      icon: faDatabase,
      name: "Convex",
      info: "Convex is a backend-as-a-service platform designed to simplify building full-stack applications by handling the database, storage, and real-time updates.",
      color: "#5a547c",
      percent: 70,
    },
    {
      icon: null,
      icon_class: "devicon-prisma-original",
      name: "Prisma",
      info: "Prisma is a next-generation ORM that helps in building GraphQL and RESTful APIs, working with databases in a type-safe way.",
      color: "#0c344b",
      percent: 82,
    },
    {
      icon: null,
      icon_class: "devicon-axios-plain",
      name: "Axios",
      info: "Axios is a promise-based HTTP client for making HTTP requests in both the browser and Node.js.",
      color: "#5a24e5",
      percent: 85,
    },
    {
      icon: null,
      icon_class: "devicon-php-plain",
      name: "PHP",
      info: "PHP (Hypertext Preprocessor) is a widely-used, open-source scripting language designed for web development. It is embedded within HTML and primarily used to develop dynamic and interactive websites. PHP code is executed on the server, generating HTML that is sent to the client's browser. It is popular for creating web applications, especially when paired with databases like MySQL. PHP is known for its simplicity, flexibility, and large community support.",
      color: "#5a547c",
      percent: 85,
    },
    {
      icon: null,
      icon_class: "devicon-vercel-original",
      name: "Vercel",
      info: "Vercel is a platform for frontend frameworks and static sites, providing fast global deployment.",
      color: "#000",
      percent: 80,
    },
    {
      icon: null,
      icon_class: "devicon-docker-plain",
      name: "Docker",
      info: "Docker is a platform designed to help developers build, ship, and run applications inside containers.",
      color: "#1d97ee",
      percent: 75,
    },
    {
      icon: faUserShield,
      name: "JWT",
      info: "JWT (JSON Web Token) is a compact, URL-safe means of representing claims to be transferred between two parties.",
      color: "#fb015b",
      percent: 82,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const modalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);
  const [isHoveredBack, setIsHoveredBack] = useState(null);
  const [isHoveredModal, setIsHoveredModal] = useState(null);
  const [isHoveredModal2, setIsHoveredModal2] = useState(null);

  const openModal = (icon) => {
    setSelectedImage(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage({});
  };

  const style = (index) => ({
    color: isHovered === index ? iconsFront[index].color : "white",
    transition: "color 0.3s ease",
  });
  const styleBack = (index) => ({
    color: isHoveredBack === index ? iconsBack[index].color : "white",
    transition: "color 0.3s ease",
  });
  const styleIcon_Modal_1 = (index) => ({
    color: isHoveredModal === index ? index : "white",
    transition: "color 0.3s ease",
  });
  const styleIcon_Modal_2 = (index) => ({
    color: isHoveredModal2 === index ? index : "white",
    transition: "color 0.3s ease",
  });

  useEffect(() => {
    function handleEscKey(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  const IconImg = ({ className }) => {
    const iconName = className;
    return (
      <i
        style={{
          fontSize: "48px",
          lineHeight: "48px",
          textAlign: "center",
          display: "inline-block",
          color: "currentColor",
        }}
        className={iconName}
      ></i>
    );
  };

  return (
    <div className="skills_global">
      <div className="frontend_skills">
        <h3 className="title_name">Frontend skills</h3>
        <div className="icon-list">
          {iconsFront.map((icon, index) => (
            <div
              className="icon_item"
              key={index}
              style={style(index)}
              onClick={() => openModal(icon)}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {icon.icon !== null ? (
                <FontAwesomeIcon
                  icon={icon.icon}
                  style={{ width: "48px", height: "48px" }}
                  className="icon_img"
                />
              ) : (
                <IconImg className={`icon_img ${icon.icon_class}`} />
              )}
              <span className="icon_text">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="backend_skills">
        <h3 className="title_name">BackEnd skills</h3>

        <div className="icon-list">
          {iconsBack.map((icon, index) => (
            <div
              className="icon_item"
              key={index}
              style={styleBack(index)}
              onClick={() => openModal(icon)}
              onMouseEnter={() => setIsHoveredBack(index)}
              onMouseLeave={() => setIsHoveredBack(null)}
            >
              {icon.icon !== null ? (
                <FontAwesomeIcon
                  icon={icon.icon}
                  style={{ width: "48px", height: "48px" }}
                  className="icon_img"
                />
              ) : (
                <IconImg className={`icon_img ${icon.icon_class}`} />
              )}
              <span className="icon_text">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {selectedImage.icon !== null ? (
              <FontAwesomeIcon
                icon={selectedImage.icon}
                className="modal-image"
                style={styleIcon_Modal_1(selectedImage.color)}
                onMouseEnter={() => setIsHoveredModal(selectedImage.color)}
                onMouseLeave={() => setIsHoveredModal(null)}
              />
            ) : (
              <IconImg
                className={`icon_img modal_icon ${selectedImage.icon_class}`}
                // style={styleIcon_Modal_2(selectedImage.color)}
                // onMouseEnter={() => setIsHoveredModal2(selectedImage.color)}
                // onMouseLeave={() => setIsHoveredModal2(null)}
              />
            )}
            <h2 className="modal_title">{selectedImage.name}</h2>
            <p className="modal_pragraph">{selectedImage.info}</p>
            <div>
              <p className="level_me">Level Me:</p>
              <div className="precent_level">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={selectedImage.percent}
                  style={{ width: "100%" }}
                />
                <span className="skills_precent">{selectedImage.percent}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
