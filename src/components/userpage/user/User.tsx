'use client';

import {
  getLocation,
  getMannerPoint,
  userName,
} from '@/store/userInfo/userInfoSlice';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import UserEdit from './UserEdit';
import UserInfo from './userinfo/UserInfo';
import UserTemp from './UserTemp';
import Cookie from 'js-cookie';
import axios from 'axios';
import { serverIP } from '@/../secrets.json';
import { useEffect, useReducer, useState } from 'react';

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
  const userId = Cookie.get('userId');
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${serverIP}/api/user/page`, {
        params: { id: userId },
      });
      setUserData(response.data);
    };
    fetchData();
  }, []);
  const mannerPoint = userData?.mannerPoint;
  const name = userData?.name;
  const location = userData?.location;
  const image = userData?.image;
  const rest = { name, image, location };

  const dispatch = useDispatch();
  dispatch(userName(name));
  dispatch(getMannerPoint(mannerPoint));
  dispatch(getLocation(location));

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
