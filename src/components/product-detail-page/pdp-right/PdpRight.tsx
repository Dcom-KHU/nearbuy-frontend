"use client";

import styled from "styled-components";
import SmallInfo from "./elements/SmallInfo";
import Tags from "./elements/Tag/Tags";
import Title from "./elements/Title";
import UserInfo from "./elements/UserInfo";
import Location from "./elements/Location";
import ChatButton from "./elements/ChatButton";
import ExchangeItems from "./elements/EachDetail/ExchangeItems";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import AuctionDetail from "./elements/EachDetail/AuctionDetail";
import Price from "./elements/EachDetail/Price";
import GroupDetail from "./elements/EachDetail/GroupDetail";

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

interface Itemp {
  id: number;
  detail: string;
  image: string[];
  location: string;
  ongoing: boolean;
  salePrice: number;
  tag: string[];
  time: boolean;
  title: string;
  type: string;
  writer: string;
}

interface RightProps {
  getData: Itemp;
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
            <SmallInfo />
            <Title title={getData?.title} />
            {activeType === "sale" && <Price salePrice={getData?.salePrice} />}
            {activeType === "exchange" && <ExchangeItems />}
            {activeType === "free" && (
              <div className="text-base py-3 text-gray-500">무료 나눔</div>
            )}
            {activeType === "auction" && <AuctionDetail />}
            {activeType === "group" && <GroupDetail />}
            <Location />
          </>
        </div>
        <InfoBox>
          <UserInfo />
          <Tags />
        </InfoBox>
      </div>
      <ChatButton />
    </RightBox>
  );
}
