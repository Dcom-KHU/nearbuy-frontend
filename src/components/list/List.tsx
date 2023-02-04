'use client';

import styled from 'styled-components';
import ListItem from './ListItem';
import ListNav from './ListNav';

const ListBox = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
`;
const ListItemBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 30px;
  justify-items: center;
`;

// 게시물 목록들
const List = () => {
  return (
    <ListBox>
      <ListNav />
      <ListItemBox>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ListItemBox>
    </ListBox>
  );
};
export default List;
