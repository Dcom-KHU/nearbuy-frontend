'use client';

import styled from 'styled-components';
import SmallInfo from './elements/SmallInfo';
import Tags from './elements/Tag/Tags';
import Title from './elements/Title';
import UserInfo from './elements/UserInfo';
import Location from './elements/Location';
import ChatButton from './elements/ChatButton';
import ExchangeItems from './elements/ExchangeItems';
import { useSelector } from 'react-redux';
import detailPageSlice from '@/store/detailPage/detailPageSlice';
import { RootState } from '@/store/store';

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
  // 판매 게시글이냐 교환, 나눔이냐에 따라 밑에 표시되는 내용 다르게 하기 위한 상태 관리
  // TODO: 동적으로 변환 시키기
  const board = useSelector((state: RootState) => state.detailPage.board); // 판매
  const exchange = useSelector((state: RootState) => state.detailPage.exchange); // 교환
  const share = useSelector((state: RootState) => state.detailPage.share); // 나눔

  return (
    <RightBox>
      <div className='w-full'>
        <div>
          <>
            <SmallInfo />
            <Title />
            {board && <div className='text-2xl py-3'>1,000,000원</div>}
            {exchange && <ExchangeItems />}
            {share && (
              <div className='text-base py-3 text-gray-500'>무료 나눔</div>
            )}
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
