"use client";

import styled from "styled-components";
import Image from "next/image";
import React from "react";

<<<<<<< HEAD
function MiniWriteButton(props: { onClick: () => void }) {
  return (
    <button type="button" onClick={props.onClick} className="text-red-500">
      <a target="_blank" rel="noreferrer">
        <Image
          src="/images/write.svg"
          alt="write"
          width={25}
          height={25}
          className="temp"
        />
      </a>
    </button>
=======
const MiniWriteButtonBlock = styled.button`
  //background-color: #c0e1ff;

  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MiniWriteButton(props: { onClick: () => void }) {
  return (
    <MiniWriteButtonBlock type="button" onClick={props.onClick}>
      <a target="_blank" rel="noreferrer">
        <Image src="/images/write.svg" alt="write" width={21} height={21} />
      </a>
    </MiniWriteButtonBlock>
>>>>>>> ad9f05d ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
  );
}

export default MiniWriteButton;
