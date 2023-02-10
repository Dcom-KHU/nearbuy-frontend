"use client";

import styled from "styled-components";
import Image from "next/image";
import ListItem from "./items/ListItem";

const CardsContainerBlock = styled.div`
  .container {
    // background-color: pink;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;

    inline-size: 70vw;
    max-width: 1200px;
    row-gap: 30px;

    padding: 30px 20px;
    margin-top: 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

function CardsContainer() {
  return (
    <CardsContainerBlock>
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
    </CardsContainerBlock>
  );
}

export default CardsContainer;
