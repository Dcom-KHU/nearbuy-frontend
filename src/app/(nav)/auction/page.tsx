// 경매 페이지
// our-domain.com/auction
"use client";

import styled from "styled-components";
import PageSort from "../../../components/ui/PageSort";
import List from "@/components/list/List";
import ScrollTop from "@/components/ui/ScrollTop";

const SalePageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Auction() {
  return (
    <>
      <h1 className="text-center">경매 페이지</h1>
      <SalePageBlock>
        <PageSort />
        <List />
      </SalePageBlock>
      <ScrollTop />
    </>
  );
}
