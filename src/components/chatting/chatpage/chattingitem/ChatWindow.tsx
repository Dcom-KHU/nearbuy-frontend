'use client';

import Image from 'next/image';
import styled from 'styled-components';

const ChatWindowBox = styled.div`
  position: absolute;
  background-color: white;
  bottom: 0;
  left: 0;
  padding: 30px;
  width: 100%;
`;
const BorderBox = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px 9px;
  textarea {
    width: 100%;
    height: 24px;
    background: none;
  }
`;
const FlexBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

// 채팅 보내는 부분
export default function ChatWindow() {
  return (
    <ChatWindowBox>
      <BorderBox>
        <FlexBox>
          <button>
            <Image
              src='/images/chatwindow/emoji.svg'
              alt='emoji'
              width={24}
              height={24}
            />
          </button>
          <textarea placeholder='입력을 하든지 말든지' />
          <button>
            <Image
              src='/images/chatwindow/picture.svg'
              alt='emoji'
              width={24}
              height={24}
            />
          </button>
          <button>
            <Image
              src='/images/chatwindow/send.svg'
              alt='emoji'
              width={24}
              height={24}
            />
          </button>
        </FlexBox>
      </BorderBox>
    </ChatWindowBox>
  );
}
