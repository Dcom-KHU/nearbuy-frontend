'use client';

import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuBox = styled.div`
  width: 100%;
  padding: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`;

const Menu = () => {
  return (
    <MenuBox>
      <MenuItem />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </MenuBox>
  );
};
export default Menu;
