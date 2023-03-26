"use client";

import { useState } from "react";
import styled from "styled-components";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineAlert,
} from "react-icons/ai";

const ToolBoxForGuestBox = styled.div`
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

  .report-buttons {
    border: solid 2px lightgray;
    border-radius: 8px;
    margin-left: 10px;
    padding: 8px;
  }
`;

// 게시글 주인이 아닐 때 표시하는 UI들. 찜, 공유, 신고.
export default function ToolBoxForGuest() {
  const [isLike, setIsLike] = useState(false);
  const isLikeHandler = () => {
    setIsLike((prev) => !prev);
  };
  const [ReportModal, setReportModal] = useState(false);

  return (
    <>
      <ToolBoxForGuestBox>
        <button className="liked" onClick={isLikeHandler} title="찜">
          {isLike && <AiFillHeart color="dimgray" size={24} />}
          {!isLike && <AiOutlineHeart color="dimgray" size={24} />}
        </button>
        <button title="공유">
          <AiOutlineShareAlt color="dimgray" size={24} />
        </button>
        <button title="신고" onClick={() => setReportModal(true)}>
          <AiOutlineAlert color="dimgray" size={25} />
        </button>
      </ToolBoxForGuestBox>
      {ReportModal && (
        <ModalOverlayBox onClick={() => setReportModal(false)}>
          <ModalContainerBox onClick={(e) => e.stopPropagation()}>
            <h2>게시글을 신고하시겠습니까?</h2>
            <div style={{ width: "250px", height: "60px" }}></div>
            <div style={{ float: "right" }}>
              <button
                className="report-buttons" /*onClick={handleReport} 함수 만들어야됨*/
              >
                신고
              </button>
              <button
                className="report-buttons"
                onClick={() => setReportModal(false)}
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
