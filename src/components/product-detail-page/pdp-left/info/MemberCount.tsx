'use client';

import styled from 'styled-components';

const Box = styled.div`
  padding: 5px 10px;
  position: absolute;
  top: -34px;
  left: 0;
  color: blue;
`;

// 상세 페이지 사진 위에 공구 모집 인원 표시
export default function MemberCount() {
  return <Box>총 모집인원 [ 4 ]명 중 [ 1 ]명 모였어요</Box>;
}
