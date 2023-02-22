// 좋아요 페이지
// our-domain.com/like
"use client";
import styled from "styled-components";
import LikeList from "./LikeList";

const LikePageBlock = styled.div`
  //background: pink;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;

  h1 {
    font-size: 36px;
    align-self: flex-start;
    margin: 25px 80px;
  }
`;

export default function Like() {
  return (
    <LikePageBlock>
      <h1>찜한 목록</h1>
      <LikeList />
    </LikePageBlock>
  );
}
