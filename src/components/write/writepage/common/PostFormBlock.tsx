"use client";

import React, { useEffect } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import styled from "styled-components";
import LeftFormContainer from "../LeftFormContainer";
import RightFormContainer from "../RightFormContainer";
import GroupLeftForm from "../writegroup/GroupLeftForm";
import GroupRightForm from "../writegroup/GroupRIghtForm";
import GetLocation from "./GetLocation";
import { PostMainInput } from "./PostMainInput";

const SellWriteFormBlock = styled.div`
  // background-color: gainsboro;

  display: flex;
  justify-content: center;

  gap: 30px;
  padding: 10px;
  padding-top: 20px;
`;

const CategorySelect = styled.input`
  padding: 150px 10px;

  input[type="radio"] {
    display: inline-block;
    cursor: pointer;
    height: 24px;
    width: 90px;
    border: 1px solid #333;
    line-height: 24px;
    text-align: center;
    font-weight: bold;
    font-size: 13px;
  }
`;

interface PostFormBlockProps {
  register: UseFormRegister<FieldValues>;
  type: string;
  category?: string;
  setCategory?: Function;
  locations: string[];
  setLocations: Function;
}

// 판/교/나 카테고리
const sellCategory = [
  { key: 1, value: "sale", kor: "판매" },
  { key: 2, value: "exchange", kor: "교환" },
  { key: 3, value: "free", kor: "나눔" },
];

// eslint-disable-next-line react/display-name
const PostFormBlock = React.forwardRef((props: PostFormBlockProps, ref) => {
  const { register, type, category, setCategory, locations, setLocations } =
    props;

  const categoryClickHandler = (value: string) => {
    setCategory?.(value);
  };

  return (
    <SellWriteFormBlock>
      {/* 왼쪽 form */}
      <LeftFormContainer>
        {/* <GroupLeftForm /> */}

        {/* 1행 */}
        {/* 상품 이름 */}
        <input
          placeholder="제목"
          className="form-input"
          type="text"
          {...register("title", { required: true })}
        />

        {/* 2행 - 동적 컴포넌트 */}
        {/* 공구 */}
        {type === "group" ? (
          <div className="flex flex-row justify-between">
            {/* 총 가격 */}
            <input
              placeholder="총 가격"
              className="w-[70%] m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg"
              type="number"
              {...register("price", { required: true })}
            />
            {/* 모집 인원 */}
            <input
              placeholder="모집인원"
              className="w-1/4 m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg"
              type="number"
              min={1}
              {...register("recruitingNum", { required: true })}
            />
          </div>
        ) : // 경매
        type === "auction" ? (
          <div className="flex flex-row justify-between">
            {/* 최소 가격 */}
            <input
              placeholder="최소 가격"
              className="w-[48%] m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg"
              type="number"
              {...register("startPrice", { required: true })}
            />
            {/* 최소 액수 증가 단위 */}
            <input
              placeholder="최소 액수 증가 단위"
              className="w-[48%] m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg"
              type="number"
              min={100}
              {...register("increasePrice", { required: true })}
            />
          </div>
        ) : (
          <></>
        )}

        {/* 2행~ - 판교나 */}
        {type === "sell" && (
          <div className="flex flex-row justify-between">
            {category === "sale" ? (
              <input
                placeholder="가격"
                className="w-[60%] m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg"
                type="number"
                {...register("salePrice", { required: true })}
              />
            ) : category === "exchange" ? (
              <input
                placeholder="교환 원하는 상품"
                className="w-[60%] m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg"
                type="text"
                {...register("target", { required: true })}
              />
            ) : (
              <input
                className="w-[60%] m-[10px 0] p-[10px] border-[1px] border-[lightgray] rounded-lg cursor-not-allowed"
                type="text"
                disabled
              />
            )}
            {/* 카테고리 선택 */}
            <div className="flex flex-row justify-between">
              {sellCategory.map(val => {
                return (
                  <label
                    key={val.key}
                    className={[
                      category === val.value ? "bg-[#e6e6fa]" : "",
                      "p-[10px] mx-[5px] border-[1px] border-[#333] rounded cursor-pointer text-center",
                    ].join(" ")}
                  >
                    <CategorySelect
                      id="categorySelect"
                      type="radio"
                      value={val.value}
                      checked={category === val.value}
                      onChange={() => categoryClickHandler(val.value)}
                      hidden
                    />
                    {val.kor}
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* 3행 */}
        {/* 상세 설명 */}
        <textarea
          placeholder="상세 설명"
          className="form-input h-[150px]"
          {...register("detail", { required: true })}
        />

        {/* 4행 */}
        {/* 태그 */}
        <input
          placeholder="#상품이름 #날짜"
          className="form-input"
          {...register("tag", { required: false })}
        />
        {/* <PostMainInput placeholder="상품 이름" className="form-input" /> */}
      </LeftFormContainer>

      {/* 오른쪽 form */}
      <RightFormContainer>
        {/* <GroupRightForm /> */}

        {/* 거래 희망 장소 */}
        {/* <input
          placeholder="거래 희망 장소 선택(임시 input란)"
          className="form-input"
          type="text"
          {...register("location", { required: true })}
        /> */}
        <GetLocation
          register={register}
          locations={locations}
          setLocations={setLocations}
        />

        {/* 거래 가능 날짜 */}
        {type !== "sell" && (
          <input
            className="form-input"
            type="date"
            {...register("date", { required: true })}
          />
        )}

        {/* 공구 - 분배 방식 */}
        {type === "group" && (
          <select
            className="form-input bg-no-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
              backgroundPosition: "right 12px center",
              backgroundSize: "1.5em",
            }}
            {...register("distribute", { required: true })}
          >
            <option key={0} value="default">
              공구 분배 방식
            </option>
            <option key={1} value="direct">
              직접 분배
            </option>
            <option key={2} value="post">
              배송 분배
            </option>
          </select>
        )}
      </RightFormContainer>
    </SellWriteFormBlock>
  );
});

export default PostFormBlock;
