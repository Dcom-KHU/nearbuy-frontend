"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";

interface DeleteModalProps {
  id: number;
  onClose?: () => void;
}

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

function DeleteModal({ id }: DeleteModalProps) {
  const token = GetToken();
  const router = useRouter();
  const [DeleteModal, setDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`${serverIP}/api/post`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: id },
      });
      alert("게시글이 삭제되었습니다");
      router.push("/board");
      setDeleteModal(false);
    } catch (error) {
      console.log("An error occured while deleting the post. ", error);
    }
  };

  return (
    <>
      <button title="삭제하기" onClick={() => setDeleteModal(true)}>
        <AiOutlineDelete color="dimgray" size={24} />
      </button>
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

export { DeleteModal };
