"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import ListItem from "../list/ListItem";
import { useGet } from "@/hooks/useHttp";

interface Itemp {
  post: [
    {
      id: number;
      image: string;
      location: string;
      type: string;
      title: string;
      salePrice: number | null;
      groupPrice: number | null;
      currentPrice: number | null;
      totalPeople: number | null;
      currentPeople: number | null;
      deadline: number | null;
      ongoing: boolean;
      target: string | null;
    }
  ];
}

export default function SearchEachList({
  dataList,
  searchKey,
}: {
  dataList: any;
  searchKey: string | null;
}) {
  let myPageList = false;
  myPageList = (dataList ?? true) === dataList;

  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/board/search",
    params: { type: "all", size: 20, search: searchKey },
    // pagination 구현 안해두니까 size가 post 수보다 적으면 게시글 목록이 제대로 표시 안됨ㅠ
  });

  let postDatas = getData?.post || [];
  if (myPageList) {
    postDatas = dataList;
  }
  const nowState = useSelector((state: RootState) => state.activePage.active);

  return (
    <>
      {postDatas.map((post) => {
        // postDatas 받아오고.. nowState 일치하는 애들만 렌더링
        if (post.type === nowState) {
          return <ListItem key={post.id} nowState={post.type} post={post} />;
        }
        return null;
      })}
    </>
  );
}
