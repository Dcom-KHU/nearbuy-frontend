"use client";

import Link from "next/link";
import styled from "styled-components";
import CheckIfWriter from "../CheckIfWriter";
import customAxios from "@/utils/customAxios";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";

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
  // 어떤 게시물이냐에 따라, 표시되는 내용 다르게 하기 위한 상태 관리
  const activeType = useSelector((state: RootState) => state.activePage.active);
  const [tmpActiveType, setTmpActionType] = useState<string>("");
  const isWriter = CheckIfWriter({ id }); // id 는 게시글 id
  const [apiUrl, setApiUrl] = useState<string>(`api/chat/enter`);
  const router = useRouter();

  const makeChatRoomHandler = async () => {
    // 공구 채팅방 생성 코드 (api 요청을 get으로 하도록 명세가 작성되어있음. 오류로 보임)
    // 현재 공구 채팅방 생성 시 해당 채팅방 멤버들의 채팅관련 api 모두 500에러 발생(백엔드 문제로 보임)
    // if (activeType === "group" || tmpActiveType === "group") {
    //   await customAxios
    //     .get(apiUrl, { params: { id: id } })
    //     .then(data => {
    //       router.push("/chatting");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }

    await customAxios
      .post(apiUrl, {}, { params: { id: id } })
      .then(data => {
        router.push("/chatting");
      })
      .catch(err => {
        console.log(err);
      });

    // 혹시 채팅방 만들기 api response로 이미 만들어져 있는 채팅방에 대해서 200이 아닌 에러를 출력할 시를 대비해...
    router.push("/chatting");
  };

  useEffect(() => {
    if (activeType) {
      switch (activeType) {
        case "sale" || "exchange" || "free" || "auction":
          setApiUrl(`api/chat/enter`);
          break;
        // 경매는 낙찰할 유저 이름이 필요... 이 컴포넌트에서 해당 유저에 대한 정보를 가지고 있어야 함
        case "auction":
          setApiUrl(`api/post/auction/finish`);
          break;
        case "group":
          setApiUrl(`api/post/group/finish`);
          break;
        default:
          setApiUrl(`api/chat/enter`);
      }
    } else if (tmpActiveType) {
      switch (tmpActiveType) {
        case "sale" || "exchange" || "free" || "auction":
          setApiUrl(`api/chat/enter`);
          break;
        // 경매는 낙찰할 유저 이름이 필요... 이 컴포넌트에서 해당 유저에 대한 정보를 가지고 있어야 함
        case "auction":
          setApiUrl(`api/post/auction/finish`);
          break;
        case "group":
          setApiUrl(`api/post/group/finish`);
          break;
        default:
          setApiUrl(`api/chat/enter`);
      }
    }
  }, [activeType, tmpActiveType]);

  // 리로딩하면 activeType null되는 문제때문에 임시로 처리..
  useEffect(() => {
    if (activeType === undefined || activeType === null) {
      const url = window.location.href;

      const targetStartIdx = url.indexOf(
        "/",
        url.indexOf("/", url.indexOf("/") + 1) + 1
      );
      const targetFinishIdx = url.indexOf("/", targetStartIdx + 1);
      setTmpActionType(url.slice(targetStartIdx + 1, targetFinishIdx));
    }
  }, [activeType]);

  // 글작성자일 때
  if (isWriter === true) {
    // 글작성자 본인이고, 공구 게시글일 때
    if (activeType === "group" || tmpActiveType === "group") {
      return (
        <ActiveChatButtonBlock href="#" onClick={() => makeChatRoomHandler()}>
          단체 채팅
        </ActiveChatButtonBlock>
      );
      // 글작성자 본인이고, 경매 게시글일 때
    } else if (activeType === "auction" || tmpActiveType === "auction") {
      return (
        <ActiveChatButtonBlock href="/chatting">
          채팅 확인
        </ActiveChatButtonBlock>
      );
    }
    // 글작성자이고 공구나 경매 게시글 아닐 때
    else
      return (
        <ActiveChatButtonBlock href="/chatting">
          채팅 확인
        </ActiveChatButtonBlock>
      );
  } else if (isWriter === false) {
    if (ongoing === true) {
      // 글작성자 아니고 로그인 돼있는데 거래 아직 진행중일 때
      return (
        <ActiveChatButtonBlock href="#" onClick={() => makeChatRoomHandler()}>
          채팅하기
        </ActiveChatButtonBlock>
      );
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
