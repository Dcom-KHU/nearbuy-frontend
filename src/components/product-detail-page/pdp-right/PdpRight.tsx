"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import SmallInfo from "./elements/SmallUI/SmallInfo";
import Tags from "./elements/Tag/Tags";
import Title from "./elements/SmallUI/Title";
import axios from "axios";
import UserInfo from "./elements/UserInfo";
import { serverIP } from "@/../secrets.json";
import Location from "./elements/Location";
import ChatButton from "./elements/SmallUI/ChatButton";
import { InactiveChatButton } from "./elements/SmallUI/ChatButton";
import ParticipateButton from "./elements/SmallUI/ParticipateButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { DetailPropsInterface } from "../pdp-type/DetailPropsInterface";
import ShowPrice from "./elements/ShowPrice";

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
  // 판매자 데이터 불러오기
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (getData?.writer) {
          const response = await axios.get(`${serverIP}/api/user/page/name`, {
            params: { name: getData?.writer },
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.log("error getting writer data");
      }
    };
    fetchData();
  }, [getData?.writer]);
  // console.log(userData?.mannerPoint, name, location, image);

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
            {getData?.ongoing === false && (
              <div className="font-extrabold text-4xl my-9 text-pink-400">
                거래가 완료된 상품입니다
              </div>
              // FIXME: 못생김
            )}
            <SmallInfo time={getData?.time} />
            <Title title={getData?.title} id={getData?.id} />
            <ShowPrice getData={getData} />
            <Location location={getData?.location} />
          </>
        </div>
        <InfoBox>
          {userData && <UserInfo infoData={userData} />}
          <Tags tagArr={getData?.tag} />
        </InfoBox>
      </div>
      <div className="flex">
        {(activeType === "auction" || activeType === "group") && (
          <ParticipateButton />
        )}
        {getData?.ongoing === true ? <ChatButton /> : <InactiveChatButton />}
      </div>
    </RightBox>
  );
}
