"use client";

import PdpLeft from "../pdp-left/PdpLeft";
import PdpRight from "../pdp-right/PdpRight";
import PdpBottom from "../pdp-bottom/PdpBottom";
import { DetailPropsInterface } from "./DetailPropsInterface";
import styled from "styled-components";
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
  gap: 84px;
  padding: 50px 20px;
`;

// 상세 페이지 전체 (PDP)
export default function PDPforExchange() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<DetailPropsInterface>({
    url: "/api/post/exchange",
    params: { id: id ?? undefined },
  });

  return (
    <Box>
      <PdpBox>
        <PdpLeft imageData={getData?.image} />
        <PdpRight getData={getData} />
      </PdpBox>
      <PdpBottom detail={getData?.detail!} />
    </Box>
  );
}
