// 전체 페이지
// our-domain.com/board

"use client";

import styled from "styled-components";
import CardsContainer from "./CardsContainer";
// 나중에 여기서 레이아웃 설정 한거 ../components에 sell page 관련 폴더 만들어서 거기로 옮길 예정

const SellPageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;

  #page-sort {
    width: 180px;
    border: solid 2px gray;
    margin-right: 100px;
  }
`;

export default function Board() {
  return (
    <>
      <h1>전체 페이지</h1>
      <SellPageBlock>
        <select id="page-sort" name="page-sort" style={{ float: "right" }}>
          <option value="sort-new">최신순</option>
          <option value="sort-low">낮은가격순</option>
          <option value="sort-high">높은가격순</option>
        </select>
        <CardsContainer />
      </SellPageBlock>
    </>
  );
}
