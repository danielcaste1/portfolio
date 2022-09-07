import React from "react";
import { StudyCard } from "./StudyCard";
function Studies({ studies }) {
  return (
    <div id="studies" className="studies container">
      <span className="studies__title"> Studies </span>
      <div className="studies__grid">
        {studies.map((study) => (
          <StudyCard 
            title={study.title} 
            icon={study.icon}
            institution={study.institution}
          />
        ))}
      </div>
    </div>
  );
}

export { Studies };
