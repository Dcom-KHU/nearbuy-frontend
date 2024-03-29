'use client';

import './globals.css';
import StyledComponentsRegistry from './lib/registry';
import Header from '@/components/layout/header/Header';
import { Providers } from './providers';
import Footer from '@/components/layout/footer/Footer';
import styled from 'styled-components';

// main 부분 내용 잘림 방지, 위에 header 만큼 margin-top
const Box = styled.div`
  margin-top: 88px;
  // TODO: 햄버거 버튼 누를 시, main 내용이 그 만큼 아래로 내려가도록 하고 싶음. (후순위)
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head />
      <body>
        <div id='backdrop-root'></div>
        <div id='overlay-root'></div>
        <Providers>
          <StyledComponentsRegistry>
            <Header />
            <Box>{children}</Box>
            <Footer />
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
