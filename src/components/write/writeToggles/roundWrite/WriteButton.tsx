"use client";

import styled from "styled-components";
import React from "react";

const WriteButtonBlock = styled.button`
  //background-color: #c0e1ff;

  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .cross-icon {
    background: #fff;
    height: 40px;
    position: relative;
    width: 4px;

    &:after {
      background: #fff;
      content: "";
      height: 4px;
      left: -18px;
      position: absolute;
      top: 18px;
      width: 40px;
    }
  }
`;

function WriteButton(props: { onClick: () => void }) {
  return (
    <WriteButtonBlock
      className="shadow-md bg-[#c0e1ff] hover:bg-[#b4dbff] transition duration-150"
      type="button"
      onClick={props.onClick}
    >
      <div className="cross-icon"></div>
    </WriteButtonBlock>
  );
}

export default WriteButton;
