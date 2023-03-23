"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineAlert,
} from "react-icons/ai";

const NameBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  p:first-child {
    margin-right: auto;
    font-size: 30px;
  }
`;
const ToolBox = styled.div`
  display: flex;
  gap: 10px;
  img:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
const AiFillHeartCss = styled(AiFillHeart)`
  // 하트~
`;
const AiOutlineHeartCss = styled(AiOutlineHeart)`
  // 하트~
`;

// 상세페이지 제목, 그 옆의 도구들 (찜, 공유, 신고)
export default function Title({ title }: { title: string }) {
  const [isLike, setIsLike] = useState(false);
  const isLikeHandler = () => {
    setIsLike((prev) => !prev);
  };
  return (
    <NameBox>
      <p>{title}</p>
      <ToolBox>
        <button className="liked" onClick={isLikeHandler}>
          {isLike && <AiFillHeartCss color="dimgray" size={24} />}
          {!isLike && <AiOutlineHeartCss color="dimgray" size={24} />}
        </button>
        <AiOutlineShareAlt color="dimgray" size={24} />
        <AiOutlineAlert color="dimgray" size={25} />
      </ToolBox>
    </NameBox>
  );
}
