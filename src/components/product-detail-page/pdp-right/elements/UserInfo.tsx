'use client';

import styled from 'styled-components';
import UserPic from '@/components/userpage/user/userinfo/UserPic';
import UserName from '@/components/userpage/user/userinfo/UserName';
import UserTemp from '@/components/userpage/user/UserTemp';
import UserAd from '@/components/userpage/user/userinfo/UserAd';
import Link from 'next/link';

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
      <Link href='/my'>
        <UserPic size={70} />
      </Link>
      <div>
        <Link href='/my'>
          <UserName />
        </Link>
        <UserAd />
      </div>
      <UserTemp />
    </UserInfoBox>
  );
}
