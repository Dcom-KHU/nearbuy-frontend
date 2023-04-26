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
import { ImHammer2 } from "react-icons/im";

interface ParticipantsData {
  user: {
    name: string;
    mannerPoint: number;
    auctionPrice: number;
    participate: boolean;
  }[];
}

// 참여자 조회
export default function ParticipantsAuction({ id }: { id: number }) {
  const [participateModal, setParticipateModal] = useState(false);
  const [participants, setParticipants] = useState<ParticipantsData>();
  const [isLoading, setIsLoading] = useState(false); // add loading state
  const token = GetToken();

  const handleParticipants = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${serverIP}/api/post/auction/participate`,
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

  // FIXME: 경매 낙찰자 이미 있는 경우엔 띄우지 말아야 할 컴포넌트들 있음
  const chooseBidder = async (participant: {
    name: string;
    mannerPoint: number;
    auctionPrice: number;
  }) => {
    // console.log(participant.name);

    if (
      confirm(
        `\n[ ${participant.name} ] 님에게 낙찰하시겠습니까? \n\n 입찰가: ${participant.auctionPrice}원`
      )
    ) {
      // 확인 버튼 클릭 시 동작
      try {
        const response = await axios.get(
          `${serverIP}/api/post/auction/finish`,
          {
            headers: { Authorization: `Bearer ${token}` },
            params: { id: id, name: participant.name },
          }
        );
        // console.log(response);
        setParticipants(response.data);
      } catch (error) {
        console.log("An error occured while choosing bidder. ", error);
      }
      alert(
        `[ ${participant.name} ] 님에게 ${participant.auctionPrice}원으로 낙찰되었습니다.`
      );
    } else {
      // 취소 버튼 클릭 시 동작
      alert(`입찰을 취소했습니다`);
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
              <ul>
                {participants?.user?.map((participant) => (
                  <li key={participant.auctionPrice}>
                    <div>{participant.name}</div>
                    <div>{participant.auctionPrice}원</div>
                    <div className="manner" title="공유하기">
                      {participant.mannerPoint}&#176;
                    </div>
                    <button
                      title="낙찰하기"
                      onClick={() => chooseBidder(participant)}
                    >
                      <ImHammer2 className="hammer" />
                    </button>
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
