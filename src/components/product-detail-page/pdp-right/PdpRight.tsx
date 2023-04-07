"use client";

import styled from "styled-components";
import SmallInfo from "./elements/SmallUI/SmallInfo";
import Tags from "./elements/Tag/Tags";
import Title from "./elements/SmallUI/Title";
import UserInfo from "./elements/UserInfo";
import Location from "./elements/Location";
import ChatButton from "./elements/SmallUI/ChatButton";
import ParticipateButton from "./elements/SmallUI/ParticipateButton";
import ExchangeItems from "./elements/EachDetail/ExchangeItems";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AuctionDetail from "./elements/EachDetail/AuctionDetail";
import GroupDetail from "./elements/EachDetail/GroupDetail";
import { DetailPropsInterface } from "../pdp-type/DetailPropsInterface";

const RightBox = styled.section`
  width: 489px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const InfoBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

interface RightProps {
  getData: DetailPropsInterface | undefined;
}

// 상세페이지 정보 부분 (오른쪽 부분)
export default function PdpRight({ getData }: RightProps) {
  // 어떤 게시물이냐에 따라, 표시되는 내용 다르게 하기 위한 상태 관리
  const activeType = useSelector((state: RootState) => state.activePage.active);
  // FIXME: 해당 상세 페이지에서 새로고침 누르면, 상태 사라져서, 내용물 사라짐
  if (!getData) {
    console.log("getData is not present. check PdpLeft");
    return null;
  }
  return (
    <RightBox>
      <div className="w-full">
        <div>
          <>
            <SmallInfo time={getData?.time} />
            <Title title={getData?.title} id={getData?.id} />
            {activeType === "sale" && (
              <div className="text-2xl py-3">{getData?.salePrice}원</div>
            )}
            {activeType === "exchange" && (
              <ExchangeItems target={getData?.target} />
            )}
            {activeType === "free" && (
              <div className="text-base py-3 text-gray-500">무료 나눔</div>
            )}
            {activeType === "auction" && (
              <AuctionDetail
                increase={getData?.increasePrice}
                current={getData?.currentPrice}
                start={getData?.startPrice}
              />
            )}
            {activeType === "group" && (
              <GroupDetail
                groupPrice={getData?.groupPrice}
                totalPeople={getData?.totalPeople}
                currentPeople={getData?.currentPeople}
              />
            )}
            <Location location={getData?.location} />
          </>
        </div>
        <InfoBox>
          <UserInfo />
          <Tags tagArr={getData?.tag} />
        </InfoBox>
      </div>
      <div className="flex">
        {(activeType === "auction" || activeType === "group") && (
          <ParticipateButton />
        )}
        <ChatButton />
      </div>
    </RightBox>
  );
}
