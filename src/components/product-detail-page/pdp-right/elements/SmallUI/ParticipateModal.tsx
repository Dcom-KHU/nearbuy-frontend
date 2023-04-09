"use client";

import { useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import styled from "styled-components";
import CheckIfWriter from "../CheckIfWriter";
import DoParticipate from "../DoParticipate";

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
  &.longer-button {
    width: 130px;
  }
`;

// 참여하기 버튼
export default function ParticipateModal({ id }: { id: number }) {
  const [ParticipateModal, setParticipateModal] = useState(false);
  const token = GetToken();
  const isWriter = CheckIfWriter({ id });

  const handleParticipate = async () => {
    try {
      await axios.post(
        `${serverIP}/api/post/group/participate?id=${id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setParticipateModal(false);
      window.location.reload(); // Refresh and update the page
      alert("공동구매 참여 신청되었습니다");
    } catch (error) {
      console.log("An error occured while participating. ", error);
      // FIXME: 해당 api에서 이미 참여한 경우해서 실패한 경우를 분리해서 response 주면 좋을듯
      alert("이미 참여한 공동구매입니다.");
    }
  };

  if (isWriter === false) {
    // 로그인 돼있고, 글작성자가 아닌 경우
    return <DoParticipate id={id} />;
  } else if (isWriter === true) {
    // 글 작성자인 경우
    return (
      <ParticipateButton className="longer-button">
        참여자 확인
      </ParticipateButton>
    );
  } else {
    // 로그인 안돼있는 경우
    return <></>;
  }
}
