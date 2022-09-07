import React from "react";
import { SectionButton } from "./SectionButton";

function NavigationBar({sections}){
    return (
        <nav className="sections__bar">
            {
                sections.map((section)=>{
                    return(
                        <SectionButton
                            key={section.id}
                            name={section.name}
                            id={section.id}
                        />
                    )
                })
            }
        </nav>
    )
}


export { NavigationBar }