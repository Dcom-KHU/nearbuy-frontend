"use client";

import PdpLeft from "../pdp-left/PdpLeft";
import PdpRight from "../pdp-right/PdpRight";
import PdpBottom from "../pdp-bottom/PdpBottom";
import styled from "styled-components";
import { useEffect } from "react";
import { useGet } from "@/hooks/useHttp";
import { useSearchParams } from "next/navigation";
import { DetailPropsInterface } from "./DetailPropsInterface";

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
export default function PDPforSale() {
  //const [id, setId] = useState(1);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<DetailPropsInterface>({
    url: "/api/post/sale",
    params: { id: id ?? undefined },
  });

  /*
  useEffect(() => {
    // console.log(getData, getIsLoading, getError);
    console.log("getData결과: ", getData);
  }, [getData, getIsLoading, getError]);
  */

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
