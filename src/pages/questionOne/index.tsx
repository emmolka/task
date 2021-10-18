import React from "react";
import Question from "./question";
import QuestionOne from "./questionOne";
import ErrorBoundary from "../../components/errorBoundary";

const QuestionOneWrapper = (): JSX.Element => {
  return (
    <ErrorBoundary question={Question}>
      <QuestionOne />
    </ErrorBoundary>
  );
};
export default QuestionOneWrapper;
