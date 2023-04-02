// 에러창

import ReactDOM from 'react-dom';
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
  z-index: 10;
  /* } */
`;
const OverlayForm = styled.form`
  /* @media screen and (max-width: 707px) { */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 108px;
  background-color: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 30px;
  border-radius: 12px;

  /* } */
`;

interface LoginErrorModalProps {
  setErrorMessage(value: string): void;
  errorMessage: string;
}
interface OverlayProps {
  errorMessage: string;
}

const BackDropPortal = () => {
  return <BackDropBox />;
};
const OverlayPortal = ({ errorMessage }: OverlayProps) => {
  return (
    <OverlayForm>
      <p className='text-lg font-bold'>{errorMessage}</p>
      <p className='text-xs'>돌아가려면 아무데나 클릭하세요.</p>
    </OverlayForm>
  );
};

// 포탈
export default function LoginErrorModal({
  setErrorMessage,
  errorMessage,
}: LoginErrorModalProps) {
  return (
    <div onClick={() => setErrorMessage('')}>
      {ReactDOM.createPortal(
        <BackDropPortal />,
        document.getElementById('backdrop-root') as HTMLElement
      )}
      {ReactDOM.createPortal(
        <OverlayPortal errorMessage={errorMessage} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </div>
  );
}
