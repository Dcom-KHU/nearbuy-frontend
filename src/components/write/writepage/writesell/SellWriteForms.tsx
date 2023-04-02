"use client";

import styled from "styled-components";
import SellLeftForm from "./SellLeftForm";
import SellRightForm from "./SellRightForm";
import LeftFormContainer from "../LeftFormContainer";
import RightFormContainer from "../RightFormContainer";

const SellWriteFormBlock = styled.div`
  // background-color: gainsboro;

  display: flex;
  justify-content: center;

  gap: 30px;
  padding: 10px;
  padding-top: 20px;
`;

export default function SellWriteForm() {
  return (
    <SellWriteFormBlock>
      <LeftFormContainer>
        <SellLeftForm />
      </LeftFormContainer>
      <RightFormContainer>
        <SellRightForm />
      </RightFormContainer>
    </SellWriteFormBlock>
  );
}
