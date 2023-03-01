'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import List from '../list/List';
import ListNav from '../list/ListNav';
import Menu from './menu/Menu';
import User from './user/User';

const MyPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  padding: 40px 5%;
  gap: 7%;

  // 작은 화면
  @media screen and (max-width: 707px) {
    padding: 20px 5%;
    flex-direction: column;
    gap: 50px;
  }
`;

// mypage
const MyPage = () => {
  const toggle = useSelector(
    (state: RootState) => state.myPageMenuToggle.toggle
  );
  return (
    <>
      <MyPageBox>
        <User />
        <Menu />
      </MyPageBox>
      {toggle && (
        <>
          <ListNav />
          <List />
        </>
      )}
    </>
  );
};
export default MyPage;
