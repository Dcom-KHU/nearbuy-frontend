'use client';

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
import ReviewModal from './reviews/ReviewModal';
import Cookie from 'js-cookie';
import List2 from '../list/List2';

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
  // 마이페이지에서 각 항목별 리스팅 하기 위해 activeType 생성
  const [listItemCount, setListItemCount] = useState({});

  const [activeType, setActiveType] = useState('board');
  const { myPosts, posts, favorites, reviews } = useSelector(
    (state: RootState) => state.myPageMenuToggle
  );
  const userId = Cookie.get('userId');
  const [myPostsData, setMyPostsData] = useState();
  const [postsData, setPostsData] = useState();
  const [favoritesData, setFavoritesData] = useState();
  const [reviewsData, setReviewsData] = useState();
  const fetchData = async (url: string, id: string | number = 1) => {
    try {
      const response = await axios.get(`${serverIP}/api/user/page${url}`, {
        params: {
          id: userId,
        },
      });

      if (url === '/my/id') {
        setMyPostsData(response.data.post);
        setListItemCount((prevState) => ({
          ...prevState,
          my: response.data.post.length,
        }));
      } else if (url === '/other') {
        setPostsData(response.data.post);
        setListItemCount((prevState) => ({
          ...prevState,
          other: response.data.post.length,
        }));
      } else if (url === '/like') {
        setFavoritesData(response.data.post);
        setListItemCount((prevState) => ({
          ...prevState,
          like: response.data.post.length,
        }));
      } else if (url === '/review') {
        setReviewsData(response.data.review);
        setListItemCount((prevState) => ({
          ...prevState,
          review: response.data.review.length,
        }));
      }
      // console.log('a', myPostsData);
      // console.log('b', postsData);
      // console.log('c', favoritesData);
      // console.log('d', reviewsData);
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
    fetchData('/my/id');
    fetchData('/other');
    fetchData('/like');
    fetchData('/review');
  }, []);
  return (
    <div className='flex flex-col items-center justify-center'>
      <MyPageBox>
        <User />
        <Menu count={listItemCount} />
      </MyPageBox>
      {myPosts && (
        <>
          <ListNav activeType={activeType} setActiveType={setActiveType} />
          <List2 dataList={myPostsData} />
        </>
      )}
      {posts && (
        <>
          {/* List에 activeType props로 보내면, 마이페이지 내의 게시글 리스팅. */}
          {/* List에 activeType 없으면, 전체 페이지 내의 게시글 리스팅. */}
          <ListNav activeType={activeType} setActiveType={setActiveType} />
          <List2 dataList={postsData} />
        </>
      )}
      {favorites && (
        <>
          <ListNav activeType={activeType} setActiveType={setActiveType} />
          <List2 dataList={favoritesData} />
        </>
      )}
      {reviews && (
        <>
          <ReviewModal dataList={reviewsData} />
        </>
      )}
    </div>
  );
};
export default MyPage;
