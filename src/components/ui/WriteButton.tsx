"use client";

import styled from "styled-components";

const WriteButtonBlock = styled.div`
  position: fixed;
  bottom: 4vw;
  right: 10vw;

  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  background-color: #c0e1ff;

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

export default function WriteButton() {
  return (
    <WriteButtonBlock>
      <div className="cross-icon"></div>
    </WriteButtonBlock>
  );
}
