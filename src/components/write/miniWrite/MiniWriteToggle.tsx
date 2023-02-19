"use client";

import { useState } from "react";
import styled from "styled-components";
import MiniWriteButton from "./MiniWriteButton";
import MiniWriteOptions from "./MiniWriteOptions";

const MiniWriteToggleBlock = styled.div`
  // background-color: pink;

  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  align-items: flex-end;
  width: 35px;
=======
  align-items: center;
  width: 50px;
>>>>>>> 307e869 ([Fix/Write] write 버튼 클릭시 토글에 의해 레이아웃 깨지는 현상  수정)
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
