'use client';

import { myPageMenuToggle } from '@/store/mypageMenuToggle/myPageMenuToggleSlice';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const MenuItemBox = styled.div`
  width: 100%;
  max-width: 225px;
  padding: 10px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  div:nth-child(3) {
    font-size: 12px;
  }
`;
const GoToSeeButton = styled.button`
  position: absolute;
  bottom: 3%;
  right: 5%;
  font-size: 12px;
  color: #b69eff;
  &:hover {
    font-weight: 700;
  }
`;

// 메뉴 틀 (내 게시글 / 참여 게시글 / 찜 / 거래후기)
const MenuItem: React.FC<{
  src: string;
  title: string;
  state: string;
  count: number;
}> = (props) => {
  const dispatch = useDispatch();

  const viewHandler = () => {
    dispatch(myPageMenuToggle(props.state));
  };
  return (
    <MenuItemBox>
      <Image
        src={`/images/userpage/${props.src}.svg`}
        alt={props.src}
        width={24}
        height={21}
      />
      <div>{props.title}</div>
      <div>{props.count}개</div>
      <GoToSeeButton onClick={viewHandler}>보러가기&gt;</GoToSeeButton>
    </MenuItemBox>
  );
};
export default MenuItem;
