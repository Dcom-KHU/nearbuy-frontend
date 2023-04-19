"use client";

import styled, { css } from "styled-components";
import SearchEachList from "./SearchEachList";
import ListItem from "../list/ListItem";
import { useGet } from "@/hooks/useHttp";

const ListItemBox = styled.div`
  width: 80%;
  max-width: 1200px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 30px 0;
`;

// ************************************************************************************************
// 오류 있는데 그건 List.tsx 참고
// ************************************************************************************************
enum NowState {
  Board = "board",
  Sale = "sale",
  Exchange = "exchange",
  Free = "free",
  Auction = "auction",
  Group = "group",
}

interface Itemp {
  post: [
    {
      title: string;
      id: number;
      image: string;
      location: string;
      type: string;
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

const SearchList = ({
  searchKey,
}: {
  dataList: any;
  searchKey: string | null;
}) => {
  const {
    data: getData,
    // data를 useGet을 통해서 구조분해할당을 통해 받아옴. data를 getData라는 이름으로 받아옴.
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/board/search",
    params: { type: "all", size: 20, search: searchKey }, // 나머지 파라미터 일단 생략 (default값 있음)
    // pagination 구현 안해두니까 size가 post 수보다 적으면 게시글 목록이 제대로 표시 안됨ㅠ
  });

  let postDatas = getData?.post || [];

  // RootState는 타입스크립트 에러?땜시 추가했다 함
  // 설명과 에러는 List.tsx 파일 참고

  //console.log("포스트데타: ", postDatas);
  const isBoard = true;

  if (getError?.response?.status === 404) {
    return <div>게시글이 없습니다.</div>;
  }

  return (
    <>
      <div>검색어: {searchKey}</div>
      <ListItemBox>
        {postDatas?.length === 0 ? (
          <div>&apos;{searchKey}&apos;에 해당하는 게시글이 없습니다.</div>
        ) : isBoard ? (
          <>
            {postDatas?.map((post) => (
              <ListItem key={post.id} nowState={post.type} post={post} />
            ))}
          </>
        ) : (
          /* 전체 페이지가 아니라 판매나 교환 등의 페이지일때 
            -> isBoard가 false가 되고 EachList가 화면에 표시됨 */
          <SearchEachList dataList={postDatas} searchKey={searchKey} />
        )}
      </ListItemBox>
    </>
  );
};
export default SearchList;
