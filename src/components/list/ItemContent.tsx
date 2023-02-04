'use client';

import styled from 'styled-components';
import '../../app/globals.css';

const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 3px;

  p:nth-child(2) {
    font-weight: 700;
  }
  p:last-child {
    font-size: 12px;
    color: rgba(33, 33, 36, 0.5);
  }
`;

// 게시글 설명
const ItemContent = () => {
  return (
    <ItemContentBox>
      <p>귀여운 고양이</p>
      <p>1,000,000,000</p>
      <p>경희대학교</p>
    </ItemContentBox>
  );
};
export default ItemContent;