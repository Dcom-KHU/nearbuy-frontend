"use client";

import styled from "styled-components";
import Image from "next/image";

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

// 상세페이지 제목, 그 옆의 도구들 (찜, 공유, 신고)
export default function Title({ title }: { title: string }) {
  return (
    <NameBox>
      <p>{title}</p>
      <ToolBox>
        <Image
          src="/images/header/heart.svg"
          alt="block"
          width={20}
          height={20}
        />
        <Image src="/images/share.svg" alt="block" width={20} height={20} />
        <Image src="/images/block.svg" alt="block" width={20} height={20} />
      </ToolBox>
    </NameBox>
  );
}
