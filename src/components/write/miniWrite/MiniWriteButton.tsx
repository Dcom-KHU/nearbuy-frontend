"use client";

import styled from "styled-components";
import Image from "next/image";
import React from "react";

const MiniWriteButtonBlock = styled.button`
  //background-color: #c0e1ff;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

function MiniWriteButton(props: { onClick: () => void }) {
  return (
    <MiniWriteButtonBlock type="button" onClick={props.onClick}>
      <a target="_blank" rel="noreferrer">
        <Image src="/images/write.svg" alt="write" width={21} height={21} />
      </a>
    </MiniWriteButtonBlock>
  );
}

export default MiniWriteButton;
