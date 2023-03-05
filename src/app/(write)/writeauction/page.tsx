// 경매 글쓰기 페이지
// our-domain.com/writeauction

"use client";

import styled from "styled-components";
import ProductImage from "@/components/write/writepage/ProductImage";
import AuctionWriteForm from "@/components/write/writepage/writeauction/AuctionWriteForms";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
`;

export default function WriteAuction() {
  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">
          경매 글쓰기 페이지
        </div>
        <ProductImage />
        <AuctionWriteForm />
      </WriteSellBlock>
    </>
  );
}
