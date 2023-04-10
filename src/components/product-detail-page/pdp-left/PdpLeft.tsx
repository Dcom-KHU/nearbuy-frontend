"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MemberCount from "./info/MemberCount";
import Time from "./info/Time";
import { serverIP } from "@/../secrets.json";

const LargeImageBox = styled.div`
  width: 400px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallImageBox = styled.div`
  display: flex;
  gap: 20px;
  img:hover {
    border: 1px solid black;
    cursor: pointer;
  }
`;

// 상세페이지 사진 부분 (왼쪽 부분)
export default function PdpLeft({
  imageData,
}: {
  imageData: string[] | undefined;
}) {
  // 사용자가 올린 사진들 -> default image로 설정
  const images = [
    { key: 0, url: "/images/block.svg" },
    { key: 1, url: "/images/setting.svg" },
    { key: 2, url: "/images/header/heart.svg" },
    { key: 3, url: "/images/header/user.svg" },
  ];

  const imgList =
    imageData?.map((url, index) => {
      return { key: index, url: `${serverIP}/api/image/${url}` };
    }) ?? images; // imgList가 undefined인 경우엔 default image 보여주기

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
        {/*<Image src={images[isHover].url} alt="Image" width={400} height={400} />*/}
        <LargeImageBox>
          <img
            src={imgList[isHover].url}
            alt="image"
            width={400}
            height={400}
          ></img>
        </LargeImageBox>
        {activeState === "auction" && <Time />}
        {activeState === "group" && <MemberCount />}
      </div>
      {/* FIXME:: GET 400 (bad request 뜸). 
        근데 img 쓰면.. Image 안써서 그런지 hover 됐을 때 처리가 좀 느림
        <Image
        src={`${serverUrl}/api/image/post-77/1681048568201-712374445771627.png`}
        alt="tempImg"
        width={100}
        height={100}
      />*/}
      <SmallImageBox>
        {imgList.map((image) => {
          return (
            <img
              key={image.key}
              src={image.url}
              alt="block"
              width={40}
              height={40}
              onMouseOver={() => {
                onMouthHandling(image.key);
              }}
            ></img>
          );
        })}
      </SmallImageBox>
    </section>
  );
}
