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
import GroupDetail from './elements/EachDetail/GroupDetail';
import { useGet } from '@/hooks/useHttp';

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
  image: string;
  location: string;
  mannerPoint: number;
  name: string;
}
// 상세페이지 정보 부분 (오른쪽 부분)
export default function PdpRight() {
  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: '/api/user/page',
    // TODO: params 동적으로 바꾸기.
    params: { id: 1 },
  });

  // 어떤 게시물이냐에 따라, 표시되는 내용 다르게 하기 위한 상태 관리
  const activeType = useSelector((state: RootState) => state.activePage.active);
  // FIXME: 해당 상세 페이지에서 새로고침 누르면, 상태 사라져서, 내용물 사라짐
  return (
    <RightBox>
      <div className='w-full'>
        <div>
          <>
            <SmallInfo />
            <Title />
            {activeType === 'sale' && <Price />}
            {activeType === 'exchange' && <ExchangeItems />}
            {activeType === 'free' && (
              <div className='text-base py-3 text-gray-500'>무료 나눔</div>
            )}
            {activeType === 'auction' && <AuctionDetail />}
            {activeType === 'group' && <GroupDetail />}
            <Location />
          </>
        </div>
        <InfoBox>
          <UserInfo infoData={getData} />
          <Tags />
        </InfoBox>
      </div>
      <ChatButton />
    </RightBox>
  );
}
