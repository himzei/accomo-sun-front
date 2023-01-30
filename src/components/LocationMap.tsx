import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ImLocation } from "react-icons/im";
import { MdDirectionsSubway } from "react-icons/md";
import { FaBus } from "react-icons/fa";

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

              map.relayout();

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
  });

  return (
    <>
      <VStack w="full" alignItems={"flex-start"} spacing="8">
        <Stack w="full" h="400px">
          <Box as="div" w="full" h="full" id="mapKakao" />
        </Stack>
        <VStack spacing={"2"} alignItems="flex-start" w="full">
          <Text fontSize="18" fontWeight={600}>
            위치
          </Text>
          <HStack>
            <ImLocation />
            <Text>대구 중구 국채보상로 123길 16, 3층(문화동 9-14)</Text>
          </HStack>
          <HStack>
            <MdDirectionsSubway />
            <Text>1호선 중앙로역 19번출구</Text>
          </HStack>
          <HStack>
            <FaBus size="14" />
            <Text>국채보상로 앞 332번 228번</Text>
          </HStack>
        </VStack>
        <VStack spacing="2" alignItems={"flex-start"} w="full">
          <Text fontSize="18" fontWeight={600}>
            주차
          </Text>
          <VStack
            w="full"
            bg="gray.100"
            py="8"
            px="4"
            spacing={6}
            alignItems="flex-start"
          >
            <VStack spacing={1} w="full" alignItems={"flex-start"}>
              <Text>무료주차</Text>
              <Text fontSize="14" color="gray.700">
                지하 타워 주차장 2개 포함 지상주차장 총 40대 주차가능 -선주차는
                프런트에 문의후 가능 -발렛서비스 제공 지상주차장으로 입차후
                차량키는 차에두고 로비로 들어오심됩니다. 총 40대 주차시설 보유
              </Text>
            </VStack>
            <VStack spacing={1} w="full" alignItems={"flex-start"}>
              <Text>유료주차</Text>
              <Text fontSize="14" color="gray.700">
                지하 타워 주차장 2개 포함 지상주차장 총 40대 주차가능 -선주차는
                프런트에 문의후 가능 -발렛서비스 제공 지상주차장으로 입차후
                차량키는 차에두고 로비로 들어오심됩니다. 총 40대 주차시설 보유
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
