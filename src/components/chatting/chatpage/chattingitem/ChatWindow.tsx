"use client";

import { WebSocketContext } from "@/context/WebSocketContext";
import Image from "next/image";
import { KeyboardEventHandler, useContext, useState } from "react";
import styled from "styled-components";
import Cookie from "js-cookie";
import customAxios from "@/utils/customAxios";

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
  input {
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

interface IChatWindowProps {
  room: number | undefined;
}

// 채팅 보내는 부분
export default function ChatWindow({ room }: IChatWindowProps) {
  const [input, setInput] = useState<string>();

  const inputChangeHandler = (input: string) => {
    setInput(input);
  };

  const sendMsgHandler = async () => {
    const payload = { room: room, message: input };
    await customAxios
      .post("/api/chat/send", {}, { params: payload })
      .then(data => {
        // console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const keyPressHandler = (e: any) => {
    if (e.key === "Enter") {
      sendMsgHandler();
    }
  };

  return (
    <ChatWindowBox>
      <BorderBox>
        <FlexBox>
          <button>
            <Image
              src="/images/chatwindow/emoji.svg"
              alt="emoji"
              width={24}
              height={24}
            />
          </button>
          {/* testarea로 바꿀지 여부에 대해 회의 필요.. */}
          <input
            placeholder="입력을 하든지 말든지"
            onChange={e => inputChangeHandler(e.target.value)}
            value={input}
            onKeyDown={e => keyPressHandler(e)}
          />
          <button>
            <Image
              src="/images/chatwindow/picture.svg"
              alt="emoji"
              width={24}
              height={24}
            />
          </button>
          <button onClick={sendMsgHandler}>
            <Image
              src="/images/chatwindow/send.svg"
              alt="emoji"
              width={24}
              height={24}
            />
          </button>
        </FlexBox>
      </BorderBox>
    </ChatWindowBox>
  );
}
