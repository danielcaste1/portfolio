import React from "react";
import { VscCode } from "react-icons/vsc";
import { MdRemoveRedEye } from "react-icons/md";

function ProjectCard({ title, description, picture, code, url }) {
  return (
    <div className="project">
      <span className="project__title"> {title} </span>
      <div className="project__img">
        <img src={picture} alt="project screenshot" />
      </div>
      <p className="project__description"> {description} </p>
      <div className="project__cta">
        <a rel="noopener" target="_blank" className="project__code" href={code}>
          <VscCode></VscCode>
        </a>
        <a rel="noopener" target="_blank" className="project__view" href={url}>
          <MdRemoveRedEye></MdRemoveRedEye>
        </a>
      </div>
    </div>
  );
}

export { ProjectCard };
