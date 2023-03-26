"use client";

// import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useDelete } from "@/hooks/useHttp";
import { useState } from "react";
import {
  AiOutlineShareAlt,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import customAxios from "@/utils/customAxios";

const ToolBoxForWriterBox = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalOverlayBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
`;
interface PostDelProps {
  id: number;
}

// 게시글 주인일 때 표시하는 UI들. 공유, 수정, 삭제.
export default function ToolBoxForWriter({ id }: { id: number }) {
  /*
  게시글 삭제를 위한 useDelete 불러오고 싶었음 but AxiosError 뜸
    const {
        data: deleteData,
        isLoading: gdeleteIsLoading,
        error: deleteError,
    } = useDelete<PostDelProps>({
        url: "/api/post", // 필수
        headers: { Authorization: `Bearer 어쩌구` },
        params: { id: id },
    });
  */

  const [DeleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <ToolBoxForWriterBox>
        <button title="공유하기">
          <AiOutlineShareAlt color="dimgray" size={24} />
        </button>
        <Link href="/board" /* 게시글 수정 페이지로 연결 */ title="수정하기">
          <AiOutlineEdit href="localhost:3000/sale" color="dimgray" size={24} />
        </Link>
        <button title="삭제하기" onClick={() => setDeleteModal(true)}>
          <AiOutlineDelete color="dimgray" size={24} />
        </button>
      </ToolBoxForWriterBox>
      {DeleteModal && (
        <ModalOverlayBox onClick={() => setDeleteModal(false)}>
          <ModalContainerBox onClick={(e) => e.stopPropagation()}>
            <h2>게시글을 삭제하겠습니까?</h2>
            <div>
              <button /*onClick={handleDelete}*/>삭제</button>
              <button onClick={() => setDeleteModal(false)}>취소</button>
            </div>
          </ModalContainerBox>
        </ModalOverlayBox>
      )}
    </>
  );
}
