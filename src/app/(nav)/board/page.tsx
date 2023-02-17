// 전체 페이지
// our-domain.com/board

'use client';

import styled from 'styled-components';
import CardsContainer from './CardsContainer';
import PageSort from './PageSort';
import WriteToggle from '@/components/write/WriteToggle';

const BoardPageBlock = styled.div`
  // background: lavender;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Board() {
  return (
    <>
      <h1>전체 페이지</h1>
      <BoardPageBlock>
        <PageSort />
        <CardsContainer />
      </BoardPageBlock>
      <WriteToggle />
    </>
  );
}
