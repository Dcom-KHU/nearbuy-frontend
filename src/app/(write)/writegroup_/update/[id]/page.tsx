/* eslint-disable react-hooks/exhaustive-deps */
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
import { usePathname, useRouter } from "next/navigation";
import { useRouter as Router } from "next/router";
import { useEffect, useState } from "react";
import KakaoMap from "@/components/write/writepage/common/KakaoMap";
import PostImageListUpdate from "@/components/write/writepage/common/update/ImageUpdate";
import { Dictionary } from "@reduxjs/toolkit";

const WriteSellBlock = styled.div`
  // background-color: aliceblue;

  width: 75%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

interface groupGetData {
  id: number;
  type: string;
  title: string;
  writer: string;
  detail: string;
  image: string[];
  time: number;
  location: string;
  tag: string[];
  groupPrice: number;
  totalPeople: number;
  currentPeople: number;
  distribute: string;
  day: number[];
}

const padNumber = (num: number, len: number) => {
  return String(num).padStart(len, "0");
};
const formatDate = (dayNum: number) => {
  let date = new Date(dayNum); // 오늘 날짜
  let year: string = "" + date.getFullYear(); // 년도
  let month: string = padNumber(date.getMonth() + 1, 2); // 월
  let day: string = padNumber(date.getDate(), 2); // 날짜

  return [year, month, day].join("-");
};

export default function Page({
  params,
  searchParams,
}: {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [formValues, setFormValues] = useState<groupGetData>();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      detail: "",
      tag: "",
      price: 0,
      recruitingNum: 0,
      distribute: "",
      date: "",
    },
  });

  // 이미지 파일
  const [initialImgs, setInitialImgs] = useState<string[]>([]); // 기존 존재하던 image url 리스트 (origin)
  const [newImgs, setNewImgs] = useState<FileList | undefined>(undefined); // 새 image 리스트 (new)
  const [newPrevImgs, setNewPrevImgs] = useState<string[]>([]); // 화면에 보여주기 위한 새 image prev url 리스트 (new)
  const [deleteImgs, setDeleteImgs] = useState<number[]>([]); // 기존 올려져있던 image 중 삭제할 image index 리스트 (origin)
  const [initialImgDict, setInitialImgDict] = useState<{
    [url: string]: number;
  }>({}); // deleteImgs에 인덱스를 넣기 위해 기존 Image를 url: idx 형태로 담는 딕셔너리
  // 리스트로 사진과 인덱스를 저장하면, 사진을 지웠을 때 재렌더링이 되어 각 사진의 인덱스가 변하기 때문에 해당 딕셔너리 state가 필요

  // 거래 희망 장소
  const [locations, setLocations] = useState<string[]>([]);

  const submitHandler = async (d: any) => {
    console.log(locations);

    const registeredData = {
      title: d.title,
      detail: d.detail,
      location: locations[0],
      tag: d.tag.split(" "),
      groupPrice: d.price,
      totalPeople: d.recruitingNum,
      distribute: d.distribute,
      day: [new Date(d.date).getTime()], // 추후 n개 input을 리스트형식으로 이미 바꾸기
    };

    console.log(registeredData);

    await customAxios
      .patch("/api/post/group", registeredData, {
        params: { id: params.id },
      })
      .then(async data => {
        // 이미지 업로드
        newImgs &&
          (await customAxios
            .post("/api/image/post", newImgs, {
              headers: {
                "Content-Type": "multipart/form-data;",
              },
              params: {
                id: params.id,
              },
            })
            .then(data => {
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            }));

        // 이미지 삭제
        console.log(deleteImgs);
        deleteImgs &&
          (await customAxios
            .delete("/api/image/post", {
              data: { index: deleteImgs },
              params: {
                id: params.id,
              },
            })
            .then(data => {
              console.log(data);
            })
            .catch(err => {
              console.log(err);
            }));

        // router.replace("/board");
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    (async () => {
      const getData = await customAxios.get("/api/post/group", {
        params: { id: params.id },
      });
      setFormValues(getData.data);
    })();
  }, []);

  useEffect(() => {
    console.log(formValues);
    if (formValues) {
      reset({
        title: formValues.title,
        detail: formValues.detail,
        tag: formValues.tag.join(" "),
        price: formValues.groupPrice,
        recruitingNum: formValues.totalPeople,
        distribute: formValues.distribute,
        date: formatDate(formValues.day[0]),
      });

      setLocations([formValues.location]);
      setInitialImgs(formValues.image);

      let tempDict: { [url: string]: number } = {};
      formValues.image.forEach((url, i) => {
        tempDict[url] = i;
      });
      setInitialImgDict(tempDict);
    }
  }, [formValues]);

  return (
    <>
      <WriteSellBlock>
        <div className="self-start pl-8 py-5 text-[20px]">공동구매 포스팅</div>

        {/* 이미지 리스트 */}
        <PostImageListUpdate
          initialImgs={initialImgs}
          setInitialImgs={setInitialImgs}
          newImgs={newImgs}
          setNewImgs={setNewImgs}
          newPrevImgs={newPrevImgs}
          setNewPrevImgs={setNewPrevImgs}
          setDeleteImgs={setDeleteImgs}
          deleteImgs={deleteImgs}
          initialImgDict={initialImgDict}
        />

        {/* form */}
        <PostFormBlock
          register={register}
          locations={locations}
          setLocations={setLocations}
          type="group"
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

        {/* 지도 연습 */}
        {/* <KakaoMap /> */}
      </WriteSellBlock>
    </>
  );
}
