import React from "react";
import Question from "./question";
import QuestionFour from "./questionFour";
import ErrorBoundary from "../../components/errorBoundary";

const QuestionOneWrapper = (): JSX.Element => {
  return (
    <ErrorBoundary question={Question}>
      <QuestionFour />
    </ErrorBoundary>
  );
};
export default QuestionOneWrapper;
