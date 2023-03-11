// 전체 페이지
// our-domain.com/board

"use client";

import styled from "styled-components";
import PageSort from "./PageSort";
import List from "@/components/list/List";
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
      <h1 className="text-center">전체 페이지</h1>
      <BoardPageBlock>
        <PageSort />
        <List />
      </BoardPageBlock>
      <ScrollTop />
    </>
  );
}
