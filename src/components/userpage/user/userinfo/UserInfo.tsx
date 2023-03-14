'use client';

import UserAd from './UserAd';
import styled from 'styled-components';
import UserPic from './UserPic';
import UserName from './UserName';

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
interface UserInfoProps {
  infoData?: {
    name?: string;
    location?: string;
    image?: string;
  };
}
// 유저 프로필
const UserInfo = ({ infoData }: UserInfoProps) => {
  const { name, location, image } = infoData ?? {};

  return (
    <UserInfoBox>
      <UserPic image={image} />
      <UserName name={name} />
      <UserAd ad={location} />
    </UserInfoBox>
  );
};
export default UserInfo;
