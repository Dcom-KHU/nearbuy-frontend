import styled from "styled-components";

export const ModalOverlayBox = styled.div`
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

export const ModalContainerBox = styled.div`
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 27px;
  border-radius: 20px;

  .parti-buttons {
    border: solid 2px lightgray;
    border-radius: 8px;
    margin-left: 10px;
    padding: 8px;
  }
  .line {
    width: 100%;
    border: solid 1px lightgray;
    margin-bottom: 10px;
  }
  ul {
    border: solid 1px lightgray;
    border-radius: 3px;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 10px;
    padding: 5px 10px;
    width: 340px;
    &.group-participant {
      width: 280px;
    }
  }
  li {
    // 개별 참여자 박스
    display: flex;
    justify-content: space-between;
    padding: 3px 7px;
    div:nth-child(2) {
      color: #464646;
    }
    div:nth-child(3) {
      color: #999999;
    }
  }
  button {
    margin-top: 10px;
    margin-right: -1px;
  }
`;

export const ParticipateButton = styled.button`
  background-color: var(--background-color);
  border-radius: 8px;
  width: 130px;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  margin-right: 11px;
  &:hover {
    color: var(--accent-color);
    font-weight: 600;
  }
`;
