"use client";

import Link from "next/link";
import styled from "styled-components";
import CheckIfWriter from "../CheckIfWriter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ActiveChatButtonBlock = styled(Link)`
  background-color: var(--background-color);
  border-radius: 8px;
  width: 100px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 5px;
  &:hover {
    color: var(--accent-color);
    font-weight: 600;
  }
`;

const InactiveChatButtonBlock = styled.div`
  background-color: #d8d8d8;
  color: #808080;
  border-radius: 8px;
  width: 100px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 5px;
  &.noLogin {
    width: 150px;
  }
`;

export default function ChatButton({
  id,
  ongoing,
}: {
  id: number;
  ongoing: boolean;
}) {
  const activeType = useSelector((state: RootState) => state.activePage.active);
  const isWriter = CheckIfWriter({ id }); // id 는 게시글 id

  if (isWriter === true) {
    if (activeType === "group") {
      // 글작성자 본인이고, 공구 게시글일 때
      return <ActiveChatButtonBlock href="#">단체 채팅</ActiveChatButtonBlock>;
    }
    // 글작성자이고 공구 게시글 아닐 때
    else
      return <ActiveChatButtonBlock href="#">채팅 확인</ActiveChatButtonBlock>;
  } else if (isWriter === false) {
    if (ongoing === true) {
      // 글작성자 아니고 로그인 돼있는데 거래 아직 진행중일 때
      return <ActiveChatButtonBlock href="#">채팅하기</ActiveChatButtonBlock>;
    } else {
      // 글작성자 아니고 로그인 돼있는데 거래 완료됐을 때
      return <InactiveChatButtonBlock>거래완료</InactiveChatButtonBlock>;
    }
  } else {
    // 로그인 안돼있을 때
    return (
      <InactiveChatButtonBlock className="noLogin">
        로그인 해주세요
      </InactiveChatButtonBlock>
    );
  }
}
