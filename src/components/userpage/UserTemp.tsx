'use client';

import Image from 'next/image';
import styled from 'styled-components';

const Box = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OuterBox = styled.div`
  margin: 20px 0;
  width: 100%;
  max-width: 150px;
  height: 5px;
  border: 1px solid #b69eff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;

  img,
  p {
    animation-duration: 2s;
    animation-name: tagSlidIn;
    @keyframes tagSlidIn {
      from {
        left: 0%;
      }
      to {
        left: 36%;
      }
    }
    position: absolute;
    left: 36%;
    transform: translate(-50%, 0);
  }
  img {
    top: -20px;
  }
  p {
    top: 5px;
    font-size: 12px;
  }
`;

const InnerBox = styled.div`
  width: 36%;
  height: 5px;
  border-radius: 8px;
  background-color: #b69eff;
  padding: 0 5px;
  display: flex;
  align-items: center;
  animation-duration: 2s;
  animation-name: boxSlideIn;
  @keyframes boxSlideIn {
    from {
      width: 0;
    }
    to {
      width: 36%;
    }
  }
`;

// 매너 온도
export default function UserTemp() {
  return (
    <Box>
      <OuterBox>
        <InnerBox />
        <Image
          src='/images/map/location.svg'
          alt='location'
          width={18}
          height={18}
        />
        <p>36&deg;</p>
      </OuterBox>
    </Box>
  );
}