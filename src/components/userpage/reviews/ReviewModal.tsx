// 에러창

import { myPageMenuToggle } from '@/store/mypageMenuToggle/myPageMenuToggleSlice';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ReviewList from './ReviewList';

const BackDropBox = styled.div`
  /* TODO: 작은 화면과 큰 화면일 때, 검색창 다르게 표시 */
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  /* } */
`;
const OverlayForm = styled.form`
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  width: 80%;
  max-width: 1000px;
  height: 50vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px;
  border-radius: 12px;
  overflow: auto;
  font-size: 20px;

  /* } */
`;

const BackDropPortal = () => {
  return <BackDropBox />;
};
const OverlayPortal = ({ dataList }) => {
  return (
    <OverlayForm>
      <ReviewList dataList={dataList} />
    </OverlayForm>
  );
};

// 포탈
export default function ReviewModal({ dataList }) {
  const dispatch = useDispatch();
  console.log('res', dataList);

  return (
    <div
      onClick={() => {
        dispatch(myPageMenuToggle('review'));
      }}
    >
      {ReactDOM.createPortal(
        <BackDropPortal />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <OverlayPortal dataList={dataList} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
}
