'use client';

import styled from 'styled-components';
import MenuItem from './MenuItem';
import { serverIP } from '@/../secrets.json';
import axios from 'axios';

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

async function getData() {
  const response = await axios.get(`${serverIP}/api/user/page/my`, {
    params: { id: 123 },
  });
  return response;
}

// 마이 페이지 오른쪽 부분 (판내상품 ~ 거래후기)
const Menu = () => {
  return (
    <MenuBox>
      <MenuItem src='menu' title='내 게시글' state='myPosts' count={32} />
      <MenuItem src='share' title='참여 게시글' state='posts' count={32} />
      <MenuItem src='../header/heart' title='찜' state='favorites' count={32} />
      <MenuItem src='comment' title='거래후기' state='reviews' count={32} />
    </MenuBox>
  );
};
export default Menu;
