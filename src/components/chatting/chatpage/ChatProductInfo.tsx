import ProductLocation from '@/components/list/productinfo/ProductLocation';
import ProductMainPicture from '@/components/list/productinfo/ProductMainPicture';
import ProductPrice from '@/components/list/productinfo/ProductPrice';
import ProductTitle from '@/components/list/productinfo/ProductTitle';
import styled from 'styled-components';
import Image from 'next/image';

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
    top: 50%;
    right: 80px;
    transform: translate(0, -50%);
  }
`;
// 사진과 오른쪽 텍스트 flex
const BetweenPictureAndTextsBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// 채팅방 상단에 대화중인 상품 정보
export default function ChatProductInfo() {
  return (
    <ProductInfoBox>
      <ProductMainPicture size='50px' />
      <BetweenPictureAndTextsBox>
        <ProductTitle />
        <ProductPrice />
      </BetweenPictureAndTextsBox>
      <ProductLocation />
      <button>
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
