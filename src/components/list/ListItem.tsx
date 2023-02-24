'use client';

import { RootState } from '@/store/store';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ItemContent from './ItemContent';
import { DetailPageState } from '@/store/detailPage/detailPageSlice';

const ListItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding: 15px;

  &:hover {
    transition: 0.125s ease-in;
    transform: scale(1.01); // 없어도됨
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
`;
const ImageDeco = styled(Image)`
  // 하트~
  position: absolute;
  bottom: 110px;
  right: 20px;
`;

// 게시글 목록에서 작게 보여지는 게시글 한 개
// TODO: SVG 색칠 하기
export default function ListItem() {
  const state = useSelector((state: RootState) => state.detailPage);
  // FIXME: 전체 페이지일 경우 또 따로 해줘야 함
  const nowON = Object.keys(state).find(
    (key) => state[key as keyof DetailPageState] === true
  );
  return (
    <ListItemBox>
      <Link href={`/${nowON}/detail`}>
        <Image
          src='/images/for-demo/gloves.jpg'
          alt='gloves'
          width={200}
          height={200}
          // FIXME: image 비율 깨고 200 x 200 으로 설정하기 밑에 코드는 비효율적으로 보임
          style={{ width: '200px', height: '200px' }}
        />
        <ItemContent />
      </Link>
      <button>
        <ImageDeco
          src='/images/header/heart.svg'
          alt='like'
          width={24}
          height={24}
        />
      </button>
    </ListItemBox>
  );
}
