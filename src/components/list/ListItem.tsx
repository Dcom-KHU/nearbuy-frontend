"use client";

import Link from "next/link";
import styled from "styled-components";
import ItemContent from "./ItemContent";
import SmallInfoForListItem from "../product-detail-page/pdp-left/info/SmallInfoForListItem";
import ProductMainPicture from "./productinfo/ProductMainPicture";
import LikePost from "../product-detail-page/pdp-right/elements/LikePost";
import CheckIfWriter from "../product-detail-page/pdp-right/elements/CheckIfWriter";

const ListItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding: 15px;
  border-radius: 3px;

  &:hover {
    transition: 0.125s ease-in;
    transform: scale(1.01); // 없어도됨
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.14);
  }
`;

const HeartCSS = styled.div`
  position: absolute;
  bottom: 100px;
  right: 19px;
`;

interface Itemp {
  nowState: string | null;
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
    currentPeople: number | null;
    deadline: number | null;
    ongoing: boolean;
    target: string | null;
  };
}

// 게시글 목록에서 작게 보여지는 게시글 한 개 (미리보기 카드)
export default function ListItem({ nowState, post }: Itemp) {
  const isAuctionOrGroup = nowState === "auction" || nowState === "group";
  const isWriter = CheckIfWriter({ id: post.id });

  // console.log("잘넘어오니?", post);

  return (
    <ListItemBox>
      {isAuctionOrGroup && (
        <SmallInfoForListItem
          type={nowState}
          totalPeople={post.totalPeople}
          deadline={post.deadline}
          currentPeople={post.currentPeople}
        />
      )}
      <Link href={`/${nowState}/detail/?id=${post.id}`}>
        <ProductMainPicture cardImg={post.image} />
        <ItemContent post={post} />
      </Link>
      {isWriter === false && (
        <HeartCSS>
          <LikePost id={post.id} />
        </HeartCSS>
      )}
    </ListItemBox>
  );
}
