"use client";

import Link from "next/link";
import styled from "styled-components";
import { AiOutlineShareAlt, AiOutlineEdit } from "react-icons/ai";
import { DeleteModal } from "../DeletePost";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import clickShareHandler from "@/utils/clickShareHandler";

const ToolBoxForWriterBox = styled.div`
  display: flex;
  gap: 10px;
`;

// 게시글 주인일 때 표시하는 UI들. 공유, 수정, 삭제.
export default function ToolBoxForWriter({ id }: { id: number }) {
  // 어떤 게시물이냐에 따라, 표시되는 내용 다르게 하기 위한 상태 관리
  const activeType = useSelector((state: RootState) => state.activePage.active);
  const [editUrl, setEditUrl] = useState<string>("board");

  useEffect(() => {
    if (activeType) {
      switch (activeType) {
        case "sale" || "exchange" || "free":
          setEditUrl(`writesell_/update/${id}?type=${activeType}`);
          break;
        case "auction":
          setEditUrl(`writeauction_/update/${id}`);
          break;
        case "group":
          setEditUrl(`writegroup_/update/${id}`);
          break;
        default:
          setEditUrl("board");
      }
    }
  }, [activeType, id]);

  return (
    <>
      <ToolBoxForWriterBox>
        <button
          title="공유하기"
          onClick={() =>
            clickShareHandler()
          } /* 로그인 돼있고 게시글 주인일 때*/
        >
          <AiOutlineShareAlt color="dimgray" size={24} />
        </button>
        <Link href={editUrl} /* 게시글 수정 페이지로 연결 */ title="수정하기">
          <AiOutlineEdit href="localhost:3000/sale" color="dimgray" size={24} />
        </Link>
        <DeleteModal id={id} />
      </ToolBoxForWriterBox>
    </>
  );
}
