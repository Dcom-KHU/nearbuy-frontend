'use client';

import styled from 'styled-components';

interface BoxProps {
  type: 'group' | 'auction';
}
const Box = styled.div<BoxProps>`
  position: absolute;
  left: 15px;
  top: 15px;
  background-color: ${(props) =>
    props.type === 'group' ? '#90bcff' : '#ffa1a1'};
  padding: 0 10px;
  width: 57px;
  text-align: center;
`;

// 게시글 리스트에서 각 게시글 위에 표시될 작은 정보 (경매와 공구에서 각각 남은 시간과 모집 인원)
export default function SmallInfoForListItem({ type }: BoxProps) {
  if (type === 'auction') {
    return <Box type={type}>D - 2</Box>;
  } else if (type === 'group') {
    return <Box type={type}>1 / 4</Box>;
  } else {
    return null;
  }
}
