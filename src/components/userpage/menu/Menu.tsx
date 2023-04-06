'use client';

import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuBox = styled.div`
  width: 100%;
  padding: 0 30px;
  display: grid;
  justify-items: end;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`;

// 마이 페이지 오른쪽 부분 (판내상품 ~ 거래후기)
const Menu = ({ count }) => {
  const { my, other, like, review } = count;
  return (
    <MenuBox>
      <MenuItem src='menu' title='내 게시글' state='myPosts' count={my} />
      <MenuItem src='share' title='참여 게시글' state='posts' count={other} />
      <MenuItem
        src='../header/heart'
        title='찜'
        state='favorites'
        count={like}
      />
      <MenuItem src='comment' title='거래후기' state='reviews' count={review} />
    </MenuBox>
  );
};
export default Menu;
