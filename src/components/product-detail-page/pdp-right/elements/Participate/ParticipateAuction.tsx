// 공구 게시글에서 참여

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
const InputPriceForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 20px;
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

export default function ParticipateAuction({
  id,
  increase,
  current,
}: {
  id: number;
  increase: number;
  current: number;
}) {
  const [participateModal, setParticipateModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number>(increase);
  const token = GetToken();
  const handleOptionChange = (e: any) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleParticipate = async () => {
    setParticipateModal(false);

    try {
      await axios.post(
        `${serverIP}/api/post/auction/participate?id=${id}&newBid=${selectedOption}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setParticipateModal(false);
      window.location.reload(); // Refresh and update the page
      alert(`${current + selectedOption}원으로 경매 참가했습니다`);
      console.log("parsedOption::");
    } catch (error) {
      console.log("An error occured while participating. ", error);
      // FIXME: 해당 api에서 이미 참여한 경우해서 실패한 경우를 분리해서 response 주면 좋을듯
      alert(`경매 참여에 실패했습니다.`);
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
            <h2>경매에 참여하시겠습니까?</h2>
            <InputPriceForm>
              <select
                name="price"
                value={selectedOption}
                onChange={handleOptionChange}
                required
              >
                <option value="placeholder" disabled>
                  가격 입력하기 (단위: {increase}원)
                </option>
                <option value={increase * 1}>{current + increase}원</option>
                <option value={increase * 2}>{current + increase * 2}원</option>
                <option value={increase * 3}>{current + increase * 3}원</option>
                <option value={increase * 4}>{current + increase * 4}원</option>
                <option value={increase * 5}>{current + increase * 5}원</option>
              </select>
            </InputPriceForm>
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
