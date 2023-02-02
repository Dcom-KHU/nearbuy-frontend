import styled from 'styled-components';

const LoginBox = styled.div`
  button:hover {
    color: #9242c0;
    transform: scale(1.1);
  }
  @media screen and (max-width: 695px) {
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
