"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import { AiOutlineShareAlt, AiOutlineAlert } from "react-icons/ai";
import LikePost from "../LikePost";

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
const ReportTextArea = styled.textarea`
  border: solid 1px gray;
  margin: 15px 0;
  padding: 10px;
  height: 100px;
  width: 340px;
`;

// 게시글 주인이 아닐 때 표시하는 UI들. 찜, 공유, 신고.
export default function ToolBoxForGuest({ id }: { id: number }) {
  const [ReportModal, setReportModal] = useState(false);
  const token = GetToken();

  return (
    <>
      <ToolBoxForGuestBox>
        <LikePost id={id} />

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
            <ReportTextArea
              placeholder="신고 내용을 입력해주세요(최대 150자)"
              maxLength={150}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
