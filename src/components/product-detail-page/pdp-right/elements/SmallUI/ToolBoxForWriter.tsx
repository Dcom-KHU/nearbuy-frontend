"use client";

import Link from "next/link";
import styled from "styled-components";
import { AiOutlineShareAlt, AiOutlineEdit } from "react-icons/ai";
import { DeleteModal } from "../DeletePost";

const ToolBoxForWriterBox = styled.div`
  display: flex;
  gap: 10px;
`;

// 게시글 주인일 때 표시하는 UI들. 공유, 수정, 삭제.
export default function ToolBoxForWriter({ id }: { id: number }) {
  return (
    <>
      <ToolBoxForWriterBox>
        <button title="공유하기" /* 로그인 돼있고 게시글 주인일 때*/>
          <AiOutlineShareAlt color="dimgray" size={24} />
        </button>
        <Link href="/board" /* 게시글 수정 페이지로 연결 */ title="수정하기">
          <AiOutlineEdit href="localhost:3000/sale" color="dimgray" size={24} />
        </Link>
        <DeleteModal id={id} />
      </ToolBoxForWriterBox>
    </>
  );
}
