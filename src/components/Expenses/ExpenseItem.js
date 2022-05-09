import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate"; //this is how we import a component
import "./ExpenseItem.css"; // This is how we import styles for component

const ExpenseItem = (props) => {
  //console.log(props); //Here we receive all props from the used component from the app.js

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    //Writing React code inside JSX (dynamic data rendering)
    // Shell copmponents wont apply their styles to our other custom components
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};
export default ExpenseItem;
