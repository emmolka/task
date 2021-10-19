import React from "react";
import QuestionThree from "./questionThree";
import Question from "./question";
import ErrorBoundary from "../../components/errorBoundary";
const questionThree = (): JSX.Element => {
  return (
    <ErrorBoundary question={Question}>
      <QuestionThree />
    </ErrorBoundary>
  );
};

export default questionThree;
