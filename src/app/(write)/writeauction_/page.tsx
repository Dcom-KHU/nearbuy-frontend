"use client";

import PostImageList from "@/components/write/writepage/common/ImageList";
import PostFormBlock from "@/components/write/writepage/common/PostFormBlock";
import customAxios from "@/utils/customAxios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const WriteAuction = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (d: any) => {
    console.log(d);

    const registeredData = {
      title: d.title,
      detail: d.detail,
      image: ["test.png"],
      location: d.location,
      tag: d.tag.split(" "),
      startPrice: d.startPrice,
      increasePrice: d.increasePrice,
      deadline: new Date(d.date).getTime(),
    };

    const result = await customAxios
      .post("/api/post/auction", registeredData, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJyb2xlIjoiVVNFUiIsImlhdCI6MTY3OTQxMzE0MywiZXhwIjoxNjc5NDEzNzQzfQ.gKrmIAQQkMTZ2hNdHKo6i-12zoqYc8wtpyvJjilCl1w",
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
        <div className="self-start pl-8 py-5 text-[20px]">경매 포스팅</div>

        {/* 이미지 리스트 */}
        <PostImageList register={register} />

        {/* form */}
        <PostFormBlock register={register} type="auction" />
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

export default WriteAuction;
