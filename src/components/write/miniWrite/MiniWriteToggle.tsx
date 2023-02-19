"use client";

import { useState } from "react";
import styled from "styled-components";
import MiniWriteButton from "./MiniWriteButton";
import MiniWriteOptions from "./MiniWriteOptions";

const MiniWriteToggleBlock = styled.div`
  //background-color: pink;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100px;
`;

function MiniWriteToggle(props: { onClick?: () => void }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <MiniWriteToggleBlock>
        <MiniWriteButton onClick={() => setToggle(!toggle)} />
        {toggle && (
          <>
            <MiniWriteOptions />
          </>
        )}
      </MiniWriteToggleBlock>
    </div>
  );
}

export default MiniWriteToggle;
