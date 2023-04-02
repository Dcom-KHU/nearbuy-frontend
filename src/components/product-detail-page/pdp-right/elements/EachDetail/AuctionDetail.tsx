import styled from "styled-components";

const InputPriceForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 20px;
`;
const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0;
  p:last-child {
    margin-left: auto;
  }
`;

// 경매 페이지 가격 입력 받기, 현재 최고가 및 시간 표시
export default function AuctionDetail({
  increase,
  current,
  start,
}: {
  increase: number;
  current: number;
  start: number;
}) {
  return (
    <div>
      <div className="pt-4 text-gray-500 ml-2">경매 시작가: {start}원</div>
      <InputPriceForm>
        <select name="price" required>
          <option value="placeholder" selected disabled>
            가격 입력하기 (단위: {increase}원)
          </option>
          <option value="increment1">{current + increase}원</option>
          <option value="increment2">{current + increase * 2}원</option>
          <option value="increment3">{current + increase * 3}원</option>
          <option value="increment4">{current + increase * 4}원</option>
          <option value="increment5">{current + increase * 5}원</option>
        </select>
        <button>[입력] 버튼이꼭필요할까?</button>
      </InputPriceForm>
      <PriceBox>
        <p>현재 최고가</p>
        <div className="text-2xl py-3">{current}원</div>
        <p className="text-gray-500">마감까지 2일 20시간</p>
      </PriceBox>
    </div>
  );
}
