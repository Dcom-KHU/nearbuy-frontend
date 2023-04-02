"use client";

import styled from "styled-components";
import convertTime from "@/utils/convertTime";

const SmallInfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  font-size: 12px;
  color: rgba(33, 33, 36, 0.5);
  padding: 0 5px;
  p:first-child {
    margin-right: auto;
  }
`;

// 가장 위 작게 표시되는 정보들 (시간, 채팅수, 관심수, 조회수)
export default function SmallInfo({ time }: { time: number }) {
  const timeString = convertTime({ time });

  return (
    <SmallInfoBox>
      <p>{timeString}</p>
      <p>채팅 4</p>
      <p>관심 7</p>
      <p>조회 103</p>
    </SmallInfoBox>
  );
}
