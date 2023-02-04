'use client';

import styled from 'styled-components';
import UserEdit from './UserEdit';
import UserInfo from './UserInfo';
import UserTemp from './UserTemp';

const UserBox = styled.div`
  /* width: 40%; */
  width: 50%;
  min-width: 183px;
  max-width: 243px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;

const User = () => {
  return (
    <UserBox>
      <UserEdit />
      <UserInfo />
      <UserTemp />
    </UserBox>
  );
};
export default User;
