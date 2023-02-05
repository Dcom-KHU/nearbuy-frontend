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

// 수정하기 버튼
const UserEdit = () => {
  return (
    <UserEditBox>
      <Link href='/my/edit'>
        {/* tailwind hover 작동 안 함 */}
        <div className='hover:scale-110'>
          <Image
            src='/images/setting.svg'
            alt='setting'
            width={20}
            height={20}
          />
        </div>
      </Link>
      <Link href='/my/edit'>수정하기</Link>
    </UserEditBox>
  );
};
export default UserEdit;
