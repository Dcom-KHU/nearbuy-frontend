"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import EachList from "./EachList";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import { PaginationBox, PaginationButton } from "./Pagination";

const ListItemBox = styled.div`
  width: 80%;
  max-width: 1200px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  padding: 30px 0;
  ${(props) => {
    if (props.emptyData) {
      return css`
        display: flex;
        justify-content: center;
      `;
    }
    return css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      row-gap: 30px;
      justify-items: center;
    `;
  }}
`;

// ************************************************************************************************
// Type 'string' is not assignable to type 'keyof DetailPageState'.ts(2322)
// ListItem.tsx(39, 3): The expected type comes from property 'nowState'
// which is declared here on type 'IntrinsicAttributes & { nowState: keyof DetailPageState; }'
// ************************************************************************************************
// 해당 오류는 nowState 프로퍼티에 keyof DetailPageState 타입을 지정해두었지만, DUMMY_DATA 배열의 nowState 값은 string 형태이기 때문에 발생하는 오류입니다.
// 해결 방법으로는 nowState 프로퍼티의 타입을 string으로 지정하거나, DUMMY_DATA의 nowState 값을 DetailPageState 타입의 enum 값으로 변경하는 방법이 있습니다.

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

const List = ({ dataList }: { dataList?: any }) => {
  const [page, setPage] = useState(1);
  const [postDatas, setPostDatas] = useState<Itemp["post"]>();
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(8);

  useEffect(() => {
    handlePageChange(1);
  }, []);

  // RootState는 타입스크립트 에러?땜시 추가했다 함
  const nowState = useSelector((state: RootState) => state.activePage.active);
  // Redux 라이브러리 사용하여 상태 관리 하고, useSelector hook을 사용하여 Redux store에서 상태 가져옴.
  // useSelector hook이 리액트 컴포넌트에서 Redux stord의 상태 읽어오기 위해 사용되고
  // state: Rootstate는 RootState 타입의 state 매개변수 가지고 있는데, 이는 Redux stord의 전체 상태 객체 의미.
  // state.activePage.active는 RootState의 activePage 속성에 있는 active 속성 참조
  // 리덕스 스토어의 전체 상태 객체에서 activePage 속성에 있는 active 속성을

  let myPageList = false;
  myPageList = (dataList ?? true) === dataList;

  const handlePageChange = async (newPage: number) => {
    setPage(newPage);
    try {
      const typeParam = nowState === "board" ? "all" : nowState;
      const response = await axios.get(`${serverIP}/api/post/board`, {
        params: { type: typeParam, page: newPage - 1, size: 12 },
      });
      // console.log("데이타:::", response.data.post);
      const newPostDatas = response.data.post;
      if (myPageList) {
        dataList = newPostDatas;
      } else {
        setPostDatas(newPostDatas);
      }
    } catch (error) {
      console.log("Error occurred while getting post/board datas", error);
    }
  };

  const emptyData = postDatas?.length === 0;

  const isBoard = nowState === "board";

  const totalPages = Math.ceil(185 / 12); // 페이지당 12개 게시글
  // FIXME : 추후 totalPages를  Math.ceil([전체 포스트 개수]/ 12); 로 바꿔야함

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = startIndex; i <= endIndex; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === page}
        >
          {i}
        </PaginationButton>
      );
    }
    return buttons;
  };

  useEffect(() => {
    if (page) {
      const getDataAgain = async () => {
        try {
          const typeParam = nowState === "board" ? "all" : nowState;
          const response = await axios.get(`${serverIP}/api/post/board`, {
            params: { type: typeParam, page: page - 1, size: 12 },
          });
          // console.log("데타:::", response.data.post);
        } catch (error) {
          console.log("Error occurred while getting post/board datas", error);
        }
      };
      getDataAgain();
    }
  }, [page, nowState]);

  return (
    <>
      <ListItemBox>
        {/* isBoard는 데이터 전체 표시하기 위해 둠. isBoard가 true라는건 전체 페이지 보고있는것. 
            true니까 map을 써서 더미데이터의 모든 리스트 가져옴 */}
        {isBoard ? (
          <>
            {postDatas?.map((post) => (
              <ListItem key={post.id} nowState={post.type} post={post} />
            ))}
          </>
        ) : (
          /* 전체 페이지가 아니라 판매나 교환 등의 페이지일때 
            -> isBoard가 false가 되고 EachList가 화면에 표시됨 */
          <EachList dataList={dataList} />
        )}
      </ListItemBox>
      <PaginationBox>
        <PaginationButton
          disabled={startIndex === 1}
          onClick={() => {
            setStartIndex(startIndex - 8);
            setEndIndex(endIndex - 8);
          }}
        >
          {"<"}
        </PaginationButton>
        {renderPageButtons()}
        <PaginationButton
          disabled={endIndex >= totalPages}
          onClick={() => {
            setStartIndex(startIndex + 8);
            setEndIndex(endIndex + 8);
          }}
        >
          {">"}
        </PaginationButton>
      </PaginationBox>
    </>
  );
};
export default List;
