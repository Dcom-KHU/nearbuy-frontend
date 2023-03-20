'use client';

import { useGet } from '@/hooks/useHttp';
import styled from 'styled-components';
import UserEdit from './UserEdit';
import UserInfo from './userinfo/UserInfo';
import UserTemp from './UserTemp';

const UserBox = styled.div`
  width: 50%;
  min-width: 183px;
  max-width: 243px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface Itemp {
  image: string;
  location: string;
  mannerPoint: number;
  name: string;
}

// 마이페이지 왼쪽 부분
const User = () => {
  const {
    data: getData,
    isLoading: getIsLoading,
    error: getError,
  } = useGet<Itemp>({
    url: '/api/user/page',
    // TODO: params 동적으로 바꾸기.
    params: { id: 1 },
  });
  const { mannerPoint, ...rest } = getData ?? {};
  return (
    <UserBox>
      <UserEdit />
      <UserInfo infoData={rest} />
      <div className='my-0 mx-auto'>
        <UserTemp mannerPoint={mannerPoint} />
      </div>
    </UserBox>
  );
};
export default User;
