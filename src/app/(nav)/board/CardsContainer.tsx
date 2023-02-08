"use client";

import styled from "styled-components";
import Image from "next/image";

const CardsContainerBlock = styled.div`
  // 아이템들 배치해줌
  //background: gray;

  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    // 나중에 없앨수도 있는 class
    //background-color: pink;

    inline-size: 80vw;
    max-width: 1500px;
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
      position: relative; // 이게 있어야 사진이 layout="fill"로 돼있었을때 요 안으로 잘 들어감
    }

    .card-info {
      //background-color: lemonchiffon;
      padding: 10px 15px 10px; // 상 좌 하
    }
  }
`;

function CardsContainer() {
  return (
    <CardsContainerBlock>
      <>
        <div className="container">
          <div className="a-card">
            <div className="card-image-holder">
              <Image
                src="/images/for-demo/kitty.jpg"
                alt="kitty"
                layout="fill"
              />
            </div>
            <div className="card-info">
              <div className="item-name">상품 이름</div>
              <div className="item-price">상품 가격</div>
              <div className="item-place">거래 장소?</div>
            </div>
          </div>
          <div className="a-card">
            <div className="card-image-holder">
              <Image
                src="/images/for-demo/gloves.jpg"
                alt="kitty"
                layout="fill"
              />
            </div>
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
      </>
    </CardsContainerBlock>
  );
}

export default CardsContainer;
