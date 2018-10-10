import React from "react";
import "./Title.css";

const Title = props => (
  <div className="title">
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Title;