import "./Styles/styles.css";
import React, { Fragment } from "react";
import { PresentationCard } from "./Components/Presentation";
import { NavigationBar } from "./Components/NavigationBar";
import { AboutMe } from "./Components/AboutMe";
import { Projects } from "./Components/Projects";
import { Studies } from "./Components/Studies";
import { Contact } from "./Components/Contact";

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

import { containers, observer } from "./FadeInFadeOut";

function App() {

  containers.forEach((container) => {
    observer.observe(container);
  });

  const title = "Hello!";
  const description = "I'm Daniel Castellanos and I'm a";
  const position = "Frontend Developer";

  const sections = [
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Studies",
      id: "studies",
    },
    {
      name: "About Me",
      id: "about",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  //Projetcs
  const projects = [
    {
      title: "To Do Machine",
      description: "Made with ReactJS",
      picture: "./imgs/todo.png",
      code: "https://github.com/danielcaste1/to-do-machine-ReactJs",
      url: "https://danielcaste1.github.io/to-do-machine-ReactJs/",
    },
    {
      title: "Cat Liker",
      description: "Made with Vanilla JavaScript",
      picture: "./imgs/catliker.png",
      code: "https://github.com/danielcaste1/cat-liker",
      url: "https://danielcaste1.github.io/cat-liker/",
    },
    {
      title: "Instant-Pizza",
      description: "Made with HTML, CSS and JavaScript",
      picture: "./imgs/instantpizza.png",
      code: "https://github.com/danielcaste1/Instant-Pizza",
      url: "https://danielcaste1.github.io/Instant-Pizza/html/",
    },
    {
      title: "Dreamer Landing Page",
      description: "Made with HTML, CSS and JavaScript",
      picture: "./imgs/dreamer.png",
      code: "https://github.com/danielcaste1/dreamer-landingpage",
      url: "https://danielcaste1.github.io/dreamer-landingpage/html/",
    },
  ];

  //Studies
  const studies = [
    {
      institution: "SENA",
      title: "Systems Technician",
      icon: "sena",
    },
    {
      institution: "Sergio Arboleda University",
      title: "MinTic Mision Tripulant",
      icon: "sergio",
    },
    {
      institution: "Platzi",
      title: "Frontend Developer",
      icon: "platzi",
    },
  ];

  //Contacts
  const contacts = [
    {
      icon: AiFillLinkedin,
      name: "Daniel Alejandro Castellanos Aroca",
      url: "https://www.linkedin.com/in/daniel-alejandro-castellanos-aroca-a62a3721a/",
    },
    {
      icon: AiFillGithub,
      name: "danielcaste1",
      url: "https://github.com/danielcaste1",
    },
    {
      icon: AiFillMail,
      name: "danielcastellanos.dev@gmail.com",
    },
    {
      icon: AiOutlinePhone,
      name: "+57 3013500536",
    },
  ];

  return (
    <Fragment>
      <PresentationCard
        title={title}
        description={description}
        position={position}
      />
      <NavigationBar sections={sections} />
      <Projects projects={projects} />
      <Studies studies={studies} />
      <AboutMe />
      <Contact contacts={contacts} />
    </Fragment>
  );
}

export default App;
