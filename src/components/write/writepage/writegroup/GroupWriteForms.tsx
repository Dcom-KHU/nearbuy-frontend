"use client";

import styled from "styled-components";
import GroupLeftForm from "./GroupLeftForm";
import GroupRightForm from "./GroupRIghtForm";
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
        <GroupLeftForm />
      </LeftFormContainer>
      <RightFormContainer>
        <GroupRightForm />
      </RightFormContainer>
    </SellWriteFormBlock>
  );
}
