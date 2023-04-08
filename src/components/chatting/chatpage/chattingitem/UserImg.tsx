/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import styled from "styled-components";
import secrets from "../../../../../secrets.json";

type Props = {
  size?: number;
  image?: string;
};

interface IUserImgProps {
  size: number;
  image?: string | undefined;
}

const ImageDeco = styled.img`
  padding: 10px;
  border-radius: 50%;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

export default function UserImg(props: IUserImgProps) {
  const { size = 150, image = "" } = props;

  return (
    <img
      src={
        image
          ? `${secrets.serverIP}/api/image/${image}`
          : `images/for-demo/kitty.jpg`
      }
      alt="userImg"
      width={size}
      height={size}
    />
  );
}
