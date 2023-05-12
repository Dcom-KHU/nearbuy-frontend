import styled from "styled-components";

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0;
  padding-top: 2px;
  padding-bottom: 10px;
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
    <>
      <div className="flex pt-4 text-gray-500 justify-between">
        <div>경매 시작가: {start}원</div>
        <div>마감까지 2일 20시간</div>
      </div>
      <PriceBox>
        <p>현재 최고가</p>
        <div className="text-2xl">{current}원</div>
      </PriceBox>
    </>
  );
}
