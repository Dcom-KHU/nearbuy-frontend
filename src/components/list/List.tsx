"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EachList from "./EachList";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { useGet, usePatch, usePost } from "@/hooks/useHttp";
import { AxiosHeaders } from "axios";
import { StringLiteral } from "typescript";

const ListItemBox = styled.div`
  width: 80%;
  max-width: 1200px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  justify-items: center;
`;

// ************************************************************************************************
// Type 'string' is not assignable to type 'keyof DetailPageState'.ts(2322)
// ListItem.tsx(39, 3): The expected type comes from property 'nowState'
// which is declared here on type 'IntrinsicAttributes & { nowState: keyof DetailPageState; }'
// ************************************************************************************************
// 해당 오류는 nowState 프로퍼티에 keyof DetailPageState 타입을 지정해두었지만, DUMMY_DATA 배열의 nowState 값은 string 형태이기 때문에 발생하는 오류입니다.
// 해결 방법으로는 nowState 프로퍼티의 타입을 string으로 지정하거나, DUMMY_DATA의 nowState 값을 DetailPageState 타입의 enum 값으로 변경하는 방법이 있습니다.
enum NowState {
  Board = "board",
  Sale = "sale",
  Exchange = "exchange",
  Free = "free",
  Auction = "auction",
  Group = "group",
}
// 게시글 더미 데이터
export const DUMMY_DATA = [
  { id: 1, nowState: NowState.Sale },
  { id: 2, nowState: NowState.Exchange },
  { id: 3, nowState: NowState.Free },
  { id: 4, nowState: NowState.Auction },
  { id: 5, nowState: NowState.Group },
  { id: 6, nowState: NowState.Group },
  { id: 7, nowState: NowState.Exchange },
  { id: 8, nowState: NowState.Sale },
  { id: 9, nowState: NowState.Auction },
  { id: 10, nowState: NowState.Auction },
  { id: 11, nowState: NowState.Group },
  { id: 12, nowState: NowState.Free },
  { id: 13, nowState: NowState.Exchange },
  { id: 14, nowState: NowState.Exchange },
  { id: 15, nowState: NowState.Free },
  { id: 16, nowState: NowState.Group },
  { id: 17, nowState: NowState.Sale },
  { id: 18, nowState: NowState.Group },
  { id: 19, nowState: NowState.Auction },
  { id: 20, nowState: NowState.Group },
  { id: 21, nowState: NowState.Exchange },
  { id: 22, nowState: NowState.Auction },
  { id: 23, nowState: NowState.Auction },
  { id: 24, nowState: NowState.Free },
  { id: 25, nowState: NowState.Group },
  { id: 26, nowState: NowState.Group },
  { id: 27, nowState: NowState.Auction },
  { id: 28, nowState: NowState.Group },
  { id: 29, nowState: NowState.Exchange },
  { id: 30, nowState: NowState.Free },
  { id: 31, nowState: NowState.Free },
  { id: 32, nowState: NowState.Group },
  { id: 33, nowState: NowState.Sale },
  { id: 34, nowState: NowState.Group },
  { id: 35, nowState: NowState.Auction },
  { id: 36, nowState: NowState.Exchange },
  { id: 37, nowState: NowState.Group },
  { id: 38, nowState: NowState.Free },
  { id: 39, nowState: NowState.Group },
  { id: 40, nowState: NowState.Sale },
  { id: 41, nowState: NowState.Free },
  { id: 42, nowState: NowState.Group },
  { id: 43, nowState: NowState.Auction },
  { id: 44, nowState: NowState.Auction },
  { id: 45, nowState: NowState.Free },
  { id: 46, nowState: NowState.Auction },
  { id: 47, nowState: NowState.Exchange },
];

interface Itemp {
  id: number;
  detail: string;
  image: string[];
  location: string;
  ongoing: boolean;
  salePrice: number;
  tag: string[];
  time: boolean;
  title: string;
  type: string;
  writer: string;
  // 밑에서부턴 내가 따로 추가한것z
  //post: string[];
  post: [
    {
      id: number;
      image: string[];
      location: string;
      type: string;
    }
  ];
}

/*
// 게시물 목록들
const List = () => {
  const nowState = useSelector((state: RootState) => state.activePage.active);
  const isBoard = nowState === "board";
  return (
    <ListItemBox>
      {isBoard ? (
        <>
          {DUMMY_DATA.map((data) => (
            <ListItem key={data.id} nowState={data.nowState} />
          ))}
        </>
      ) : (
        <EachList />
      )}
    </ListItemBox>
  );
};
export default List;*/

const List = () => {
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
    // console.log(getData, getIsLoading, getError);
    // console.log("getData결과: ", getData);
  }, [getData, getIsLoading, getError]);

  const postDatas = getData?.post;

  if (postDatas) {
    postDatas.map((post) => {
      console.log("$$$$$$", post.id);
      console.log("$$$$$$", post.type);
    });
  }

  // RootState는 타입스크립트 에러?땜시 추가함
  const nowState = useSelector((state: RootState) => state.activePage.active);
  const isBoard = nowState === "board";

  /* 지금 문제점: 게시글 filter 역할을 nowState가 해주고 있는데 
  DUMMY_DATA와 달리 postDatas는 nowState라는 키값 존재 안하고 그냥 type이라는 것만 존재함.
  따라서 nowState부분 type으로 적절하게 바꿔주면 해결 될둣,,,>?? */

  return (
    <>
      <ListItemBox>
        {postDatas?.map((post) => (
          <>
            <div key={post.id}>
              <div>{post.id}</div>
              <div>{post.type}</div>
            </div>
          </>
        ))}
        {isBoard ? (
          <>
            {postDatas?.map((post) => (
              <ListItem key={post.id} nowState={post.type} />
            ))}
          </>
        ) : (
          <EachList />
        )}
      </ListItemBox>
      <ListItemBox>
        {/* isBoard는 데이터 전체 표시하기 위해 둠. isBoard가 true라는건 전체 페이지 보고있는것. true니까 map을 써서 더미데이터의 모든 리스트 가져옴 */}
        {isBoard ? (
          <>
            {DUMMY_DATA.map((data) => (
              <ListItem key={data.id} nowState={data.nowState} />
            ))}
          </>
        ) : (
          /* 전체 페이지가 아니라 판매나 교환 등의 페이지일때 -> isBoard가 false가 되고 EachList가 화면에 표시됨 */
          <EachList />
        )}
      </ListItemBox>
    </>
  );
};
export default List;
