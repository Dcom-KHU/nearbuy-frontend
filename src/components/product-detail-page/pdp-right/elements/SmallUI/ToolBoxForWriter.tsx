"use client";

// import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import {
  AiOutlineShareAlt,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import axios from "axios";
import { useRouter } from "next/navigation";

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
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 20px;

  .delete-buttons {
    border: solid 2px lightgray;
    border-radius: 8px;
    margin-left: 10px;
    padding: 8px;
  }
`;

// 게시글 주인일 때 표시하는 UI들. 공유, 수정, 삭제.
export default function ToolBoxForWriter({ id }: { id: number }) {
  const token = GetToken();
  const router = useRouter();
  const [DeleteModal, setDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${serverIP}/api/post`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: id },
      });
      alert("게시글이 삭제되었습니다");
      router.push("/sale");
      setDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

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
            <h2>게시글을 삭제하시겠습니까?</h2>
            <div style={{ width: "250px", height: "60px" }}></div>
            <div style={{ float: "right" }}>
              <button className="delete-buttons" onClick={handleDelete}>
                삭제
              </button>
              <button
                className="delete-buttons"
                onClick={() => setDeleteModal(false)}
              >
                취소
              </button>
            </div>
          </ModalContainerBox>
        </ModalOverlayBox>
      )}
    </>
  );
}
