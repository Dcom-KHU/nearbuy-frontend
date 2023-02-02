import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const ToolsBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  img:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 695px) {
    display: none;
  }
`;

// 상단 헤더 도구들 (검색 ~ 유저 + 로그인/로그아웃)
const Tools = () => {
  return (
    <ToolsBox>
      <button>
        <Image src='/images/search.svg' alt='search' width={24} height={21} />
      </button>
      <Link href='#'>
        <Image src='/images/heart.svg' alt='heart' width={24} height={21} />
      </Link>
      <button>
        <Image src='/images/message.svg' alt='message' width={24} height={21} />
      </button>
      <Link href='#'>
        <Image src='/images/user.svg' alt='user' width={24} height={21} />
      </Link>
    </ToolsBox>
  );
};
export default Tools;
