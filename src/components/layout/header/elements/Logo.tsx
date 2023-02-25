'use client';

import { isActive } from '@/store/detailPage/activePageSlice';
import { menuToggle } from '@/store/menuToggle/menuToggleSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const LogoLink = styled(Link)`
  font-size: 32px;
  font-weight: bold;
`;

// 상단 헤더 로고
const Logo = () => {
  const dispatch = useDispatch();
  const menuToggleHandler = () => {
    dispatch(menuToggle());
    dispatch(isActive(null));
  };
  return (
    <LogoLink href='/' onClick={menuToggleHandler}>
      NEARBUY
    </LogoLink>
  );
};
export default Logo;
