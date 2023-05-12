'use client';

import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import EachList from './EachList';
import ListItem from './ListItem';
import { useGet } from '@/hooks/useHttp';

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
  total: number;
}

const List2 = ({ dataList }: { dataList?: any }) => {
  const nowState = useSelector((state: RootState) => state.activePage.active);
  let myPageList = false;
  myPageList = (dataList ?? true) === dataList;

  const isBoard = nowState === 'board';

  // let postDatas = getData?.post;
  const empty = dataList?.length === 0;

  return (
    <>
      <ListItemBox emptyData={empty}>
        {empty ? (
          <div>게시글이 없습니다.</div>
        ) : isBoard ? (
          <>
            {dataList?.map((post) => (
              <ListItem key={post.id} nowState={post.type} post={post} />
            ))}
          </>
        ) : (
          <EachList dataList={dataList} />
        )}
      </ListItemBox>
    </>
  );
};
export default List2;
