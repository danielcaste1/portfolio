import React from "react";

function AboutMe() {
  return (
    <div className="about container" id="about">
      <h2 className="about__title fade-in">About Me</h2>
      <div className="about__description">
        <div className="about__image fade-in">
          <img src="./imgs/about.png" alt="A portrait of Daniel" />
        </div>
        <div className="about__info fade-in">
        I'm a Frontend Developer with experience working with JavaScript, Bootstrap, Tailwind, Git, and so on. Currently I'm learning about React and similar technologies. My main goal is to contribute with great technical performance and useful ideas in the development teams of the companies that fit with my passions: Technology and Education. I think that the fusion of these two areas represents the development as a person and as a society, and I'm really interested in how Latin America is changing from this philosophy . My current programming knowledge, motivation and hard work have been fundamental to create high value solutions for the places I have worked on. So I'm very excited and have big expectations on what I'll be able to build on this journey.
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
