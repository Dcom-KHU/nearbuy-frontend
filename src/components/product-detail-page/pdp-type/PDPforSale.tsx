/*
해야할것: 
- smallInfo쪽 시간, 채팅, 조회수, 관심 수
- 찜 기능
- 신고 기능, 채팅하기 연결
- userInfo
- 게시글 태그
- 이미지
*/

"use client";

import PdpLeft from "../pdp-left/PdpLeft";
import PdpRight from "../pdp-right/PdpRight";
import PdpBottom from "../pdp-bottom/PdpBottom";
import styled from "styled-components";
import { useEffect } from "react";
import { useGet } from "@/hooks/useHttp";
import { useSearchParams } from "next/navigation";

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
export default function PDPforSale() {
  //const [id, setId] = useState(1);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/sale", // 필수
    params: { id: id },
  });

  useEffect(() => {
    // console.log(getData, getIsLoading, getError);
    console.log("getData결과: ", getData);
    console.log("타입", typeof getData);
  }, [getData, getIsLoading, getError]);

  return (
    <Box>
      <PdpBox>
        <PdpLeft />
        <PdpRight getData={getData} />
      </PdpBox>
      <PdpBottom detail={getData?.detail} />
    </Box>
  );
}
