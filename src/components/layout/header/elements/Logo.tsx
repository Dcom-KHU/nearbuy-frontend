'use client';

import Link from 'next/link';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  font-size: 32px;
  font-weight: bold;
`;

// 상단 헤더 로고
const Logo = () => {
  return <LogoLink href='/'>NEARBUY</LogoLink>;
};
export default Logo;
