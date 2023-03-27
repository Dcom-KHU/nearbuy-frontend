import axios, { AxiosInstance } from 'axios';
import secrets from '../../secrets.json';

const customAxios: AxiosInstance = axios.create({
  baseURL: secrets.serverIP,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // 'Content-Type': 'application/json',
  },
});
customAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');

  if (!token) {
    config.headers['accessToken'] = null;
    config.headers['refreshToken'] = null;
    return config;
  }
  if (config.headers && token) {
    const { accessToken, refreshToken } = JSON.parse(token);
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['refreshToken'] = `Bearer ${refreshToken}`;
    return config;
  }
});

//AccessToken이 만료됐을때 처리
customAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const originalConfig = err.config;

    if (err.response && err.response.status === 401) {
      const refreshToken = originalConfig.headers['refreshToken'];
      try {
        const data = await axios({
          url: `refreshtoken담아 보낼 URL`,
          method: 'GET',
          headers: {
            Authorization: refreshToken,
          },
        });
        if (data) {
          localStorage.setItem(
            'token',
            JSON.stringify(data.data, ['accessToken', 'refreshToken'])
          );
          return await customAxios.request(originalConfig);
        }
      } catch (err) {
        console.log('토큰 갱신 에러');
      }
      return Promise.reject(err);
    }
    return Promise.reject(err);
  }
);
export default customAxios;
