"use client";

import PdpLeft from "../pdp-left/PdpLeft";
import PdpRight from "../pdp-right/PdpRight";
import PdpBottom from "../pdp-bottom/PdpBottom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useGet } from "@/hooks/useHttp";

const Box = styled.article`
  margin: 0 auto;
  width: 980px;
  display: flex;
  flex-direction: column;
`;
const PdpBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  padding: 50px 20px;
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
  time: boolean;
  title: string;
  type: string;
  writer: string;
}

// 상세 페이지 전체 (PDP)
export default function PDPforAuction() {
  const [id, setId] = useState(1);

  // get api call 하는 방법 예시
  const {
    // 이 세개는 일단 useHttp 내의 useGet에서 주니까 받아온겨~
    data: getData,
    // data를 useGet을 통해서 구조분해할당을 통해 받아옴. data를 getData라는 이름으로 받아옴.
    isLoading: getIsLoading,
    error: getError,
    // useGet 안에 Itemp로 타입을 넣어줄 수 있음. 없어도 동작하긴 하지만 있으면 나중에 쓸 일 있을테니까 일단 넣어줌. 웬만하면 넣는거 추천!
    // data의 형식을 여기에다 type으로 적어둔거임. API call response 데이터 값의 형식을 정리해서 넣어줌.
  } = useGet<Itemp>({
    // 판매 게시글 조회 API 기준 예시. API 명세서에 있는 url이 /api/post/sale임
    // useGet엔 RequestConfigType 오브젝트를 넣어줌.
    //판매 게시글 조회 할 땐 API 명세서 기준 url(필수)랑 request parameter 안에 id 넘겨줘야 함.
    url: "/api/post/sale", // 필수
    params: { id },
    // body를 넣어야 하는 경우 (예: feat/post-sale) 하단처럼 넣어줌. body는 data임!
    // data: {},
  });

  // 예시) useEffect를 통해 console.log 찍어보자
  // useGet 해서 가져와진 response 값을 찍는거. API 명세서의 response 예시 형태와 동일함
  useEffect(() => {
    console.log(getData, getIsLoading, getError);
    console.log("getData결과: ", getData);
  }, [getData, getIsLoading, getError]);

  return (
    <Box>
      <PdpBox>
        <PdpLeft />
        <PdpRight />
      </PdpBox>
      <PdpBottom />
    </Box>
  );
}
