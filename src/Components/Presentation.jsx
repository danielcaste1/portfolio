import React from "react";

function PresentationCard({ title, description }){
    return (
        <div className="presentation container">
            <div className="presentation__info">
                <span className="presentation__title">{ title }</span>
                <p className="presentation__paragraph">{ description }</p>
            </div>
            <div className="presentation__portrait">
                <div className="portrait__img">
                    <img src="./imgs/me.png" alt="A portrait of Daniel" />
                </div>
                <div className="portrait__figure">
                </div>
            </div>
        </div>
    )
}

export { PresentationCard };