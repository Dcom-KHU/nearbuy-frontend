"use client";

import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import Image from "next/image";
import secrets from "../../../../../../secrets.json";

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
  initialImgs: string[];
  setInitialImgs: Function;
  newImgs: FileList | undefined;
  setNewImgs: Function;
  newPrevImgs: string[];
  setNewPrevImgs: Function;
  deleteImgs: number[];
  setDeleteImgs: Function;
  initialImgDict: {
    [url: string]: number;
  };
}

// eslint-disable-next-line react/display-name
const PostImageListUpdate = React.forwardRef(
  (props: PostFormBlockProps, ref) => {
    const {
      initialImgs,
      setInitialImgs,
      newImgs,
      setNewImgs,
      newPrevImgs,
      setNewPrevImgs,
      deleteImgs,
      setDeleteImgs,
      initialImgDict,
    } = props;

    const prevImgURLAdd = (imgArr: File[]) => {
      // 새로운 imgFile에 대한 url 담는 arr
      let newPrevImgURLArr: string[] = [];
      imgArr?.forEach(img => {
        const imgURL = URL.createObjectURL(img);
        newPrevImgURLArr.push(imgURL);
      });

      // state 업데이트
      setNewPrevImgs((prev: any) => {
        return [...prev, ...newPrevImgURLArr];
      });
    };

    const uploadImgHandler = (files: FileList | null) => {
      const imageArr = files ? Array.from(files) : undefined;
      // 미리보기 이미지 url 추가
      imageArr && prevImgURLAdd(imageArr);

      if (files) {
        const formData = new FormData();

        newImgs &&
          Array.from(newImgs).forEach(file => {
            formData.append("image", file);
          });

        for (let i = 0; i < files.length; i++) {
          formData.append("image", files[i]);
        }
        setNewImgs(formData);
      }
    };

    const deleteImage = (id: number, type: string, url?: string) => {
      if (type === "origin" && initialImgs && url) {
        setDeleteImgs((prev: any) => {
          let idx = initialImgDict[url];
          return [...prev, idx];
        });

        const filteredPrevImgs = initialImgs.filter((v, i) => i !== id);
        setInitialImgs(filteredPrevImgs);
      } else if (type === "new") {
        const formData = new FormData();
        newImgs &&
          Array.from(newImgs)
            .filter((file, i) => i != id)
            .forEach(file => formData.append("image", file));
        setNewImgs(formData);

        const filteredPrevImgs = newPrevImgs.filter((v, i) => i !== id);
        setNewPrevImgs(filteredPrevImgs);
      }
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
            onChange={e => uploadImgHandler(e.target.files)}
          />
          <button className="min-w-[110px] w-44 aspect-[1/1] bg-slate-200 rounded-lg mr-9 text-center align-middle cursor-pointer">
            <label htmlFor="uploadImage" className="w-full h-full">
              사진 올리기 버튼
            </label>
          </button>
        </div>

        {/* 업로드한 이미지 사진들 */}
        <div className="w-[500px] h-[180px] border-2 overflow-auto flex">
          {/* 처음 파일 이름이 있다면 표시 */}
          {initialImgs &&
            initialImgs.map((url, i) => {
              return (
                // eslint-disable-next-line react/jsx-key, @next/next/no-img-element
                <img
                  key={`initail-${i}`}
                  src={`${secrets.serverIP}/api/image/${url}`}
                  alt="사진"
                  width={180}
                  height={180}
                  className="border object-contain w-[180px] min-w-[120px] aspect-square my-0 mx-[10px]"
                  onClick={() => {
                    deleteImage(i, "origin", url);
                  }}
                />
              );
            })}
          {newPrevImgs[0] &&
            newPrevImgs.map((url, i) => {
              return (
                // eslint-disable-next-line react/jsx-key, @next/next/no-img-element
                <img
                  key={`new-${i}`}
                  src={url}
                  alt="사진"
                  width={180}
                  height={180}
                  className="border object-contain w-[180px] min-w-[120px] aspect-square my-0 mx-[10px]"
                  onClick={() => {
                    deleteImage(i, "new");
                  }}
                />
              );
            })}
        </div>
      </ProductImageBlock>
    );
  }
);

export default PostImageListUpdate;
