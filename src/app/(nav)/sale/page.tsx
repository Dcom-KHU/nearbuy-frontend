// 판매 페이지
// our-domain.com/sale
"use client";

import styled from "styled-components";
import CardsContainer from "../board/CardsContainer";
import PageSort from "../board/PageSort";
import WriteToggle from "@/components/write/writeToggles/roundWrite/WriteToggle";

const SalePageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Sale() {
  return (
    <>
      <h1>판매 페이지</h1>
      <SalePageBlock>
        <PageSort />
        <CardsContainer />
      </SalePageBlock>
      <WriteToggle />
    </>
  );
}
