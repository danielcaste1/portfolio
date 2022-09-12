import React from "react";

function PresentationCard({ title, description, position }){
    return (
      <div className="presentation container">
        <div className="presentation__content">
          <div className="presentation__info fade-in">
            <span className="presentation__title">{title}</span>
            <p className="presentation__paragraph"> {description} </p>
            <p className="presentation__paragraph--position"> {position} </p>
          </div>
          <div className="presentation__portrait fade-in">
            <div className="portrait__img">
              <img src="./imgs/me.png" alt="A portrait of Daniel" />
            </div>
            <div className="portrait__figure"></div>
          </div>
        </div>
      </div>
    );
}

export { PresentationCard };