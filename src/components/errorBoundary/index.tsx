import React, { ErrorInfo, ReactElement } from "react";
import { Wrapper, Question, ErrorWrapper, ErrorText } from "./style";

const defaultQuestion = (): JSX.Element => {
  return <div>Please add a question to the test</div>;
};

interface ErrorState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

interface ErrorProps {
  question?: () => JSX.Element;
  children: ReactElement;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorState & ErrorProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render(): JSX.Element {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Wrapper>
          <Question>
            {(this.props.question && this.props.question()) ||
              defaultQuestion()}
          </Question>
          <ErrorWrapper>
            <h2>Something went wrong.</h2>
            <ErrorText>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </ErrorText>
          </ErrorWrapper>
        </Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
