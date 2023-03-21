"use client";

import PdpLeft from "./pdp-left/PdpLeft";
import PdpRight from "./pdp-right/PdpRight";
import PdpBottom from "./pdp-bottom/PdpBottom";
import styled from "styled-components";
import { useEffect, useState } from "react";
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
export default function ProductDetailPage() {
  //const [id, setId] = useState(1);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("아이뒤: ", id);

  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/sale", // 필수
    params: { id: id ?? undefined },
  });

  /*
  //여기도.. 삽질의현장...인데 건진건없음
  const [post, setPost] = useState({});
  useEffect(() => {
    axios.get(`${serverIP}/api/post/sale`).then((data) => {
      console.log(data);
      // setPost(data.data.find((post) => post.id));
      axios({
        url: "https://test/api/cafe/list/today", // 통신할 웹문서
        method: "get", // 통신할 방식
        data: {
          // 인자로 보낼 데이터
          params: "id",
        },
      });
    });
  }, []);
  */

  useEffect(() => {
    // console.log(getData, getIsLoading, getError);
    console.log("getData결과아: ", getData);
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
