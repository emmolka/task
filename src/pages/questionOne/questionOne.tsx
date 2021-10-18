import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const QuestionOne = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const label = "I've been clicked: ";

  const handleOnClick = (): void => setCounter(counter + 1);

  return (
    <div style={{ marginTop: 48 }}>
      <Button variant="contained" onClick={handleOnClick}>
        {label} {counter} times
      </Button>
    </div>
  );
};

export default QuestionOne;
