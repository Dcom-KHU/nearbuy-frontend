"use client";

import { useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import styled from "styled-components";
import CheckIfWriter from "../CheckIfWriter";

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

  .parti-buttons {
    border: solid 2px lightgray;
    border-radius: 8px;
    margin-left: 10px;
    padding: 8px;
  }
`;

const ParticipateButton = styled.button`
  background-color: var(--background-color);
  border-radius: 8px;
  width: 100px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 11px;
  &:hover {
    color: var(--accent-color);
    font-weight: 600;
  }
`;

// 참여하기 버튼
export default function ParticipateModal({ id }: { id: number }) {
  const [ParticipateModal, setParticipateModal] = useState(false);
  const token = GetToken();
  const isWriter = CheckIfWriter({ id });

  const handleParticipate = async () => {
    try {
      const response = await axios.post(
        `${serverIP}/api/post/group/participate?id=${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("response::::", response);
      setParticipateModal(false);
      alert("공동구매 참여 신청되었습니다");
    } catch (error) {
      console.log("An error occured while participating. ", error);
      alert("공동구매 참여에 실패했습니다. 다시 시도해주세요.");
    }
  };

  if (isWriter === false) {
    // 로그인 돼있고, 글작성자가 아닌 경우
    return (
      <>
        <ParticipateButton onClick={() => setParticipateModal(true)}>
          참여하기
        </ParticipateButton>
        {ParticipateModal && (
          <ModalOverlayBox onClick={() => setParticipateModal(false)}>
            <ModalContainerBox onClick={(e) => e.stopPropagation()}>
              <h2>공동구매에 참여하시겠습니까?</h2>
              <div style={{ width: "250px", height: "60px" }}></div>
              <div style={{ float: "right" }}>
                <button className="parti-buttons" onClick={handleParticipate}>
                  참여
                </button>
                <button
                  className="parti-buttons"
                  onClick={() => setParticipateModal(false)}
                >
                  취소
                </button>
              </div>
            </ModalContainerBox>
          </ModalOverlayBox>
        )}
      </>
    );
  } else {
    // 로그인 안돼있거나 글작성자인경우
    return <></>;
  }
}