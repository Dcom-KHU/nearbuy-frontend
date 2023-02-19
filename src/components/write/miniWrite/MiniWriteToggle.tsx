"use client";

import { useState } from "react";
import styled from "styled-components";
import MiniWriteButton from "./MiniWriteButton";
import MiniWriteOptions from "./MiniWriteOptions";

const MiniWriteToggleBlock = styled.div`
<<<<<<< HEAD
  // background-color: pink;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 35px;
=======
  //background-color: pink;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100px;
>>>>>>> ad9f05d ([Feat/Write] 페이지 필터(pagesort) 옆에 write icon과 토글 추가)
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
