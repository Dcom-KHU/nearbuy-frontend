"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MemberCount from "./info/MemberCount";
import Time from "./info/Time";
import { serverIP } from "@/../secrets.json";

const SmallImageBox = styled.div`
  display: flex;
  gap: 20px;
  img:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;

// 상세페이지 사진 부분 (왼쪽 부분)
export default function PdpLeft({}: {}) {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  // 사용자가 올린 사진들
  const images = [
    { key: 0, url: "/images/block.svg" },
    { key: 1, url: "/images/setting.svg" },
    { key: 2, url: "/images/header/heart.svg" },
    { key: 3, url: "/images/header/user.svg" },
  ];
  const [isHover, setIsHover] = useState(0);
  const onMouthHandling = (key: number) => {
    setIsHover(key);
  };
  const activeState = useSelector(
    (state: RootState) => state.activePage.active
  );
  return (
    <section className="flex flex-col w-2/5 gap-5">
      <div className="relative">
        <Image src={images[isHover].url} alt="Image" width={400} height={400} />
        {activeState === "auction" && <Time />}
        {activeState === "group" && <MemberCount />}
      </div>
      {/* FIXME:: GET 400 (bad request 뜸)
        <Image
        src={`${serverUrl}/api/image/post-77/1681048568201-712374445771627.png`}
        alt="tempImg"
        width={100}
        height={100}
      />*/}
      <img
        src={`${serverIP}/api/image/post-77/1681048568201-712374445771627.png`}
      ></img>

      <SmallImageBox>
        {images.map((image) => {
          return (
            <Image
              key={image.key}
              src={image.url}
              alt="block"
              width={40}
              height={40}
              onMouseOver={() => {
                onMouthHandling(image.key);
              }}
            />
          );
        })}
      </SmallImageBox>
    </section>
  );
}
