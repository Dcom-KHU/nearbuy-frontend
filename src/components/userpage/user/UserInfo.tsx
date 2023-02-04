'use client';

import styled from 'styled-components';

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #b69eff;
  border-radius: 8px;
`;

const UserInfo = () => {
  return (
    <UserInfoBox>
      <div>사진</div>
      <div>닉네임</div>
      <address>주소</address>
    </UserInfoBox>
  );
};
export default UserInfo;
