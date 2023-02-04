'use client';

import styled from 'styled-components';

const MenuItemBox = styled.div`
  max-width: 225px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  div:nth-child(3) {
    font-size: 12px;
  }
`;
const GoToSeeButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 5%;
  font-size: 12px;
  color: #b69eff;
`;

const MenuItem = () => {
  return (
    <>
      <MenuItemBox>
        <div>사진</div>
        <div>판매상품</div>
        <div>32개</div>
        <GoToSeeButton>보러가기&gt;</GoToSeeButton>
      </MenuItemBox>
    </>
  );
};
export default MenuItem;
