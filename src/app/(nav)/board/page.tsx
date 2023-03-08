// 전체 페이지
// our-domain.com/board

"use client";

import styled from "styled-components";
import CardsContainer from "./CardsContainer";
import PageSort from "./PageSort";
// import WriteToggle from "@/components/write/writeToggles/roundWrite/WriteToggle";   없는게 나을것같대서 일단 지움
import ScrollTop from "@/components/ui/ScrollTop";

const BoardPageBlock = styled.div`
  // background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Board() {
  return (
    <>
      <h1>전체 페이지</h1>
      <BoardPageBlock>
        <PageSort />
        <CardsContainer />
      </BoardPageBlock>
      <ScrollTop />
    </>
  );
}
