"use client";

import styled from "styled-components";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import TellPostPrice from "./productinfo/TellPostPrice";

const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 3px;

  // 가격
  p:nth-child(2) {
    font-weight: 700;
  }
  // 장소
  p:last-child {
    font-size: 12px;
    color: rgba(33, 33, 36, 0.5);
  }
`;

// 게시글 설명
export default function ItemContent({
  post,
}: {
  post: {
    title: string;
    id: number;
    image: string;
    location: string;
    type: string;
    salePrice: number | null;
    groupPrice: number | null;
    currentPrice: number | null;
    totalPeople: number | null;
    deadline: number | null;
    ongoing: boolean;
    target: string | null;
  };
}) {
  const nowState = useSelector((state: RootState) => state.activePage.active);

  return (
    <>
      <ItemContentBox>
        <p>{post.title}</p>
        <TellPostPrice
          type={post.type}
          salePrice={post.salePrice}
          groupPrice={post.groupPrice}
          currentPrice={post.currentPrice}
        />
        <p>{post.location}</p>
      </ItemContentBox>
    </>
  );
}
