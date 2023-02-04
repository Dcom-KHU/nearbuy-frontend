'use client';

import styled from 'styled-components';
import List from '../list/List';
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
  return (
    <>
      <MyPageBox>
        <User />
        <Menu />
      </MyPageBox>
      <List />
    </>
  );
};
export default MyPage;
