'use client';

import styled from 'styled-components';
import SmallInfo from './elements/SmallInfo';
import Tags from './elements/Tag/Tags';
import Title from './elements/Title';
import UserInfo from './elements/UserInfo';
import Location from './elements/Location';
import ChatButton from './elements/ChatButton';

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
  return (
    <RightBox>
      <div className='w-full'>
        <div>
          <SmallInfo />
          <Title />
          <div className='text-2xl py-3'>1,000,000원</div>
          <Location />
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
