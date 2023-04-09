import { useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import styled from "styled-components";

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
  &.longer-button {
    width: 130px;
  }
`;

export default function DoParticipate({ id }: { id: number }) {
  const [participateModal, setParticipateModal] = useState(false);
  const token = GetToken();

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

  return (
    <>
      <ParticipateButton onClick={() => setParticipateModal(true)}>
        참여하기
      </ParticipateButton>
      {participateModal && (
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
}
