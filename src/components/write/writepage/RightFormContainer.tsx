"use client";

import styled from "styled-components";

const Container = styled.div`
  // background-color: lightgreen;

  min-width: 240px;
  min-height: 200px;

  .form-input {
    background-color: lavender;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid lightgray;
    border-radius: 8px;
    display: block;
    width: 100%;
  }

  .submit-button {
    padding: 13px;
    border-radius: 5px;
    color: white;
    background-color: #b8ddfd;

    &:active {
      background-color: skyblue;
    }
  }
`;

export default function RightFormContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
