"use client";

import styled from "styled-components";
import AuctionLeftForm from "./AuctionLeftForm";
import AuctionRightForm from "./AuctionRightForm";
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

export default function AuctionWriteForm() {
  return (
    <SellWriteFormBlock>
      <LeftFormContainer>
        <AuctionLeftForm />
      </LeftFormContainer>
      <RightFormContainer>
        <AuctionRightForm />
      </RightFormContainer>
    </SellWriteFormBlock>
  );
}
