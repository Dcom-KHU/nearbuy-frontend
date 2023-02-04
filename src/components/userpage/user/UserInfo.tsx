'use client';

import Image from 'next/image';
import styled from 'styled-components';

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid #b69eff;
  border-radius: 8px;
  padding: 20px;

  div {
    font-size: 20px;
    font-weight: bold;
  }
  address {
    font-size: 12px;
  }
`;
const ImageDeco = styled(Image)`
  padding: 0 10px 10px 10px;
  border-radius: 50%;
  overflow: hidden;
`;

// 유저 프로필
const UserInfo = () => {
  return (
    <UserInfoBox>
      <ImageDeco
        src='/images/for-demo/kitty.jpg'
        alt='kitty'
        width={150}
        height={150}
      />
      <div>키티키티키팈</div>
      <address>경기도 고양시</address>
    </UserInfoBox>
  );
};
export default UserInfo;
