// 판/교/나 글쓰기 페이지
// our-domain.com/writesell

"use client";

import styled from "styled-components";
import ProductImage from "@/components/write/writepage/ProductImage";
import SellWriteForm from "@/components/write/writepage/writesell/SellWriteForms";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
`;

export default function WriteSell() {
  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">
          판매/교환/나눔 글쓰기 페이지
        </div>
        <ProductImage />
        <SellWriteForm />
      </WriteSellBlock>
    </>
  );
}
