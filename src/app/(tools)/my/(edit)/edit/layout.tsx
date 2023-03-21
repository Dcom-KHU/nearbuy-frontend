'use client';

import SideNav from '@/components/userpage/user/useredit/SideNav';
import styled from 'styled-components';

const SideSection = styled.section`
  margin-top: 40vh;
  transform: translate(0, -40%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  padding: 30px;
  @media screen and (max-width: 707px) {
    flex-direction: column;
    align-items: center;
    margin-top: 35vh;
    padding-bottom: 0px;
  }
`;
const LayoutBox = styled.div`
  width: 100%;
  max-width: 800px;
  border: 1px solid #b69eff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: relative;
`;

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <SideSection>
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideNav />
      <LayoutBox>{children}</LayoutBox>
    </SideSection>
  );
}
