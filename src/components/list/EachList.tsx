"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
// import { DUMMY_DATA } from "./List";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { useGet, usePatch, usePost } from "@/hooks/useHttp";
import { AxiosHeaders } from "axios";
import { StringLiteral } from "typescript";

interface Itemp {
  post: [
    {
      id: number;
      image: string[];
      location: string;
      type: string;
    }
  ];
}

export default function EachList() {
  const {
    data: getData,
    // data를 useGet을 통해서 구조분해할당을 통해 받아옴. data를 getData라는 이름으로 받아옴.
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/board",
    params: { type: "all" }, // 나머지 파라미터 일단 생략 (default값 있음)
  });

  useEffect(() => {
    console.log(getData, getIsLoading, getError);
    console.log("getData결과: ", getData);
  }, [getData, getIsLoading, getError]);

  const postDatas = getData?.post || [];
  console.log("포데: ", postDatas);

  const nowState = useSelector((state: RootState) => state.activePage.active);

  return (
    <>
      {postDatas.map((post) => {
        // dummyData 받아오고.. nowState 일치하는 애들만 렌더링
        if (post.type === nowState) {
          return <ListItem key={post.id} nowState={post.type} />;
        }
        return null;
      })}
    </>
  );

  /* 언석오빠가 써둔거
  return (
    <>
      {DUMMY_DATA.map((data) => {
        // dummyData 받아오고.. nowState 일치하는 애들만 렌더링
        if (data.nowState === nowState) {
          return <ListItem key={data.id} nowState={data.nowState} />;
        }
        return null;
      })}
    </>
  );
  */
}
