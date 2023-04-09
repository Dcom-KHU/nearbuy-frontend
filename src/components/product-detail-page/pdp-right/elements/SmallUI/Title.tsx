"use client";

// import { useState } from "react";
import styled from "styled-components";
import ToolBoxForWriter from "./ToolBoxForWriter";
import ToolBoxForGuest from "./ToolBoxForGuest";
import useCheckIfWriter from "../CheckIfWriter";

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
  const isWriter = useCheckIfWriter({ id });

  return (
    <NameBox>
      <p>{title}</p>
      {isWriter ? <ToolBoxForWriter id={id} /> : <ToolBoxForGuest id={id} />}
    </NameBox>
  );
}
