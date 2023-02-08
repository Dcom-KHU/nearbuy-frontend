// 전체 페이지
// our-domain.com/board

"use client";

import styled from "styled-components";
// 나중에 여기서 레이아웃 설정 한거 ../components에 sell page 관련 폴더 만들어서 거기로 옮길 예정

const SellPageBlock = styled.div`
  //background: lavender;
  width: 100%;
  height: 100%;

  #page-sort {
    width: 180px;
    border: solid 2px gray;
    margin-right: 100px;
  }
`;

const CardsContainerBlock = styled.div`
  // 아이템들 배치해줌
  //background: gray;

  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    // 나중에 없앨수도 있는 class
    //background-color: pink;

    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    //grid-column-gap: 50px;
    inline-size: 80vw;
    max-width: 1500px;
    //margin-inline: auto;
    text-align: center; // 카드들을 중앙 정렬 해줌
  }

  .a-card {
    // 그냥 card는 예약어더라구요,,?
    //background-color: lightgreen;

    display: inline-block;
    max-width: 280px;
    width: 280px;
    padding: 14px;
    margin: 10px;
    position: relative;
    text-align: left;

    &:hover {
      transition: 0.125s ease-in;

      //transform: scale(1.01);
      //transform: scale(0.99);
      box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.1);
    }

    .card-image-holder {
      background: linear-gradient(45deg, pink, skyblue);
      max-width: 280px; // .a-card의 maxwidth 이하로 유지
      height: 200px;
    }

    .card-info {
      //background-color: lemonchiffon;
      padding: 10px 15px 10px; // 상 좌 하
    }
  }
`;

export default function Board() {
  return (
    <>
      <h1>전체 페이지</h1>
      <SellPageBlock>
        <select id="page-sort" name="page-sort" style={{ float: "right" }}>
          <option value="sort-new">최신순</option>
          <option value="sort-low">낮은가격순</option>
          <option value="sort-high">높은가격순</option>
        </select>
        <CardsContainerBlock>
          <div className="container">
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
            <div className="a-card">
              <div className="card-image-holder">Image</div>
              <div className="card-info">
                <div className="item-name">상품 이름</div>
                <div className="item-price">상품 가격</div>
                <div className="item-place">거래 장소?</div>
              </div>
            </div>
          </div>
        </CardsContainerBlock>
      </SellPageBlock>
    </>
  );
}
