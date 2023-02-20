"use client";

import styled from "styled-components";
import LeftForm from "./leftform/LeftForm";
import RightForm from "./rightform/RightForm";

const WriteFormBlock = styled.div`
  background-color: gainsboro;

  display: flex;
  justify-content: center;

  gap: 21px;
  padding: 10px;
  padding-top: 20px;
`;

export default function WriteForm() {
  return (
    <WriteFormBlock>
      <LeftForm />
      <RightForm />
    </WriteFormBlock>
  );
}
