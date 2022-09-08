import React from "react";

function AboutMe() {
  return (
    <div className="about container" id="about">
      <h2 className="about__title">About Me</h2>
      <div className="about__description">
        <div className="about__image">
          <img src="./imgs/about.png" alt="A portrait of Daniel" />
        </div>
        <div className="about__info">
          Soy Desarrollador Frontend con experiencia en tecnologías como
          JavaScript, Git, Linux, Bootstrap, entre otras. Me encuentro
          aprendiendo todo acerca de React y herramientas similares. Mi meta es
          aportar ideas novedosas y conceptos útiles a los equipos de desarrollo
          en las empresas que se alinean con mis ideales e intereses: la
          tecnología y la educación. Pienso que la unión entre estos campos
          representan el desarrollo tanto a nivel individual cómo social, y me
          interesa mucho cómo Latinoamérica está cambiando a través de esta
          filosofía. Mi motivación, dedicación y conocimientos en programación
          han sido fundamentales para brindar soluciones eficaces y de alto
          valor a lo largo de mi camino profesional, por lo que tengo muchas
          expectativas y deseos de continuar construyendo en cada lugar en que
          se me presente la oportunidad.
        </div>
      </div>
    </div>
  );
}

export { AboutMe };
