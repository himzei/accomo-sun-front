import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const addressData = {
  city: "서울",
  name: "가로수길점",
  time: "09:30~22:00",
  tel: "매장통합 콜센터 : 1544-2514 (평일 9-18시, 근무시간 외 ARS 안내)",
  holiday: "설날(음력), 추석 당일",
  address: "대구 북구 동화천로 220",
  page: "https://www.aladin.co.kr/usedstore/wstoremain.aspx?offcode=Sinsa",
};

export default function LocationMap() {
  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 반환 객체를 생성
        // 주소로 좌표를 검색
        geocoder.addressSearch(
          addressData.address,
          (result: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
              // 정상적으로 검색이 완료됐으면
              var coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 지도를 생성
              const container = document.querySelector(
                "#mapKakao"
              ) as HTMLElement;
              const options = {
                center: coords,
                level: 3,
              };
              const iwContent = `
						
							<div style="padding:5px;">
								
								<div style="text-align:center;font-size:12px;font-weight:500">${addressData.address}</div>
							</div>
						
						`;

              const map = new window.kakao.maps.Map(container, options);
              // 결과값으로 받은 위치를 마커로 표시
              new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              new window.kakao.maps.InfoWindow({
                map: map,
                position: coords,
                content: iwContent,
              });
            }
            // else {
            //   // 정상적으로 좌표가 검색이 안 될 경우 디폴트 좌표로 검색
            //   const container = document.getElementById("map") as HTMLElement;
            //   const options = {
            //     center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            //     level: 3,
            //   };
            //   // 지도를 생성
            //   const map = new window.kakao.maps.Map(container, options);
            //   new window.kakao.maps.Marker({
            //     map: map,
            //     position: coords,
            //   });
            // }
          }
        );
      });
    };
    onLoadKakaoMap();
  }, []);

  return (
    <>
      <Box w="full" h="400px">
        <Box as="div" w="full" h="full" id="mapKakao" />
      </Box>
    </>
  );
}
