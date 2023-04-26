"use client";

import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useGet } from "@/hooks/useHttp";
import SearchEachList from "./SearchEachList";
import ListItem from "../list/ListItem";
import { serverIP } from "@/../secrets.json";
import axios from "axios";
import { PaginationBox, PaginationButton } from "../list/Pagination";

const ListItemBox = styled.div<ListItemBoxProps>`
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
// 오류 있는데 그건 List.tsx 참고
// ************************************************************************************************

interface ListItemBoxProps {
  emptyData?: boolean;
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

const SearchList = ({ searchKey }: { searchKey: string | null }) => {
  const [page, setPage] = useState(1);
  const [postDatas, setPostDatas] = useState<Itemp["post"]>();
  const [totalPosts, setTotalPosts] = useState(0);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(8);

  useEffect(() => {
    handlePageChange(1);
  }, []);

  const handlePageChange = async (newPage: number) => {
    setPage(newPage);
    try {
      const response = await axios.get(`${serverIP}/api/post/board/search`, {
        params: { type: "all", page: newPage - 1, size: 12, search: searchKey },
      });
      // console.log("데이타:::", response.data.post);
      setTotalPosts(response.data.total);
      const newPostDatas = response.data.post;
      setPostDatas(newPostDatas);
    } catch (error) {
      console.log("Error occurred while getting post/board datas", error);
    }
  };

  /* 
  const {
    data: getData,
    // data를 useGet을 통해서 구조분해할당을 통해 받아옴. data를 getData라는 이름으로 받아옴.
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: "/api/post/board/search",
    params: { type: "all", size: 20, search: searchKey }, 
  });
  */

  // let postDatas = getData?.post || [];

  const emptyData = postDatas?.length === 0;

  // RootState는 타입스크립트 에러?땜시 추가했다 함
  // 설명과 에러는 List.tsx 파일 참고

  const isBoard = true;

  useEffect(() => {
    if (page) {
      const getDataAgain = async () => {
        try {
          const response = await axios.get(
            `${serverIP}/api/post/board/search`,
            {
              params: {
                type: "all",
                page: page - 1,
                size: 12,
                search: searchKey,
              },
            }
          );
          setTotalPosts(response.data.total);
          // console.log("데타:::", response.data.post);
        } catch (error) {
          console.log("Error occurred while getting post/board datas", error);
        }
      };
      getDataAgain();
    }
  }, [page, searchKey]);

  const totalPages = Math.ceil(totalPosts / 12); // 페이지당 12개 게시글
  // FIXME : 추후 totalPages를  Math.ceil(totalPosts/ 12); 로 바꿔야함

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = startIndex; i <= endIndex; i++) {
      buttons.push(
        <PaginationButton
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={i === page || i > totalPages}
          style={{ backgroundColor: i === page ? "lavender" : "transparent" }}
        >
          {i}
        </PaginationButton>
      );
    }
    return buttons;
  };

  /*
  if (error?.response?.status === 404) {
    return <div>게시글이 없습니다.</div>;
  }
*/

  return (
    <>
      <div>검색어: {searchKey}</div>
      <ListItemBox emptyData={emptyData}>
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
export default SearchList;
