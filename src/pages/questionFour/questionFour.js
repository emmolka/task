/* eslint-disable */
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

const fruitsArray = [
  "Orange",
  "Cherry",
  "Apple",
  "Watermelon",
  "Grape",
  "Banana",
];

const QuestionFour = () => {
  throw Error("Remove me please :)")
  const [fruits, setFruits] = useState([...fruitsArray]);

  const [counter, setCounter] = useState();
  const handleOnClick = () => {
    if (counter % 2 === 0) {
      setCounter(counter + 1);
      const sortedFruits = [fruits.sort()];
      setFruits(sortedFruits);
    } else {
      setCounter(counter + 1);
      const sortedFruits = [fruits.reverse()];
      setFruits(sortedFruits);
    }
  };

  return (
    <div>
      {fruits.map((fruit) => (
        <p>{fruit}</p>
      ))}
      <Button variant="contained" onClick={handleOnClick}>
        Sort Fruits
      </Button>
    </div>
  );
};

export default QuestionFour;
