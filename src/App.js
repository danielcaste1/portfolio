import "./Styles/styles.css";
import React, { Fragment } from "react";
import { PresentationCard } from "./Components/Presentation";
import { NavigationBar } from "./Components/NavigationBar";
import { AboutMe } from "./Components/AboutMe";
import { Projects } from "./Components/Projects";
import { Studies } from "./Components/Studies";

function App() {
  const title = "Hello!";
  const description =
    "My Name is Daniel Castellanos, I'm a Junior Web Developer";

  const sections = [
    {
      name: "About Me",
      id: "about",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Studies",
      id: "studies",
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

  //Projects
  const studies = [
    {
      institution: "SENA",
      title: "Systems Technician"
    },
    {
      institution: "Sergio Arboleda University",
      title: "MinTic Mision 2022 Tripulant"
    },
    {
      institution: "Platzi",
      title: "Frontend Developer"
    },
  ]

  return (
    <Fragment>
      <PresentationCard title={title} description={description} />
      <NavigationBar sections={sections} />
      <AboutMe />
      <Projects projects={projects} />
      <Studies studies={studies}/>
    </Fragment>
  );
}

export default App;
