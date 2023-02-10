// 교환 페이지
// our-domain.com/exchange
"use client";

import styled from "styled-components";
import CardsContainer from "../board/CardsContainer";
import PageSort from "../board/PageSort";

const SalePageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Exchange() {
  return (
    <>
      <h1>교환 페이지</h1>
      <SalePageBlock>
        <PageSort />
        <CardsContainer />
      </SalePageBlock>
    </>
  );
}
