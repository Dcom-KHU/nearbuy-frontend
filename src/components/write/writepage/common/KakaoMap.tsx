/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import secrets from "../../../../../secrets.json";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const KAKAO_KEY = secrets.KAKAO_KEY;
  const [isSettingScript, setIsSettingScript] = useState<boolean>(false);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&libraries=services&autoload=false`;

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
        const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption);
        setMap(kakaoMap);
        // mapRef.current = new window.kakao.maps.Map(mapContainer, mapOption);
        // console.log(window.kakao.maps);
        // console.log(new window.kakao.maps.services.Places());
        setIsSettingScript(true);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  useEffect(() => {
    if (isSettingScript && map) {
      const { kakao } = window;
      console.log(new kakao.maps.services.Places());

      // 장소 검색 객체를 생성
      var ps = new kakao.maps.services.Places();
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      // 지도에 마커를 표시
      const displayMarker = (place: any) => {
        // 마커 생성, 지도에 표시
        let marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        // 마커에 클릭이벤트 등록
        kakao.maps.event.addListener(marker, "click", function () {
          console.log(
            place.address_name,
            place.place_name,
            place.road_address_name
          );
          // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
          infowindow.setContent(
            '<div style="padding:5px;font-size:12px;">' +
              place.place_name +
              "</div>"
          );
          infowindow.open(map, marker);
        });
      };

      // 키워드 검색 완료 시 호출되는 콜백함수
      const placesSearchCB = (data: any, status: any, pagination: any) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
          console.log(data);
          let bounds = new kakao.maps.LatLngBounds();

          for (let i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      };

      // 키워드로 장소를 검색합니다
      ps.keywordSearch("강남 맛집", placesSearchCB);
    }
  }, [isSettingScript, map]);

  return (
    <div>
      <div id="map" className="w-96 h-96"></div>
    </div>
  );
};

export default KakaoMap;
