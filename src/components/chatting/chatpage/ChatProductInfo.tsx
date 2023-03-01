import ProductLocation from '@/components/list/productinfo/ProductLocation';
import ProductMainPicture from '@/components/list/productinfo/ProductMainPicture';
import ProductPrice from '@/components/list/productinfo/ProductPrice';
import ProductTitle from '@/components/list/productinfo/ProductTitle';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleHandler } from '@/store/chatToggle/chatToggleSlice';

const ProductInfoBox = styled.div`
  border-bottom: 1px solid rgb(168, 168, 168);
  width: 100%;
  padding: 20px 80px;
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  // 장소
  p:nth-child(3) {
    color: rgb(168, 168, 168);
  }
  // 토글 버튼
  img:last-child {
    position: absolute;
    top: ${(props) => (props.toggle ? '33.5px' : '8.5px')};
    right: 80px;
    transform: ${(props) => props.rotate};
    transition: transform 1s;
  }
`;
// 사진과 오른쪽 텍스트 flex
const BetweenPictureAndTextsBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: opacity 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

// 채팅방 상단에 대화중인 상품 정보
export default function ChatProductInfo() {
  // const [toggle, setToggle] = useState(true);
  const toggle = useSelector((state: RootState) => state.chatToggle.toggle);
  const dispatch = useDispatch();
  const [rotate, setRotate] = useState('');
  const rotateHandler = () => {
    setRotate((prev) => (prev === '' ? 'rotate(180deg)' : ''));
    dispatch(toggleHandler());
  };
  return (
    <ProductInfoBox rotate={rotate} toggle={toggle}>
      {toggle && <ProductMainPicture size='50px' />}
      <BetweenPictureAndTextsBox visible={toggle}>
        {toggle && <ProductTitle />}
        {toggle && <ProductPrice />}
      </BetweenPictureAndTextsBox>
      {toggle && <ProductLocation />}
      <button onClick={rotateHandler}>
        <Image
          src='/images/down-arrow.svg'
          alt='down-arrow'
          width={24}
          height={24}
        />
      </button>
    </ProductInfoBox>
  );
}
