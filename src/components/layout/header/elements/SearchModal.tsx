'use client';

import ReactDOM from 'react-dom';
import { searchToggle } from '@/store/searchToggle/searchToggleSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const BackDropBox = styled.div`
  /* TODO: 작은 화면과 큰 화면일 때, 검색창 다르게 표시 */
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* } */
`;
const OverlayForm = styled.form`
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 108px;
  background-color: white;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  gap: 30px;
  input {
    height: 30%;
    width: 100%;
    background-color: rgb(242, 243, 246);
    border-radius: 8px;
    padding: 0 10px;
  }
  button {
    min-width: 48px;
    background-color: var(--background-color);
    border-radius: 8px;
    padding: 5px 10px;
  }
  button:hover {
    color: var(--accent-color);
    font-weight: bold;
  }
  /* } */
`;

// 검색창
const BackDropPortal = () => {
  return <BackDropBox />;
};
const OverlayPortal: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <OverlayForm>
      <input type='search' placeholder='검색어를 입력해주세요.' />
      <button onClick={props.onClick}>취소</button>
    </OverlayForm>
  );
};

// 포탈
const SearchModal = () => {
  const dispatch = useDispatch();
  const searchToggleHandler = () => {
    dispatch(searchToggle());
  };
  return (
    <>
      {ReactDOM.createPortal(
        <BackDropPortal />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <OverlayPortal onClick={searchToggleHandler} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};
export default SearchModal;
