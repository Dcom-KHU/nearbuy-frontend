"use client";

import styled from "styled-components";

interface BoxProps {
  type: "group" | "auction";
  totalPeople: number | null;
  deadline: number | null;
}

const Box = styled.div<BoxProps>`
  position: absolute;
  left: 15px;
  top: 15px;
  background-color: ${(props) =>
    props.type === "group" ? "#90bcff" : "#ffa1a1"};
  padding: 0 10px;
  min-width: 57px;
  text-align: center;
`;

// 게시글 리스트에서 각 게시글 위에 표시될 작은 정보 (경매와 공구에서 각각 남은 시간과 모집 인원)
export default function SmallInfoForListItem({
  type,
  totalPeople,
  deadline,
}: BoxProps) {
  /* 지금 auction 게시물 deadline 값이 invalid하고 totalPeople 옆에 들어갈 '현재 참여중인 인원'에 대한 값이 없음*/
  if (type === "auction") {
    return (
      <Box type={type} totalPeople={totalPeople} deadline={deadline}>
        D - <span>시간</span>
      </Box>
    );
  } else if (type === "group") {
    return (
      <Box type={type} totalPeople={totalPeople} deadline={deadline}>
        <span>...</span> / <span>{totalPeople}</span>
      </Box>
    );
  } else {
    return null;
  }
}
