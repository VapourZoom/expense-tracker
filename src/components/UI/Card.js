import React from "react";

import "../UI/Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //console.log(classes);
  return <div className={classes}>{props.children}</div>;
};

export default Card;
