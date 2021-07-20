import { useState } from "react";

export function Accordion(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`accordion ${isVisible ? "active" : ""} ${isVisible}`}>
      <div className="title" onClick={() => setIsVisible(!isVisible)}>
        <strong className="nm-text">{props.title}</strong>
        <img
          src={isVisible ? props.iconOpened : props.iconClosed}
          alt="arrow"
          className="icon"
        />
      </div>
      <div className="accordion-content">{props.children}</div>
    </div>
  );
}
