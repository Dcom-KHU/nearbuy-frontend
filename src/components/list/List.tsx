'use client';

import styled from 'styled-components';
import ListItem from './ListItem';

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

// 게시물 목록들
const List = () => {
  const DUMMY_DATA = [
    { id: 1, nowState: 'sale' },
    { id: 2, nowState: 'exchange' },
    { id: 3, nowState: 'free' },
    { id: 4, nowState: 'auction' },
    { id: 5, nowState: 'group' },
    { id: 6, nowState: 'sale' },
    { id: 7, nowState: 'exchange' },
    { id: 8, nowState: 'sale' },
    { id: 9, nowState: 'auction' },
    { id: 10, nowState: 'auction' },
    { id: 11, nowState: 'group' },
    { id: 12, nowState: 'free' },
    { id: 13, nowState: 'exchange' },
    { id: 14, nowState: 'exchange' },
    { id: 15, nowState: 'free' },
    { id: 16, nowState: 'group' },
    { id: 17, nowState: 'sale' },
    { id: 18, nowState: 'group' },
    { id: 19, nowState: 'auction' },
    { id: 20, nowState: 'group' },
    { id: 21, nowState: 'exchange' },
    { id: 22, nowState: 'auction' },
    { id: 23, nowState: 'auction' },
    { id: 24, nowState: 'free' },
    { id: 25, nowState: 'sale' },
    { id: 26, nowState: 'group' },
    { id: 27, nowState: 'auction' },
    { id: 28, nowState: 'group' },
    { id: 29, nowState: 'exchange' },
    { id: 30, nowState: 'free' },
    { id: 31, nowState: 'free' },
    { id: 32, nowState: 'group' },
    { id: 33, nowState: 'sale' },
    { id: 34, nowState: 'group' },
    { id: 35, nowState: 'auction' },
    { id: 36, nowState: 'exchange' },
    { id: 37, nowState: 'group' },
    { id: 38, nowState: 'free' },
    { id: 39, nowState: 'group' },
    { id: 40, nowState: 'sale' },
    { id: 41, nowState: 'free' },
    { id: 42, nowState: 'group' },
    { id: 43, nowState: 'exchange' },
    { id: 44, nowState: 'auction' },
    { id: 45, nowState: 'free' },
    { id: 46, nowState: 'auction' },
    { id: 47, nowState: 'exchange' },
  ];
  return (
    <ListItemBox>
      {DUMMY_DATA.map((data) => (
        <ListItem key={data.id} nowState={data.nowState} />
      ))}
    </ListItemBox>
  );
};
export default List;
