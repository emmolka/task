import React from "react";
import ErrorBoundary from "../../components/errorBoundary";
import QuestionTwo from "./questionTwo";
import Question from "./question";

const QuestionTwoWrapper = (): JSX.Element => (
  <ErrorBoundary question={Question}>
    <QuestionTwo />
  </ErrorBoundary>
);

export default QuestionTwoWrapper;
