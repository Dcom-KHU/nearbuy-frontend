"use client";

import Image from "next/image";
import styled from "styled-components";
import { serverIP } from "@/../secrets.json";

type Props = {
  size?: number;
  image?: string;
};

const DefaultImageDeco = styled(Image)`
  padding: 8px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

const UserImageDeco = styled.img`
  padding: 8px;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

export default function UserPic({ size = 150, image }: Props) {
  if (image === null) {
    return (
      <DefaultImageDeco
        src="/images/default/default_user.png"
        alt="gloves"
        width={size}
        height={size}
        style={{ width: size, height: size }}
      />
    );
  } else {
    return (
      <UserImageDeco
        src={`${serverIP}/api/image/${image}`}
        alt="image"
        width={size}
        height={size}
      />
    );
  }
}
