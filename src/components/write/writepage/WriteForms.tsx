"use client";

import styled from "styled-components";
import LeftFormContainer from "./leftform/LeftFormContainer";
import RightFormContainer from "./rightform/RightFormContainer";

const WriteFormBlock = styled.div`
  // background-color: gainsboro;

  display: flex;
  justify-content: center;

  gap: 30px;
  padding: 10px;
  padding-top: 20px;
`;

export default function WriteForm() {
  return (
    <WriteFormBlock>
      <LeftFormContainer />
      <RightFormContainer />
    </WriteFormBlock>
  );
}
