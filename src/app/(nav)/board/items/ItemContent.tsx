"use client";

import styled from "styled-components";
import "../../../globals.css";

const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 3px;
  text-align: left;

  p:first-child {
    // 제목
  }

  p:nth-child(2) {
    // 가격
    font-weight: 700;
  }
  p:last-child {
    // 위치
    font-size: 12px;
    color: rgba(33, 33, 36, 0.5);
  }
`;

// 게시글 설명
const ItemContent = () => {
  return (
    <ItemContentBox>
      <p>귀여운 고양이</p>
      <p>1,000,000,000</p>
      <p>경희대학교</p>
    </ItemContentBox>
  );
};
export default ItemContent;
