"use client";

import styled from "styled-components";

const MiniWriteOptionsBlock = styled.ul`
<<<<<<< HEAD
<<<<<<< HEAD
  background-color: #f4f4f4;

  display: flex;
  position: absolute;
  justify-content: space-around;

  width: 300px;
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
=======
=======
>>>>>>> 916b97e ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
  background-color: lavender;
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;

  a {
    padding: 10px;
    display: block; // li 전체에 href 줌
  }
<<<<<<< HEAD
>>>>>>> ad9f05d ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
=======
>>>>>>> 916b97e ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
`;

export default function MiniWriteOptions() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <MiniWriteOptionsBlock className="shadow">
      <li>
        <a href="#">경매</a>
      </li>
      <div className="sero"></div>
      <li>
        <a href="#">공구</a>
      </li>
      <div className="sero"></div>
=======
=======
>>>>>>> 916b97e ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
    <MiniWriteOptionsBlock>
      <li>
        <a href="#">경매</a>
      </li>
      <li>
        <a href="#">공구</a>
      </li>
<<<<<<< HEAD
>>>>>>> ad9f05d ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
=======
>>>>>>> 916b97e ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
      <li>
        <a href="#">
          <div>판/교/나</div>
        </a>
      </li>
    </MiniWriteOptionsBlock>
  );
}
