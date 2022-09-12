import React from "react";

function StudyCard({ title, institution, icon }) {
  return (
    <div className="study fade-in">
      <span className="study__title">{title}</span>
      <span className="study__institution">{institution}</span>
      <div className="study__icon">
        <img src={`./imgs/${icon}.png`} alt={institution} />
      </div>
    </div>
  );
}

export { StudyCard };
