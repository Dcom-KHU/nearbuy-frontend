"use client";

// import { useState } from "react";
import styled from "styled-components";
import ToolBoxForGuest from "./ToolBoxForGuest";
import ToolBoxForWriter from "./ToolBoxForWriter";

const NameBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  p:first-child {
    margin-right: auto;
    font-size: 30px;
  }
`;

// 상세페이지 제목, 그 옆의 도구들 (찜, 공유, 신고)
export default function Title({ title, id }: { title: string; id: number }) {
  return (
    <NameBox>
      <p>{title}</p>
      {/* 추후 게시글 주인이면 tb for writer, 주인 아니면 tb for guest 띄우기 */}
      <ToolBoxForGuest />
      <div /* 나중에 없애기 */> &nbsp;&nbsp; | &nbsp;&nbsp;</div>
      <ToolBoxForWriter id={id} />
    </NameBox>
  );
}
