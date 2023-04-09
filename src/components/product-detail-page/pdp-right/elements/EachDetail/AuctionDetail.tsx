import styled from "styled-components";

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

      <PriceBox>
        <p>현재 최고가</p>
        <div className="text-2xl py-3">{current}원</div>
        <p className="text-gray-500">마감까지 2일 20시간</p>
      </PriceBox>
    </div>
  );
}
