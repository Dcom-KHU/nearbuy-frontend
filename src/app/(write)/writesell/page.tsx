// 판/교/나 글쓰기 페이지
// our-domain.com/writesell

"use client";

import styled from "styled-components";

const WriteSellBlock = styled.div`
  background-color: aliceblue;

  width: 70%;
  padding: 10px;
`;

export default function WriteSell() {
  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">
          판매/교환/나눔 글쓰기 페이지
        </div>
      </WriteSellBlock>
    </>
  );
}
