'use client';

import Image from 'next/image';
import styled from 'styled-components';

const OuterBox = styled.div<{ mannerPoint?: number }>`
  margin: 20px 0;
  width: 150px;
  height: 5px;
  border: 1px solid #b69eff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: -1;

  img,
  p {
    animation: tagSlidIn 2s;
    position: absolute;
    left: ${(props) => `${props.mannerPoint}%` ?? 0};
    transform: translate(-50%, 0);
  }
  img {
    top: -21px;
  }
  p {
    top: 5px;
    font-size: 12px;
  }
  @keyframes tagSlidIn {
    from {
      left: 0%;
    }
    to {
      left: ${(props) => props.mannerPoint ?? 0};
    }
  }
`;

// 매너 온도
const InnerBox = styled.div<{ mannerPoint?: number }>`
  width: ${(props) => `${props.mannerPoint}%` ?? 0};
  height: 5px;
  border-radius: 8px;
  background-color: #b69eff;
  display: flex;
  align-items: center;
  animation: boxSlideIn 2s;
  @keyframes boxSlideIn {
    from {
      width: 0;
    }
    to {
      width: ${(props) => props.mannerPoint ?? 0};
    }
  }
`;

interface UserTempProps {
  mannerPoint?: number;
}

const UserTemp = ({ mannerPoint }: UserTempProps) => {
  return (
    <OuterBox mannerPoint={mannerPoint}>
      <InnerBox mannerPoint={mannerPoint}>&nbsp;</InnerBox>
      <Image
        src='/images/map/location.svg'
        alt='location'
        width={18}
        height={18}
      />
      <p>{mannerPoint ?? 0}&deg;</p>
    </OuterBox>
  );
};
export default UserTemp;
