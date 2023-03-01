'use client';

import { useState } from 'react';
import styled from 'styled-components';
import WriteButton from './WriteButton';
import WriteOptions from './WriteOptions';

const WriteToggleBlock = styled.div`
  //background-color: pink;

  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100px;
  bottom: 4vw;
  right: 7vw;
`;

function WriteToggle(props: { onClick?: () => void }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <WriteToggleBlock>
        <WriteButton onClick={() => setToggle(!toggle)} />
        {toggle && (
          <>
            <WriteOptions />
          </>
        )}
      </WriteToggleBlock>
    </div>
  );
}

export default WriteToggle;
