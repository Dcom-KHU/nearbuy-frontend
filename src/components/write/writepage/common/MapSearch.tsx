/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import secrets from "../../../../../secrets.json";
import { FieldValues, UseFormRegister } from "react-hook-form";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapSearchProps {
  locations: string[];
  setLocations: Function;
  closePopup: Function;
}

const MapSearch = (props: MapSearchProps) => {
  const { closePopup, locations, setLocations } = props;
  const [searchWord, setSearchWord] = useState<string>("");
  const [selectLocation, setSelectLocation] = useState<string>("");

  const KAKAO_KEY = secrets.KAKAO_KEY;
  const [isSettingScript, setIsSettingScript] = useState<boolean>(false);
  const [map, setMap] = useState<any>();

  const [markers, setMarkers] = useState<any[]>([]);

  const removeMarker = () => {
    for (let i = 0; i < markers.length; i++) {
      console.log(markers[i]);
      markers[i].setMap(null);
    }
    setMarkers([]);
  };

  const searchHandler = () => {
    removeMarker();
    if (searchWord !== "" && isSettingScript && map) {
      const { kakao } = window;

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
        setMarkers(prev => {
          return [...prev, marker];
        });

        // 마커에 클릭이벤트 등록
        kakao.maps.event.addListener(marker, "click", function () {
          console.log(
            place.address_name
            // place.place_name,
            // place.road_address_name
          );
          setSelectLocation(place.address_name);

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
      ps.keywordSearch(searchWord, placesSearchCB);
    }
  };

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

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row">
        <input
          className="form-input"
          onChange={e => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          className="min-w-[100px] h bg-[#b8ddfd] p-[10px] m-[10px] border-[1px] rounded-md text-gray-600 hover:bg-sky-300"
          onClick={() => {
            searchHandler();
          }}
        >
          검색하기
        </button>
      </div>
      <div className="flex flex-row">
        <input
          placeholder="선택한 거래 희망 장소"
          className="form-input2"
          type="text"
          disabled
          value={selectLocation}
        />
      </div>
      <div id="map" className="w-full h-[600px] min-h-[500px]"></div>
      <div className="flex flex-row justify-center">
        <button
          onClick={() => {
            console.log(selectLocation);
          }}
        >
          jd
        </button>
        <button
          className="w-[100px] h bg-[#b8ddfd] p-[10px] m-[10px] border-[1px] rounded-md text-gray-600 hover:bg-sky-300"
          onClick={() => {
            setLocations((prev: any) => {
              console.log(prev);
              console.log(selectLocation);
              return prev ? [...prev, selectLocation] : [selectLocation];
            });
            closePopup();
          }}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default MapSearch;
