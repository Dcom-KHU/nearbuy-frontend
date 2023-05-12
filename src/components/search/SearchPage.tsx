"use client";

import styled from "styled-components";
import SearchList from "./SearchList";
import ScrollTop from "@/components/ui/ScrollTop";
import { useSearchParams } from "next/navigation";

const SalePageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("q");

  return (
    <>
      <SalePageBlock>
        <SearchList searchKey={keyword} />
      </SalePageBlock>
      <ScrollTop />
    </>
  );
}
