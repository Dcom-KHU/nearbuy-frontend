'use client';

import PdpLeft from './pdp-left/PdpLeft';
import PdpRight from './pdp-right/PdpRight';
import PdpBottom from './pdp-bottom/PdpBottom';
import styled from 'styled-components';

const Box = styled.article`
  margin: 0 auto;
  width: 980px;
  display: flex;
  flex-direction: column;
`;
const PdpBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding: 50px 20px;
`;

// 상세 페이지 전체 (PDP)
export default function ProductDetailPage() {
  return (
    <Box>
      <PdpBox>
        <PdpLeft />
        <PdpRight />
      </PdpBox>
      <PdpBottom />
    </Box>
  );
}
