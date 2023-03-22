"use client";

import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";

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

  const [prevImgURLArr, setPrevImgURLArr] = useState<string[]>([]);

  const prevImgURLAdd = (imgArr: File[]) => {
    // 새로운 imgFile에 대한 url 담는 arr
    let newPrevImgURLArr: string[] = [];
    imgArr?.forEach(img => {
      const imgURL = URL.createObjectURL(img);
      newPrevImgURLArr.push(imgURL);
    });

    // state 업데이트
    setPrevImgURLArr(prev => {
      return [...prev, ...newPrevImgURLArr];
    });
  };

  const changeHandler = (files: FileList | null) => {
    const imageArr = files ? Array.from(files) : undefined;
    // 미리보기 이미지 url 추가
    imageArr && prevImgURLAdd(imageArr);

    imageArr &&
      setImages((prev: File[]) => {
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
        {prevImgURLArr.map((url, i) => {
          return (
            <Image
              key={i}
              src={url}
              alt="사진"
              width={180}
              height={180}
              className="border object-contain w-[180px] min-w-[120px] aspect-square my-0 mx-[10px]"
            />
          );
        })}
      </div>
    </ProductImageBlock>
  );
});

export default PostImageList;
