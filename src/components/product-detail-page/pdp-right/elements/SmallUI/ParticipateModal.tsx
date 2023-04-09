"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CheckIfWriter from "../CheckIfWriter";
import ParticipateGroup from "../ParticipateGroup";
import ParticipantsGroup from "../ParticipantsGroup";

// 참여하기 버튼
export default function ParticipateModal({
  id,
  writer,
}: {
  id: number;
  writer: string;
}) {
  const isWriter = CheckIfWriter({ id });
  const activeType = useSelector((state: RootState) => state.activePage.active);

  if (isWriter === false) {
    // 로그인 돼있고, 글작성자가 아닌 경우
    return <ParticipateGroup id={id} />;
  } else if (isWriter === true) {
    // 글 작성자인 경우
    return <ParticipantsGroup id={id} writer={writer} />;
  } else {
    // 로그인 안돼있는 경우
    return <></>;
  }
}
