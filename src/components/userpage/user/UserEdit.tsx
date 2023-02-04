'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const UserEditBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  /* a:hover {
    transform: scale(1.1);
  } */
`;

const UserEdit = () => {
  return (
    <UserEditBox>
      <Link href='#'>
        <div className='hover:scale-150'>
          <Image
            src='/images/setting.svg'
            alt='setting'
            width={20}
            height={21}
          />
        </div>
      </Link>
      <div>수정하기</div>
    </UserEditBox>
  );
};
export default UserEdit;
