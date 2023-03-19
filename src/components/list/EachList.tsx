"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
// import { DUMMY_DATA } from "./List";
import ListItem from "./ListItem";
import { useGet } from "@/hooks/useHttp";

interface Itemp {
  post: [
    {
      id: number;
      image: string[];
      location: string;
      type: string;
      title: string;
      salePrice: number | null;
      groupPrice: number | null;
      currentPrice: number | null;
      totalPeople: number | null;
      deadline: number | null;
      ongoing: boolean;
      target: string | null;
    }
  ];
}

export default function EachList() {
  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/board",
    params: { type: "all" },
  });

  const postDatas = getData?.post || [];
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
