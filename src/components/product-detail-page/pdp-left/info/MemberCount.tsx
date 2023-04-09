"use client";

import { useEffect } from "react";
import { useGet } from "@/hooks/useHttp";
import { useSearchParams } from "next/navigation";
import styled from "styled-components";

const Box = styled.div`
  padding: 5px 10px;
  position: absolute;
  top: -34px;
  left: 0;
  color: royalblue;
`;

interface Itemp {
  totalPeople: number;
  currentPeople: number | null;
}

// 상세 페이지 사진 위에 공구 모집 인원 표시
export default function MemberCount() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/group",
    params: { id: id },
  });

  /*
  useEffect(() => {
    console.log("getData결과: ", getData);
  }, [getData, getIsLoading, getError]);
  */
  return (
    <Box>
      총 모집인원 [ {getData?.totalPeople} ]명 중 [{" "}
      {getData?.currentPeople ? getData?.currentPeople : "null임"} ]명 모였어요
    </Box>
  );
}
