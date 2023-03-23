/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from "react";
import secrets from "../../../../../secrets.json";

declare global {
  interface Window {
    kakao: any;
  }
}

// const {kakao} = window;

const KakaoMap = () => {
  const KAKAO_KEY = secrets.KAKAO_KEY;
  //   kakao map
  let kakaoMap;
  const mapRef = useRef(null);

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            37.5173319258532,
            127.047377408384
          ), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption);
        mapRef.current = new window.kakao.maps.Map(mapContainer, mapOption);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div>
      <div id="map" className="w-96 h-96"></div>
      <div ref={mapRef}></div>
    </div>
  );
};

export default KakaoMap;
