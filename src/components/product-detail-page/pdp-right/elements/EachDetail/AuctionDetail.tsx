import Price from './Price';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const InputPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 20px;
`;
const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  p:last-child {
    margin-left: auto;
  }
`;

// 경매 페이지 가격 입력 받기, 현재 최고가 및 시간 표시
export default function AuctionDetail() {
  const price = useSelector((state: RootState) => state.price.price); // 현재 최고가
  const increment = useSelector((state: RootState) => state.price.increment); // 최소 증가액
  return (
    <div>
      <InputPriceBox>
        <select name='price' required>
          <option value='placeholder' selected disabled>
            가격 입력하기 (단위: {increment}원)
          </option>
          <option value='increment1'>{price + increment}원</option>
          <option value='increment2'>{price + increment * 2}원</option>
          <option value='increment3'>{price + increment * 3}원</option>
          <option value='increment4'>{price + increment * 4}원</option>
          <option value='increment5'>{price + increment * 5}원</option>
        </select>
        <button>입력</button>
      </InputPriceBox>
      <PriceBox>
        <p>현재 최고가</p>
        <Price />
        <p>마감까지 2일 20시간</p>
      </PriceBox>
    </div>
  );
}
