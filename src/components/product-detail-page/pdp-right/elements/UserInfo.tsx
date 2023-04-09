"use client";

import styled from "styled-components";
import UserPic from "@/components/userpage/user/userinfo/UserPic";
import UserName from "@/components/userpage/user/userinfo/UserName";
import UserTemp from "@/components/userpage/user/UserTemp";
import UserAd from "@/components/userpage/user/userinfo/UserAd";
import Link from "next/link";

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 30px; */
  div:last-child {
    margin-left: auto;
    margin-right: 10px;
  }
`;
interface UserInfoProps {
  infoData?: {
    name?: string;
    image?: string;
    location?: string;
    mannerPoint?: number;
  };
}
// user 정보들 (사진, 이름, 주소, 매너온도)
export default function UserInfo({ infoData }: UserInfoProps) {
  const { name, image, location, mannerPoint } = infoData ?? {};
  console.log("this is ,,, ", infoData);
  console.log("mannerPoint,,, ", mannerPoint);

  return (
    <UserInfoBox>
      <Link href="/my">
        <UserPic size={70} image={image} />
      </Link>
      <div>
        <Link href="/my">
          <UserName name={name} />
        </Link>
        <UserAd ad={location} />
      </div>
      <UserTemp mannerPoint={mannerPoint} />
    </UserInfoBox>
  );
}
