import React from "react";

function SectionButton({name, id}){
    return(
        <a 
            className="btn main-btn"
            href= {`#${id}`}
        >
            {name}
        </a>
    )
}

export {SectionButton};