'use client';

import styled from 'styled-components';

const ReviewItem = styled.li`
  display: flex;
  gap: 10px;
`;

// 각 거래후기
export default function ReviewIte({ id, emotion, detail }) {
  let face = '😡';
  if (emotion === 'good') face = '😆';
  else if (emotion === 'soso') face = '😐';
  return (
    <ReviewItem key={id}>
      <p>{face}</p>
      <p>{detail}</p>
    </ReviewItem>
  );
}
