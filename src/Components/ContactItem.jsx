import React from "react";

function ContactItem({ icon, url, name }) {
  return (
    <div className="contact__item fade-in">
        <div className="contact__icon">
            {icon()}
        </div>
      
      {url && (
        <a
        rel="noreferrer"
        target="_blank"
        className="project__view"
        href={url}
      > { name } </a>
      )}
      {!url && (
        <p
        className="project__view"
      > { name } </p>
      )}
    </div>
  );
}

export { ContactItem };
