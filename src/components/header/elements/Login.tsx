import styled from 'styled-components';
import '../../../app/globals.css';

const LoginBox = styled.div`
  button:hover {
    color: var(--accent-color);
    transform: scale(1.1);
  }

  // 작은 화면
  @media screen and (max-width: 707px) {
    width: 100%;
    display: flex;
    justify-content: center;
    button:hover {
      font-weight: bold;
    }
  }
`;

// 상단 헤더 로그인/로그아웃 버튼
const Login = () => {
  return (
    <LoginBox>
      <button>Login</button>
    </LoginBox>
  );
};
export default Login;
