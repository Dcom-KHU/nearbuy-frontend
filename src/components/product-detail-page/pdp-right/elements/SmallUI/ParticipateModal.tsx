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
  increase,
  current,
  ongoing,
}: {
  id: number;
  writer: string;
  postType: string;
  increase: number;
  current: number;
  ongoing: boolean;
}) {
  const isWriter = CheckIfWriter({ id });
  const type = postType;

  if (isWriter === false) {
    // 로그인 돼있고, 글작성자가 아닌 경우
    return ongoing === true ? (
      type === "group" ? (
        <ParticipateGroup id={id} />
      ) : (
        <ParticipateAuction id={id} increase={increase} current={current} />
      )
    ) : (
      <div style={{ marginTop: "31px", marginRight: "10px", color: "#595959" }}>
        거래 완료된 상품입니다
      </div>
    );
  } else if (isWriter === true) {
    if (type === "group") {
      return <ParticipantsGroup id={id} writer={writer} />;
    } else {
      return <ParticipantsAuction id={id} />;
    }
  } else {
    // 로그인 안돼있는 경우
    return <></>;
  }
}
