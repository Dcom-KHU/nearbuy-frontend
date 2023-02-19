"use client";

import styled from "styled-components";

const MiniWriteOptionsBlock = styled.ul`
  background-color: #f4f4f4;

  display: flex;
  position: absolute;
  justify-content: space-around;

  width: 380px;
  margin-top: 37px;
  margin-right: -10px;

  border-radius: 2px;
  font-size: 20px;

  a {
    padding: 10px 12px;
    margin: 0 10px;
    display: block; // li 전체에 href 줌
  }

  .sero {
    border: solid 1px lightgray;
  }
`;

export default function MiniWriteOptions() {
  return (
    <MiniWriteOptionsBlock className="shadow">
      <li>
        <a href="#">경매</a>
      </li>
      <div className="sero"></div>
      <li>
        <a href="#">공구</a>
      </li>
      <div className="sero"></div>
      <li>
        <a href="#">
          <div>판매/교환/나눔</div>
        </a>
      </li>
    </MiniWriteOptionsBlock>
  );
}
