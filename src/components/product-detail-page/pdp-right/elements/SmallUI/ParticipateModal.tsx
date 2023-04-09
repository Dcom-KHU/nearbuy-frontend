"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import CheckIfWriter from "../CheckIfWriter";
import ParticipateGroup from "../Participate/ParticipateGroup";
import ParticipantsGroup from "../Participate/ParticipantsGroup";
import ParticipateAuction from "../Participate/ParticipateAuction";
import ParticipantsAuction from "../Participate/ParticipantsAuction";

// 참여하기 버튼
export default function ParticipateModal({
  id,
  writer,
  postType,
}: {
  id: number;
  writer: string;
  postType: string;
}) {
  const isWriter = CheckIfWriter({ id });
  const type = postType;

  if (isWriter === false) {
    // 로그인 돼있고, 글작성자가 아닌 경우
    if (type === "group") {
      return <ParticipateGroup id={id} />;
    } else {
      return <ParticipateAuction id={id} />;
    }
  } else if (isWriter === true) {
    if (type === "group") {
      return <ParticipantsGroup id={id} writer={writer} />;
    } else {
      return <ParticipantsAuction id={id} writer={writer} />;
    }
  } else {
    // 로그인 안돼있는 경우
    return <></>;
  }
}
