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

  // 작은 화면
  @media screen and (max-width: 707px) {
    display: none;
  }
`;

// 상단 헤더 도구들 (검색 ~ 유저)
const Tools = () => {
  return (
    <ToolsBox>
      <button>
        <Image
          src='/images/header/search.svg'
          alt='search'
          width={24}
          height={21}
        />
      </button>
      <Link href='/like'>
        <Image
          src='/images/header/heart.svg'
          alt='heart'
          width={24}
          height={21}
        />
      </Link>
      <Link href='/chat'>
        <Image
          src='/images/header/message.svg'
          alt='message'
          width={24}
          height={21}
        />
      </Link>
      <Link href='/my'>
        <Image
          src='/images/header/user.svg'
          alt='user'
          width={24}
          height={21}
        />
      </Link>
    </ToolsBox>
  );
};
export default Tools;
