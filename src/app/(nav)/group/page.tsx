// 공구 페이지
// our-domain.com/group
"use client";

import styled from "styled-components";
import CardsContainer from "../board/CardsContainer";
import PageSort from "../board/PageSort";
import WriteToggle from "@/components/write/WriteToggle";

const SalePageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Group() {
  return (
    <>
      <h1>공구 페이지</h1>
      <SalePageBlock>
        <PageSort />
        <CardsContainer />
      </SalePageBlock>
      <WriteToggle />
    </>
  );
}
