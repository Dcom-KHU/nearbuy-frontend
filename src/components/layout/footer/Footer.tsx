import Image from 'next/image';
import styled from 'styled-components';

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  /* border-top: 1px solid black; */
  padding: 70px 0;
  gap: 10px;

  a:hover {
    transform: scale(1.1);
  }
`;

// 하단 footer
const Footer = () => {
  return (
    <FooterBox>
      <h1>Contact us</h1>
      <a
        href='https://github.com/Dcom-KHU/nearbuy-frontend'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src='/images/footer/github-mark.svg'
          alt='menu'
          width={24}
          height={21}
        />
      </a>
      <a
        href='https://github.com/Dcom-KHU/nearbuy-backend'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src='/images/footer/github-mark.svg'
          alt='menu'
          width={24}
          height={21}
        />
      </a>
    </FooterBox>
  );
};
export default Footer;
