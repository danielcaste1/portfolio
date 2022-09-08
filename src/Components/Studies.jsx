import React from "react";
import { StudyCard } from "./StudyCard";
function Studies({ studies }) {
  return (
    <div id="studies" className="studies container">
      <span className="studies__title"> Studies </span>
      <div className="studies__grid">
        {studies.map((study) => (
          <StudyCard
            key={study.title}
            title={study.title} 
            icon={study.icon}
            institution={study.institution}
            url={study.url}
          />
        ))}
      </div>
    </div>
  );
}

export { Studies };
