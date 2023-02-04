'use client';

import styled from 'styled-components';
import Menu from './menu/Menu';
import User from './user/User';
import UserInfo from './user/UserInfo';

const MyPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 85%;
  padding: 40px 5%;
  gap: 10%;
`;

const MyPage = () => {
  return (
    <MyPageBox>
      <User />
      <Menu />
    </MyPageBox>
  );
};
export default MyPage;
