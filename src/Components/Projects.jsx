import React from "react";
import { ProjectCard } from "./ProjectCard";

function Projects({ projects }) {
  return (
    <div className="projects container" id="projects">
      <h3 className="projects__title" >Projects</h3>
      <div className="projects__grid">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.url}
              title={project.title}
              description={project.description}
              code={project.code}
              url={project.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export { Projects };
