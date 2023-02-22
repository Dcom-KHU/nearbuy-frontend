"use client";

import { useState } from "react";
import styled from "styled-components";
import MiniWriteButton from "./MiniWriteButton";
import MiniWriteOptions from "./MiniWriteOptions";

const MiniWriteToggleBlock = styled.div`
  // background-color: pink;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 35px;
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
