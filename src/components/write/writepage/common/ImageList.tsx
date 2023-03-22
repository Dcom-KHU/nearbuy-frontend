"use client";

import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";

const ProductImageBlock = styled.div`
  // background-color: pink;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .tempImg {
    border: solid lightgray 1px;
    min-width: 150px;
    width: 180px;
    //height: 180px;
    //min-height: auto;
    //padding-top: 13%;
    aspect-ratio: 1/1; // 크기 비율 고정
    margin: 0 10px;
  }
`;

interface PostFormBlockProps {
  register: UseFormRegister<FieldValues>;
  images: File[] | undefined;
  setImages: Function;
}

// 글쓰기 - 이미지 리스트
// eslint-disable-next-line react/display-name
const PostImageList = React.forwardRef((props: PostFormBlockProps, ref) => {
  const { register, images, setImages } = props;

  const changeHandler = (files: FileList | null) => {
    const imageArr = files ? Array.from(files) : undefined;
    imageArr &&
      setImages(prev => {
        console.log(prev);
        return prev ? [...prev, ...imageArr] : [...imageArr];
      });
  };

  return (
    <ProductImageBlock>
      {/* 이미지 업로드 버튼 */}
      <div>
        <input
          id="uploadImage"
          type="file"
          accept="image/gif, image/jpeg, image/png"
          multiple
          hidden
          onChange={e => changeHandler(e.target.files)}
        />
        <button className="min-w-[110px] w-44 aspect-[1/1] bg-slate-200 rounded-lg mr-9 text-center align-middle cursor-pointer">
          <label htmlFor="uploadImage" className="w-full h-full">
            사진 올리기 버튼
          </label>
        </button>
      </div>

      {/* 업로드한 이미지 사진들 */}
      <div className="w-[500px] h-[180px] border-2 overflow-auto flex">
        <div className="tempImg">상품 사진 올 예정</div>
        <div className="tempImg">상품 사진 올 예정</div>
        <div className="tempImg">
          사실 사진 어디에둬야할지 모르겠음ㅠㅠ 글보
        </div>
        <div className="tempImg">사실 사진 어디에둬야할지 모르겠음ㅠ</div>
      </div>
    </ProductImageBlock>
  );
});

export default PostImageList;
