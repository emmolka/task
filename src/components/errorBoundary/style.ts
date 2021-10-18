import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Question = styled.div`
  flex: 1;
  margin: 24;
  text-align: left;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const ErrorText = styled.div`
  white-space: pre-wrap;
  max-width: 400;
  text-align: left;
  align-self: center;
`;
