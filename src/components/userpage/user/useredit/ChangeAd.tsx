'use client';

import Button from '@/components/ui/Button';
import Image from 'next/image';
import styled from 'styled-components';

const AdForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  position: relative;

  input {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: var(--border-radius);
  }
  button {
    position: absolute;
    bottom: -230%;
    right: -5%;
  }
`;

// 마이페이지 수정하기 - 주소 변경
const ChangeAd = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 mb-8'>
      <AdForm>
        <label htmlFor='ad'>주소</label>
        <input id='ad' type='search' />
        <button>
          <Image
            src='/images/header/search.svg'
            alt='search'
            width={18}
            height={18}
          />
        </button>
        <Button>수정 완료</Button>
      </AdForm>
      <div>지도 사진</div>
    </div>
  );
};
export default ChangeAd;
