"use client";

import styled from "styled-components";

const MiniWriteOptionsBlock = styled.ul`
  background-color: lavender;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;

  a {
    padding: 10px;
    display: block; // li 전체에 href 줌
  }
`;

export default function MiniWriteOptions() {
  return (
    <MiniWriteOptionsBlock>
      <li>
        <a href="#">경매</a>
      </li>
      <li>
        <a href="#">공구</a>
      </li>
      <li>
        <a href="#">
          <div>판/교/나</div>
        </a>
      </li>
    </MiniWriteOptionsBlock>
  );
}
