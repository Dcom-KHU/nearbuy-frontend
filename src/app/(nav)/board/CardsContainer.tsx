"use client";

import styled from "styled-components";
import Image from "next/image";
import ListItem from "./items/ListItem";

const CardsContainerBlock = styled.div`
  // 아이템들 배치해줌
  //background: gray;

  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    // 나중에 없앨수도 있는 class
    background-color: pink;

    inline-size: 80vw;
    max-width: 1500px;
    text-align: center; // 카드들을 중앙 정렬 해줌
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    row-gap: 30px;
    justify-items: center;
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
  }
`;

function CardsContainer() {
  return (
    <CardsContainerBlock>
      <>
        <div className="container">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </>
    </CardsContainerBlock>
  );
}

export default CardsContainer;
