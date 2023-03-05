// 공구 글쓰기 페이지
// our-domain.com/writegroup

"use client";

import styled from "styled-components";
import ProductImage from "@/components/write/writepage/ProductImage";
import GroupWriteForm from "@/components/write/writepage/writegroup/GroupWriteForms";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
`;

export default function WriteGroup() {
  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">
          공구 글쓰기 페이지
        </div>
        <ProductImage />
        <GroupWriteForm />
      </WriteSellBlock>
    </>
  );
}
