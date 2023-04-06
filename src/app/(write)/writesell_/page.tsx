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

  // 이미지 파일
  const [images, setImages] = useState<File[]>([]);

  // 거래 희망 장소
  const [locations, setLocations] = useState<string[]>([]);

  const submitHandler = async (d: any) => {
    const registeredData = {
      title: d.title,
      detail: d.detail,
      location: locations[0],
      tag: d.tag.split(" "),
      salePrice: d.salePrice ? JSON.parse(d.salePrice) : "",
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

    await customAxios
      .post(url, registeredData)
      .then(async data => {
        // 이미지 가공
        const formData = new FormData();
        if (images) {
          for (let i = 0; i < images.length; i++) {
            formData.append("image", images[i]);
          }
        }

        // 이미지 업로드
        await customAxios
          .post("/api/image/post", formData, {
            headers: {
              "Content-Type": "multipart/form-data;",
            },
            params: {
              id: data.data.postId,
            },
          })
          .then(data => {
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          });

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
        <PostImageList
          register={register}
          images={images}
          setImages={setImages}
        />

        {/* form */}
        <PostFormBlock
          register={register}
          type="sell"
          category={category}
          locations={locations}
          setLocations={setLocations}
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
