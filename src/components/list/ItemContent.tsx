'use client';

import styled from 'styled-components';
import ProductLocation from './productinfo/ProductLocation';
import ProductPrice from './productinfo/ProductPrice';
import ProductTitle from './productinfo/ProductTitle';

const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 3px;

  // 가격
  p:nth-child(2) {
    font-weight: 700;
  }
  // 장소
  p:last-child {
    font-size: 12px;
    color: rgba(33, 33, 36, 0.5);
  }
`;

// 게시글 설명
const ItemContent = () => {
  return (
    <ItemContentBox>
      <ProductTitle />
      <ProductPrice />
      <ProductLocation />
    </ItemContentBox>
  );
};
export default ItemContent;
