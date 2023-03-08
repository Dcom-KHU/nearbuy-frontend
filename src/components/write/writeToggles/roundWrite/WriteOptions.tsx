"use client";

import styled from "styled-components";

const WriteOptionsBlock = styled.ul`
  background-color: whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 3px;
  height: 200px;
  width: 120px;
  margin-bottom: 13px;

  border-radius: 2px;
  font-size: 20px;
  text-align: center;

  a {
    padding: 15px;
    display: block; // li 전체에 href 줌
  }

  .garo {
    border: solid 1px lightgray;
  }
`;

export default function WriteOptions() {
  return (
    <WriteOptionsBlock className="shadow-md">
      <li>
        <a href="/writeauction">경매</a>
      </li>
      <div className="garo"></div>
      <li>
        <a href="/writegroup">공구</a>
      </li>
      <div className="garo"></div>
      <li>
        <a href="/writesell">
          <div>판/교/나</div>
        </a>
      </li>
    </WriteOptionsBlock>
  );
}
