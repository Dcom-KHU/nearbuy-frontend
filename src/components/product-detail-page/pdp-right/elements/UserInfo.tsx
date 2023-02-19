'use client';

import styled from 'styled-components';
import UserPic from '@/components/userpage/userinfo/UserPic';
import UserName from '@/components/userpage/userinfo/UserName';
import UserTemp from '@/components/userpage/UserTemp';
import UserAd from '@/components/userpage/userinfo/UserAd';

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  div:last-child {
    margin-left: auto;
    margin-right: 10px;
  }
`;

// user 정보들 (사진, 이름, 주소, 매너온도)
export default function UserInfo() {
  return (
    <UserInfoBox>
      <UserPic size={70} />
      <div>
        <UserName />
        <UserAd />
      </div>
      <UserTemp />
    </UserInfoBox>
  );
}
