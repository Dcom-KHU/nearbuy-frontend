'use client';

import styled from 'styled-components';
import SmallInfo from './elements/SmallInfo';
import Tags from './elements/Tag/Tags';
import Title from './elements/Title';
import UserInfo from './elements/UserInfo';
import Location from './elements/Location';
import ChatButton from './elements/ChatButton';
import ExchangeItems from './elements/EachDetail/ExchangeItems';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import AuctionDetail from './elements/EachDetail/AuctionDetail';
import Price from './elements/EachDetail/Price';

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
`;

// 상세페이지 정보 부분 (오른쪽 부분)
export default function PdpRight() {
  // 어떤 게시물이냐에 따라, 표시되는 내용 다르게 하기 위한 상태 관리
  const board = useSelector((state: RootState) => state.detailPage.sale); // 판매
  const exchange = useSelector((state: RootState) => state.detailPage.exchange); // 교환
  const share = useSelector((state: RootState) => state.detailPage.free); // 나눔
  const auction = useSelector((state: RootState) => state.detailPage.auction); // 경매
  const group = useSelector((state: RootState) => state.detailPage.group); // 공구

  return (
    <RightBox>
      <div className='w-full'>
        <div>
          <>
            <SmallInfo />
            <Title />
            {board && <Price />}
            {exchange && <ExchangeItems />}
            {share && (
              <div className='text-base py-3 text-gray-500'>무료 나눔</div>
            )}
            {auction && <AuctionDetail />}
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
