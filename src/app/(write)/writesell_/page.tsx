"use client";

import PostImageList from "@/components/write/writepage/common/ImageList";
import PostFormBlock from "@/components/write/writepage/common/PostFormBlock";
import customAxios from "@/utils/customAxios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

// 판매/교환/나눔 카테고리
const SALE = "sale";
const EXCHANGE = "exchange";
const FREE = "free";

const WriteSell = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState<string>(SALE);

  const submitHandler = async (d: any) => {
    const registeredData = {
      title: d.title,
      detail: d.detail,
      image: ["test.png"],
      location: d.location,
      tag: d.tag.split(" "),
      salePrice: JSON.parse(d.salePrice),
      target: d.target,
    };

    let url: string = "/api/post/sale";
    switch (category) {
      case SALE:
        url = "/api/post/sale";
      case EXCHANGE:
        url = "/api/post/exchange";
      case FREE:
        url = "/api/post/free";
    }

    const result = await customAxios
      .post(url, registeredData, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3OTQxNzQ5MSwiZXhwIjoxNjc5NDE4MDkxfQ.rTdCfAdHoEgJ82e8Lyxd7MM3jnQEMBvBQUyjPtJAADA",
        },
      })
      .then(data => {
        console.log(data);
        router.replace("/board");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">
          판매/교환/나눔 포스팅
        </div>

        {/* 이미지 리스트 */}
        <PostImageList register={register} />

        {/* form */}
        <PostFormBlock
          register={register}
          type="sell"
          category={category}
          setCategory={setCategory}
        />
        <form
          className="m-auto"
          onSubmit={handleSubmit(submitHandler, async d => console.log(d))}
        >
          <button
            className="min-w-[100px] bg-[#b8ddfd] p-[13px] border-[1px] rounded-md text-gray-600 hover:bg-sky-300"
            type="submit"
          >
            등록하기
          </button>
        </form>
      </WriteSellBlock>
    </>
  );
};

export default WriteSell;
