"use client";

import styled from "styled-components";
import ProductLocation from "./productinfo/ProductLocation";
import ProductPrice from "./productinfo/ProductPrice";
import ProductTitle from "./productinfo/ProductTitle";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useGet, usePatch, usePost } from "@/hooks/useHttp";
import { AxiosHeaders } from "axios";
import { StringLiteral } from "typescript";

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

interface Itemp {
  id: number;
  detail: string;
  image: string[];
  location: string;
  ongoing: boolean;
  salePrice: number;
  tag: string[];
  time: boolean;
  title: string;
  type: string;
  writer: string;
  post: [
    {
      id: number;
      title: string;
      image: string[];
      location: string;
      type: string;
    }
  ];
}

// 게시글 설명
const ItemContent = () => {
  const nowState = useSelector((state: RootState) => state.activePage.active);

  const {
    data: getData,
    // data를 useGet을 통해서 구조분해할당을 통해 받아옴. data를 getData라는 이름으로 받아옴.
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/board",
    params: { type: "all" }, // 나머지 파라미터 일단 생략 (default값 있음)
  });

  useEffect(() => {
    console.log(getData, getIsLoading, getError);
    console.log("타이틀: ", getData?.title);
    console.log("디테일: ", getData?.detail);
    console.log("일단로그해봐");
  }, [getData, getIsLoading, getError]);

  const postDatas = getData?.post;

  console.log("^^^^^^^^^", nowState, postDatas);
  return (
    <>
      <div key={getData?.id}>
        <p>{getData?.id}</p>
        <p>{getData?.title}</p>
        <p>{getData?.writer}</p>
      </div>
      {postDatas?.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.location}</p>
        </div>
      ))}
      <ItemContentBox>
        <ProductTitle />
        <ProductPrice />
        <ProductLocation />
      </ItemContentBox>
    </>
  );
};
export default ItemContent;

/* 원래 const ItemContent=()={} 안에 암것도없고 리턴값만 있었음
  return (
    <ItemContentBox>
      <ProductTitle />
      <ProductPrice />
      <ProductLocation />
    </ItemContentBox>
  );
};
*/
