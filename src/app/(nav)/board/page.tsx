// 전체 페이지
// our-domain.com/board

"use client";

import styled from "styled-components";
import PageSort from "../../../components/ui/PageSort";
import List from "@/components/list/List";
import ScrollTop from "@/components/ui/ScrollTop";
import { useEffect } from "react";
import { useGet, usePatch, usePost } from "@/hooks/useHttp";
import { AxiosHeaders } from "axios";

const BoardPageBlock = styled.div`
  // background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Itemp {
  // 언니가 정의해둔 type들
  // API 리스폰스로 오는 값들을 결과값을 받아오는 값에 대해서 type을 적어줌(?)
  //  API call response 데이터 값의 형식을 정리해서 넣어줌.
  id: number;
  detail: string;
  image: string[];
  location: string;
  ongoing: boolean;
  salePrice: number;
  tag: string[];
  time: number;
  title: string;
  type: string;
  writer: string;
}

export default function Board() {
  const {
    data: getData,
    // data를 useGet을 통해서 구조분해할당을 통해 받아옴. data를 getData라는 이름으로 받아옴.
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    // useGet엔 RequestConfigType 오브젝트를 넣어줌.
    //판매 게시글 조회 할 땐 API 명세서 기준 url(필수)랑 request parameter 안에 id 넘겨줘야 함.
    url: "/api/post/board", // 필수
    params: { type: "all", page: 0, size: "9" },
  });

  return (
    <>
      <h1 className="text-center">전체 페이지</h1>
      <BoardPageBlock>
        <PageSort />
        <List />
      </BoardPageBlock>
      <ScrollTop />
    </>
  );
}
