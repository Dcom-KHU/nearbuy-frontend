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
export default function ItemContent({
  post,
}: {
  post: {
    title: string;
    id: number;
    image: string[];
    location: string;
    type: string;
    salePrice: number | null;
  };
}) {
  const nowState = useSelector((state: RootState) => state.activePage.active);
  console.log("ㅍ스트:", post);

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
  }, [getData, getIsLoading, getError]);

  const postDatas = getData?.post;
  console.log("^^^^^:", postDatas);

  return (
    <>
      <ItemContentBox>
        {/*postDatas?.map((post) => (
          <div key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.location}</p>
          </div>
        ))*/}
        <p>{post.title}</p>
        {post.salePrice != null ? <p>{post.salePrice}</p> : <p>NULL</p>}
        <p>{post.location}</p>
      </ItemContentBox>
    </>
  );
}

// export default ItemContent;

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
