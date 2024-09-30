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
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const icons = [
    {
      icon: faJs,
      name: "Javascript",
      info: "JavaScript is a versatile programming language that enables dynamic content and interactivity on web pages.",
      color: "yellow",
      percent: 70,
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
      icon: faJs,
      name: "Redux Toolkit",
      info: "Redux Toolkit is a toolset for efficient Redux development, simplifying state management in React apps.",
      color: "#7549b9",
      percent: 80,
    },
    {
      icon: faJs,
      name: "Redux Saga",
      info: "Redux Saga is a middleware library that helps in handling complex asynchronous tasks in React-Redux applications.",
      color: "#89d96d",
      percent: 75,
    },
    {
      icon: faJs,
      name: "React-Native",
      info: "React Native is a framework for building native apps using React, allowing for cross-platform mobile development.",
      color: "#6dacd9",
      percent: 85,
    },
    { icon: faSquareJs, name: "Javascript", color: "yellow", percent: 80 },
    {
      icon: faJs,
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
      icon: faJs,
      name: "Tailwind CSS",
      info: "Tailwind CSS is a utility-first CSS framework for quickly building custom designs without leaving HTML.",
      color: "#38bdf8",
      percent: 85,
    },
    {
      icon: faJs,
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
      icon: faJs,
      name: "Framer Motion",
      info: "Framer Motion is a library for React that makes it easy to create animations and transitions.",
      color: "#e630be",
      percent: 80,
    },
    {
      icon: faJs,
      name: "Material UI",
      info: "Material UI is a popular React UI framework that implements Google's Material Design guidelines.",
      color: "#007fff",
      percent: 75,
    },
    {
      icon: faJs,
      name: "Style Component",
      info: "Styled-components is a library for React and React Native that allows you to use component-level styles in your application.",
      color: "#bf4f74",
      percent: 80,
    },
    {
      icon: faJs,
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const modalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);

  const openModal = (icon) => {
    setSelectedImage(icon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage({});
  };

  const style = (index) => ({
    color: isHovered === index ? icons[index].color : "white",
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

  return (
    <div className="skills_global">
      <h1>FrontEnd</h1>
      <div className="image-list">
        {icons.map((icon, index) => (
          <div
            className="icon_item"
            key={index}
            style={style(index)}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <FontAwesomeIcon
              icon={icon.icon}
              onClick={() => openModal(icon)}
              style={{ width: "48px", height: "48px" }}
              className="image-thumbnail"
            />
            <span>{icon.name}</span>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <FontAwesomeIcon
              icon={selectedImage.icon}
              className="modal-image"
            />
            <h2>{selectedImage.name}</h2>
            <p>Percent: {selectedImage.percent}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
