// 공구 게시글에서 참여자 조회

import { useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import {
  ModalOverlayBox,
  ModalContainerBox,
  ParticipateButton,
} from "./StyleModal";

interface ParticipantsData {
  user: {
    name: string;
    mannerPoint: number;
    participate: boolean;
  }[];
}

// 참여자 조회
export default function ParticipantsGroup({
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
        참여자 조회
      </ParticipateButton>
      {participateModal && (
        <ModalOverlayBox onClick={() => setParticipateModal(false)}>
          <ModalContainerBox onClick={(e) => e.stopPropagation()}>
            <h2 style={{ paddingBottom: "5px", paddingLeft: "3px" }}>
              참여자 조회
            </h2>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <ul className="group-participant">
                <li>[주최자] {writer}</li>
                {participants?.user?.map((participant) => (
                  <li key={participant.name}>
                    <div>{participant.name}</div>
                    <div className="manner">
                      {participant.mannerPoint}&#176;
                    </div>
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
