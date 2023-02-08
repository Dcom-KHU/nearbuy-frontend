// 전체 페이지
// our-domain.com/board

"use client";

import styled from "styled-components";
import CardsContainer from "./CardsContainer";
import PageSort from "./PageSort";

const SellPageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
`;

export default function Board() {
  return (
    <>
      <h1>전체 페이지</h1>
      <SellPageBlock>
        <PageSort />
        <CardsContainer />
      </SellPageBlock>
    </>
  );
}
