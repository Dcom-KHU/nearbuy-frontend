// 판매 페이지
// our-domain.com/sale
'use client';

import styled from 'styled-components';
import PageSort from '../board/PageSort';
import WriteToggle from '@/components/write/WriteToggle';
import List from '@/components/list/List';

const SalePageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Sale() {
  return (
    <>
      <h1>판매 페이지</h1>
      <SalePageBlock>
        <PageSort />
        <List />
      </SalePageBlock>
      <WriteToggle />
    </>
  );
}
