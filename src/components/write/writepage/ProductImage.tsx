"use client";

import styled from "styled-components";

const ProductImageBlock = styled.div`
  background-color: #fff;

  display: flex;
  align-items: center;
  padding: 10px;

  .image {
    border: solid lightgray 1px;
    min-width: 120px;
    width: 180px;
    //height: 180px;
    //min-height: auto;
    //padding-top: 13%;
    aspect-ratio: 1/1; // 크기 비율 고정
    margin: 0 10px;
  }
`;

// 마이 페이지 오른쪽 부분 (판내상품 ~ 거래후기)x
export default function ProductImage() {
  return (
    <ProductImageBlock>
      <div className="min-w-[110px] w-44 aspect-[1/1] bg-slate-200 rounded-lg mr-9 text-center align-middle">
        사진 올리기 버튼?
      </div>
      <div className="image">상품 사진 올 예정</div>
      <div className="image">상품 사진 올 예정</div>
      <div className="image">
        사실 사진 어디에 둬야할지 모르겠음ㅠㅠ 글보다 위에 두면 글이 너무 밑으로
        밀리는 느낌...?
      </div>
    </ProductImageBlock>
  );
}
