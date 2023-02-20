"use client";

import styled from "styled-components";
import LeftFormContainer from "./leftform/LeftFormContainer";
import RightForm from "./rightform/RightForm";

const WriteFormBlock = styled.div`
  //background-color: gainsboro;

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
      <RightForm />
    </WriteFormBlock>
  );
}
