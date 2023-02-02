import Image from 'next/image';
import styled from 'styled-components';

const MenuBox = styled.div`
  position: absolute;
  top: 6%;
  right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 10%;

  button:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 696px) {
    display: none;
  }
`;

// 상단 헤더 메뉴바 (작은 창일 때)
const MenuForSmallWindow = () => {
  return (
    <MenuBox>
      <button>
        <Image src='/images/search.svg' alt='search' width={24} height={21} />
      </button>
      <button>
        <Image src='/images/menu.svg' alt='menu' width={24} height={21} />
      </button>
    </MenuBox>
  );
};
export default MenuForSmallWindow;
