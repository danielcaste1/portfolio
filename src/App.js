import "./Styles/styles.css";
import React, { Fragment } from "react";
import { PresentationCard } from "./Components/Presentation";
import { NavigationBar } from "./Components/NavigationBar";
import { AboutMe } from "./Components/AboutMe";

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
      name: "Hobbies",
      id: "hobbies",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];

  return (
    <Fragment>
      <PresentationCard title={title} description={description} />
      <NavigationBar sections={sections} />
      <AboutMe/>
    </Fragment>
  );
}

export default App;
