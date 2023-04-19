// 디테일 페이지 내 사진 띄우기
"use client";

import { RootState } from "@/store/store";
import Image from "next/image";
import { useState } from "react";
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
  const defaultImage = [
    { key: 0, url: "/images/default/default_image.png" },
    { key: 1, url: "/images/setting.svg" },
  ];

  const imgList =
    imageData?.map((url, index) => {
      return { key: index, url: `${serverIP}/api/image/${url}` };
    }) ?? defaultImage; // imgList가 undefined인 경우엔 default image 보여주기

  const [isHover, setIsHover] = useState(0);
  const [largeImageError, setLargeImageError] = useState(false);
  const [smallImageError, setSmallImageError] = useState(
    new Array(imgList.length).fill(false)
  );

  const onMouthHandling = (key: number) => {
    setIsHover(key);
  };
  const activeState = useSelector(
    (state: RootState) => state.activePage.active
  );
  const handleLargeImageError = () => {
    setLargeImageError(true);
  };
  const handleSmallImageError = (index: number) => {
    const newSmallImageError = [...smallImageError];
    newSmallImageError[index] = true;
    setSmallImageError(newSmallImageError);
  };

  return (
    <section className="flex flex-col w-2/5 gap-5">
      <div className="relative">
        {/*<Image src={defaultImage[isHover].url} alt="Image" width={400} height={400} />*/}
        <LargeImageBox>
          {imageData?.length ? (
            <img
              src={
                largeImageError
                  ? "/images/default/error_image.png"
                  : imgList[isHover].url
              }
              alt="image"
              width={400}
              height={400}
              onError={handleLargeImageError}
            ></img>
          ) : (
            <Image
              src={defaultImage[isHover].url}
              alt="Image"
              width={400}
              height={400}
            />
          )}
        </LargeImageBox>
        {activeState === "auction" && <Time />}
        {activeState === "group" && <MemberCount />}
      </div>
      {/* FIXME:: img 쓰면 Image 안써서 그런지 hover 됐을 때 처리가 좀 느림*/}
      <SmallImageBox>
        {imgList.map((image, index) => {
          return (
            <img
              key={image.key}
              src={
                smallImageError[index]
                  ? "/images/default/error_image.png"
                  : image.url
              }
              alt="block"
              width={40}
              height={40}
              onMouseOver={() => {
                onMouthHandling(image.key);
              }}
              onError={() => {
                handleSmallImageError(index);
              }}
            ></img>
          );
        })}
      </SmallImageBox>
    </section>
  );
}
