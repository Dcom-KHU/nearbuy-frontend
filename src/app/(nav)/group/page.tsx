// 공구 페이지
// our-domain.com/group
"use client";

/*import styled from "styled-components";
import CardsContainer from "../board/CardsContainer";
import PageSort from "../board/PageSort";
import ScrollTop from "@/components/ui/ScrollTop";*/

import styled from "styled-components";
import PageSort from "../board/PageSort";
// import WriteToggle from '@/components/write/WriteToggle';
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

export default function Group() {
  return (
    <>
      <h1 className="text-center">공구 페이지</h1>
      <SalePageBlock>
        <PageSort />
        <List />
      </SalePageBlock>
      <ScrollTop />
    </>
  );
}
