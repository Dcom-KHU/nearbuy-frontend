'use client';

import { useGet } from '@/hooks/useHttp';
import { RootState } from '@/store/store';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import List from '../list/List';
import ListNav from '../list/ListNav';
import Menu from './menu/Menu';
import User from './user/User';
import { serverIP } from '@/../secrets.json';
import { useEffect, useState } from 'react';

const MyPageBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1000px;
  padding: 40px 5%;
  gap: 7%;

  // 작은 화면
  @media screen and (max-width: 707px) {
    padding: 20px 5%;
    flex-direction: column;
    gap: 50px;
  }
`;

// mypage
const MyPage = () => {
  const { myPosts, posts, favorites, reviews } = useSelector(
    (state: RootState) => state.myPageMenuToggle
  );
  const [myPostsData, setMyPostsData] = useState();
  const [postsData, setPostsData] = useState();
  const [favoritesData, setFavoritesData] = useState();
  const [reviewsData, setReviewsData] = useState();
  const fetchData = async (url: string, id: string | number = 1) => {
    try {
      const response = await axios.get(`${serverIP}/api/user/page${url}`, {
        params: {
          id: 1,
        },
      });
      if (url === '/my') {
        setMyPostsData(response.data.post);
      }
      if (url === '/other') {
        setPostsData(response.data.post);
      } else if (url === '/like') {
        setFavoritesData(response.data.post);
      } else if (url === '/review') {
        setReviewsData(response.data.review);
      }
    } catch (error) {
      console.error(error);
      // 오류 발생 시
      if (error.response.status) {
        console.error('response.status', error.response.status);
      } else if (error.request) {
        console.error('requst', error.request);
      } else {
        console.error('Error', error.message);
      }
    }
  };
  useEffect(() => {
    fetchData('/my');
    fetchData('/other');
    fetchData('/like');
    fetchData('/review');
  }, []);

  // const fetchData = async (id: string | number = 1) => {
  //   const response = await axios.get(`${serverIP}/api/user/page/all`, {
  //     params: {
  //       id,
  //     },
  //   });
  //   const { myPosts, posts, favorites, reviews } = response.data;
  //   setMyPostsData(myPosts.post);
  //   setPostsData(posts.post);
  //   setFavoritesData(favorites.post);
  //   setReviewsData(reviews.review);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <MyPageBox>
        <User />
        <Menu />
      </MyPageBox>
      {/* {myPosts && (
        <>
          <ListNav />
          <List dataList={myPostsData} />
        </>
      )} */}
      {posts && (
        <>
          <ListNav />
          <List dataList={postsData} />
        </>
      )}
      {favorites && (
        <>
          <ListNav />
          <List dataList={favoritesData} />
        </>
      )}
      {reviews && (
        <>
          <ListNav />
          <List dataList={reviewsData} />
        </>
      )}
    </div>
  );
};
export default MyPage;
