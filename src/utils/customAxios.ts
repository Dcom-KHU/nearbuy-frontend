import axios, { AxiosInstance } from 'axios';
import secrets from '../../secrets.json';
import GetToken from './getToken';
import Cookies from 'js-cookie';
import { serverIP } from '@/../secrets.json';
/*  Utils 폴더 안에 base URL 설정.
  나중에 로그인 관련한 것들 헤더에 설정
  이 파일은 axios 관련 설정 하려고 만듦
*/


// 지금은 크게 알 필요 없지만 진호오빠가 배포한 서버 url 설정 해두려고 만들어둠
// API 콜 할 때 customAxios 사용하게끔 해서 useHttp.ts에서 get, fetch, post, delete 만들어둠. useHttp 코드는 궁금하면 보고 필수는 아님
// MainPage.tsx에 사용법 있음
const customAxios: AxiosInstance = axios.create({
  // serverIP 깃허브에 올리지 말기~ 노출되면 안되는 정보임! gitignore 되는 secrets 파일에 담아놓기.
  // secrets 파일에서 baseURL 읽어오는중
  baseURL: secrets.serverIP,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': secrets.serverIP,
    'Access-Control-Allow-Credentials': true,
  },
  withCredentials: true,
});

// header에 accessToken 설정
customAxios.interceptors.request.use((config) => {
  const accessToken = GetToken();

  if (!accessToken) {
    config.headers.Authorization = null;
  } else if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// // AccessToken이 만료됐을때 처리
// customAxios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (err) {
//     const originalConfig = err.config;

//     if (err.response && err.response.status === 401) {
//       try {
//         const data = await axios.post(`${serverIP}/api/user/token`);
//         console.log('data is : ', data);
//         if (data) {
//           Cookies.set('accessToken', data.data.accessToken, { expires: 1 });
//           return await customAxios(originalConfig);
//         }
//       } catch (err) {
//         console.log('토큰 갱신 에러');
//       }
//       return Promise.reject(err);
//     }
//     return Promise.reject(err);
//   }
// );

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error.response.status, '??');
    if (
      error.response.status === 500 ||
      (error.response.status === 401 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${serverIP}/api/user/token`, {
          withCredentials: true,
        });
        const newAccessToken = response.data.accessToken;
        Cookies.remove('accessToken');
        Cookies.set('accessToken', newAccessToken, { expire: 1 });
        customAxios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${newAccessToken}`;
        return customAxios(originalRequest);
      } catch (e) {
        console.error('token error : ', e);
      }
    }

    return Promise.reject(error);
  }
);

export default customAxios;

// customAxios.interceptors.request.use(function (config) {
//   const token = localStorage.getItem('token');

//   if (!token) {
//     config.headers['accessToken'] = null;
//     config.headers['refreshToken'] = null;
//     return config;
//   }
//   if (config.headers && token) {
//     const { accessToken, refreshToken } = JSON.parse(token);
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//     config.headers['refreshToken'] = `Bearer ${refreshToken}`;
//     return config;
//   }
// });

// //AccessToken이 만료됐을때 처리
// customAxios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (err) {
//     const originalConfig = err.config;

//     if (err.response && err.response.status === 401) {
//       const refreshToken = originalConfig.headers['refreshToken'];
//       try {
//         const data = await axios({
//           url: `refreshtoken담아 보낼 URL`,
//           method: 'GET',
//           headers: {
//             Authorization: refreshToken,
//           },
//         });
//         if (data) {
//           localStorage.setItem(
//             'token',
//             JSON.stringify(data.data, ['accessToken', 'refreshToken'])
//           );
//           return await customAxios.request(originalConfig);
//         }
//       } catch (err) {
//         console.log('토큰 갱신 에러');
//       }
//       return Promise.reject(err);
//     }
//     return Promise.reject(err);
//   }
// );
