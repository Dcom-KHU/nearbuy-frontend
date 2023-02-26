// 좋아요 페이지
// our-domain.com/like
'use client';
import PageSort from '@/app/(nav)/board/PageSort';
import styled from 'styled-components';
import LikeList from './LikeList';

const LikePageBlock = styled.div`
  //background: pink;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 10px;

  h1 {
    font-size: 36px;
  }
`;

export default function Like() {
  return (
    <LikePageBlock>
      <h1>🧡</h1>
      <PageSort />
      <LikeList />
    </LikePageBlock>
  );
}
