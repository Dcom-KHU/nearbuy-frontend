"use client";

import { useState } from "react";
import axios from "axios";
import { serverIP } from "@/../secrets.json";
import GetToken from "@/utils/getToken";
import styled from "styled-components";

const ModalOverlayBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainerBox = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  padding: 30px;
  border-radius: 20px;

  .report-buttons {
    border: solid 2px lightgray;
    border-radius: 8px;
    margin-left: 10px;
    padding: 8px;
  }
  #report-dropdown {
    padding: 5px 14px;
    border: solid 1px #9b9b9b;
  }
`;
const ReportTextArea = styled.textarea`
  border: solid 1px gray;
  margin: 15px 0;
  padding: 10px;
  height: 100px;
  width: 340px;
`;

function ReportModal({ id }: { id: number }) {
  const [ReportModal, setReportModal] = useState<boolean>(false);
  const [reportDetail, setReportDetail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const token = GetToken();

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const handleReport = async () => {
    try {
      await axios.post(
        `${serverIP}/api/post/report?id=${id}`,
        { detail: reportDetail, type: selectedOption },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setReportModal(false);
      alert("게시글이 신고되었습니다");
    } catch (error) {
      console.log(error, "handleReport실패");
      alert("신고 접수에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <button title="신고" onClick={() => setReportModal(true)}>
        Report
      </button>
      {ReportModal && (
        <ModalOverlayBox onClick={() => setReportModal(false)}>
          <ModalContainerBox onClick={(e) => e.stopPropagation()}>
            <h2 className="mb-3">게시글을 신고하시겠습니까?</h2>
            <div className="reportDropDown">
              <select
                id="report-dropdown"
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value="">신고 사유 선택</option>
                <option value="부적절한 판매 물품">부적절한 판매 물품</option>
                <option value="부적절한 게시글 내용">
                  부적절한 게시글 내용
                </option>
                <option value="사기 의심">사기 의심</option>
                <option value="개인정보 노출">개인정보 노출</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <ReportTextArea
              placeholder="신고 내용을 입력해주세요(최대 150자)"
              required
              maxLength={150}
              value={reportDetail}
              onChange={(e) => setReportDetail(e.target.value)}
            />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="report-buttons" onClick={handleReport}>
                신고
              </button>
              <button
                className="report-buttons"
                onClick={() => setReportModal(false)}
              >
                취소
              </button>
            </div>
          </ModalContainerBox>
        </ModalOverlayBox>
      )}
    </>
  );
}

export { ReportModal };
