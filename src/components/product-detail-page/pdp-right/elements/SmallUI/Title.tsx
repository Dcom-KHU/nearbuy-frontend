"use client";

import styled from "styled-components";
import ToolBoxForWriter from "./ToolBoxForWriter";
import ToolBoxForGuest from "./ToolBoxForGuest";
import CheckIfWriter from "../CheckIfWriter";
import { AiOutlineShareAlt } from "react-icons/ai";

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
  const isWriter = CheckIfWriter({ id });

  return (
    <NameBox>
      <p>{title}</p>
      {isWriter === true ? (
        // 게시글 주인일 때
        <ToolBoxForWriter id={id} />
      ) : isWriter === false ? (
        // 로그인 돼있지만 게시글 주인 아닐 때
        <ToolBoxForGuest id={id} />
      ) : (
        // 로그인 안돼있을 때
        <button title="공유">
          <AiOutlineShareAlt color="dimgray" size={24} />
        </button>
      )}
    </NameBox>
  );
}
