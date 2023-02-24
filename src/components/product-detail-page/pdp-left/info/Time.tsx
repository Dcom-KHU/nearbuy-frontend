'use client';

import styled from 'styled-components';

const Box = styled.div`
  padding: 5px 10px;
  position: absolute;
  top: -34px;
  left: 0;
  color: red;
`;

// 상세 페이지 사진 위에 경매 남은 시간 표시
export default function Time() {
  return <Box>2일 남았어요</Box>;
}
