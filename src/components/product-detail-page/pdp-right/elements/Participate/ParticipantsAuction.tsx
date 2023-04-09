// 공구 게시글에서 참여자 조회

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
  padding: 27px;
  border-radius: 20px;

  .parti-buttons {
    border: solid 2px lightgray;
    border-radius: 8px;
    margin-left: 10px;
    padding: 8px;
  }
  .line {
    width: 100%;
    border: solid 1px lightgray;
    margin-bottom: 3px;
  }
  li {
    // 개별 참여자 박스
    display: flex;
    justify-content: space-between;
    padding: 3px 7px;
    div:nth-child(2) {
      color: #999999;
    }
  }
`;

const ParticipateButton = styled.button`
  background-color: var(--background-color);
  border-radius: 8px;
  width: 130px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 11px;
  &:hover {
    color: var(--accent-color);
    font-weight: 600;
  }
`;

interface ParticipantsData {
  user: {
    name: string;
    mannerPoint: number;
    participate: boolean;
  }[];
}

// 참여자 조회
export default function ParticipantsAuction({
  id,
  writer,
}: {
  id: number;
  writer: string;
}) {
  const [participateModal, setParticipateModal] = useState(false);
  const [participants, setParticipants] = useState<ParticipantsData>();
  const [isLoading, setIsLoading] = useState(false); // add loading state
  const token = GetToken();

  const handleParticipants = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${serverIP}/api/post/group/participate`,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { id: id },
        }
      );
      setParticipants(response.data);
    } catch (error) {
      console.log("An error occured while seeing participants. ", error);
    } finally {
      setIsLoading(false);
    }
  };
  // console.log(participants);
  return (
    <>
      <ParticipateButton
        onClick={() => {
          setParticipateModal(true);
          handleParticipants();
        }}
      >
        ~~참여자 조회
      </ParticipateButton>
      {participateModal && (
        <ModalOverlayBox onClick={() => setParticipateModal(false)}>
          <ModalContainerBox onClick={(e) => e.stopPropagation()}>
            <h2 style={{ paddingBottom: "5px", paddingLeft: "3px" }}>
              참여자 조회
            </h2>
            <div className="line"></div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <ul>
                <li>[주최자] {writer}</li>
                {participants?.user?.map((participant) => (
                  <li key={participant.name}>
                    <div>{participant.name}</div>
                    <div>{participant.mannerPoint}</div>
                  </li>
                ))}
              </ul>
            )}
            <div style={{ width: "250px", height: "10px" }}></div>
            <div style={{ float: "right" }}>
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
