'use client';

import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: grid;
  justify-items: end;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`;

// 마이 페이지 오른쪽 부분 (판내상품 ~ 거래후기)
const Menu = () => {
  return (
    <MenuBox>
      <MenuItem src='menu' title='판매상품' count={32} />
      <MenuItem src='share' title='같이사요' count={32} />
      <MenuItem src='shopping' title='구매상품' count={32} />
      <MenuItem src='comment' title='거래후기' count={32} />
    </MenuBox>
  );
};
export default Menu;
