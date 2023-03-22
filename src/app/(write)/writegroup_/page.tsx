// 공구 글쓰기 페이지
// our-domain.com/writegroupbuying (추후 변경 예정)

"use client";

import styled from "styled-components";
import ProductImage from "@/components/write/writepage/ProductImage";
import GroupWriteForm from "@/components/write/writepage/writegroup/GroupWriteForms";
import { useForm } from "react-hook-form";
import PostImageList from "@/components/write/writepage/common/ImageList";
import PostFormBlock from "@/components/write/writepage/common/PostFormBlock";
import customAxios from "@/utils/customAxios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export default function WriteGroup() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  // 이미지 파일
  const [images, setImages] = useState<File[]>();

  // 거래 희망 장소
  const [locations, setLocations] = useState<string[]>();

  const submitHandler = async (d: any) => {
    console.log(images);

    const registeredData = {
      title: d.title,
      detail: d.detail,
      image: ["test.png"],
      location: d.location,
      tag: d.tag.split(" "),
      groupPrice: d.price,
      totalPeople: d.recruitingNum,
      distribute: d.distribute,
      day: [new Date(d.date).getTime()], // 추후 n개 input을 리스트형식으로 이미 바꾸기
      // image: images,
    };

    const result = await customAxios
      .post("/api/post/group", registeredData, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3OTQ5MDIzNCwiZXhwIjoxNjc5NDkwODM0fQ.QOMskGhTx_uD57LV_wN3Qm7rrCbcm6ZpIal9l6-mzxA",
          // "Content-Type": "multipart/form-data;",
        },
      })
      .then(data => {
        console.log(data);
        // router.replace("/board");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">공동구매 포스팅</div>

        {/* 이미지 리스트 */}
        <PostImageList
          register={register}
          images={images}
          setImages={setImages}
        />

        {/* form */}
        <PostFormBlock register={register} type="group" />
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
}
