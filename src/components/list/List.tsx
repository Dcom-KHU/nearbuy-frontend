'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import EachList from './EachList';
import ListItem from './ListItem';

const ListItemBox = styled.div`
  width: 80%;
  max-width: 1200px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  justify-items: center;
`;

// ************************************************************************************************
// Type 'string' is not assignable to type 'keyof DetailPageState'.ts(2322)
// ListItem.tsx(39, 3): The expected type comes from property 'nowState'
// which is declared here on type 'IntrinsicAttributes & { nowState: keyof DetailPageState; }'
// ************************************************************************************************
// 해당 오류는 nowState 프로퍼티에 keyof DetailPageState 타입을 지정해두었지만, DUMMY_DATA 배열의 nowState 값은 string 형태이기 때문에 발생하는 오류입니다.
// 해결 방법으로는 nowState 프로퍼티의 타입을 string으로 지정하거나, DUMMY_DATA의 nowState 값을 DetailPageState 타입의 enum 값으로 변경하는 방법이 있습니다.
enum NowState {
  Board = 'board',
  Sale = 'sale',
  Exchange = 'exchange',
  Free = 'free',
  Auction = 'auction',
  Group = 'group',
}
// 게시글 더미 데이터
export const DUMMY_DATA = [
  { id: 1, nowState: NowState.Sale },
  { id: 2, nowState: NowState.Exchange },
  { id: 3, nowState: NowState.Free },
  { id: 4, nowState: NowState.Auction },
  { id: 5, nowState: NowState.Group },
  { id: 6, nowState: NowState.Group },
  { id: 7, nowState: NowState.Exchange },
  { id: 8, nowState: NowState.Sale },
  { id: 9, nowState: NowState.Auction },
  { id: 10, nowState: NowState.Auction },
  { id: 11, nowState: NowState.Group },
  { id: 12, nowState: NowState.Free },
  { id: 13, nowState: NowState.Exchange },
  { id: 14, nowState: NowState.Exchange },
  { id: 15, nowState: NowState.Free },
  { id: 16, nowState: NowState.Group },
  { id: 17, nowState: NowState.Sale },
  { id: 18, nowState: NowState.Group },
  { id: 19, nowState: NowState.Auction },
  { id: 20, nowState: NowState.Group },
  { id: 21, nowState: NowState.Exchange },
  { id: 22, nowState: NowState.Auction },
  { id: 23, nowState: NowState.Auction },
  { id: 24, nowState: NowState.Free },
  { id: 25, nowState: NowState.Group },
  { id: 26, nowState: NowState.Group },
  { id: 27, nowState: NowState.Auction },
  { id: 28, nowState: NowState.Group },
  { id: 29, nowState: NowState.Exchange },
  { id: 30, nowState: NowState.Free },
  { id: 31, nowState: NowState.Free },
  { id: 32, nowState: NowState.Group },
  { id: 33, nowState: NowState.Sale },
  { id: 34, nowState: NowState.Group },
  { id: 35, nowState: NowState.Auction },
  { id: 36, nowState: NowState.Exchange },
  { id: 37, nowState: NowState.Group },
  { id: 38, nowState: NowState.Free },
  { id: 39, nowState: NowState.Group },
  { id: 40, nowState: NowState.Sale },
  { id: 41, nowState: NowState.Free },
  { id: 42, nowState: NowState.Group },
  { id: 43, nowState: NowState.Auction },
  { id: 44, nowState: NowState.Auction },
  { id: 45, nowState: NowState.Free },
  { id: 46, nowState: NowState.Auction },
  { id: 47, nowState: NowState.Exchange },
];
// 게시물 목록들
const List = () => {
  const nowState = useSelector((state: RootState) => state.activePage.active);
  const isBoard = nowState === 'board';
  return (
    <ListItemBox>
      {isBoard ? (
        <>
          {DUMMY_DATA.map((data) => (
            <ListItem key={data.id} nowState={data.nowState} />
          ))}
        </>
      ) : (
        <EachList />
      )}
    </ListItemBox>
  );
};
export default List;
