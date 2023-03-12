/*  Utils 폴더 안에 base URL 설정.
  나중에 로그인 관련한 것들 헤더에 설정
  이 파일은 axios 관련 설정 하려고 만듦
*/

import axios, { AxiosInstance } from "axios";
import secrets from "../../secrets.json";

// 지금은 크게 알 필요 없지만 진호오빠가 배포한 서버 url 설정 해두려고 만들어둠
// API 콜 할 때 customAxios 사용하게끔 해서 useHttp.ts에서 get, fetch, post, delete 만들어둠. useHttp 코드는 궁금하면 보고 필수는 아님
// MainPage.tsx에 사용법 있음
const customAxios: AxiosInstance = axios.create({
  // serverIP 깃허브에 올리지 말기~ 노출되면 안되는 정보임! gitignore 되는 secrets 파일에 담아놓기.
  // secrets 파일에서 baseURL 읽어오는중
  baseURL: secrets.serverIP,
  headers: {
    // "Content-Type": "application/x-www-form-urlencoded",
    // "Content-Type": "application/json",
  },
});

export default customAxios;
