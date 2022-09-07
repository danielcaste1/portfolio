import React from "react";

function StudyCard({title,institution,icon}){
    return(
        <div className="study">
            <span className="study__title">{title}</span>
            <span className="study__institution">{institution}</span>
        </div>
    )
}

export { StudyCard }