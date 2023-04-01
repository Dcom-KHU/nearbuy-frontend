import axios, { AxiosInstance } from 'axios';
import secrets from '../../secrets.json';
import GetToken from './getToken';
import Cookies from 'js-cookie';
import { serverIP } from '@/../secrets.json';

const customAxios: AxiosInstance = axios.create({
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
