"use client";

import { useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import styled from "styled-components";
import CheckIfWriter from "../CheckIfWriter";
import DoParticipate from "../DoParticipate";
import SeeParticipants from "../SeeParticipants";

// 참여하기 버튼
export default function ParticipateModal({
  id,
  writer,
}: {
  id: number;
  writer: string;
}) {
  const isWriter = CheckIfWriter({ id });

  if (isWriter === false) {
    // 로그인 돼있고, 글작성자가 아닌 경우
    return <DoParticipate id={id} />;
  } else if (isWriter === true) {
    // 글 작성자인 경우
    return <SeeParticipants id={id} writer={writer} />;
  } else {
    // 로그인 안돼있는 경우
    return <></>;
  }
}
