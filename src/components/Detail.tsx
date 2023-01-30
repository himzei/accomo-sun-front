import {
  Avatar,
  Box,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRoom } from "../api";
import DetailInfo from "./DetailInfo";
import DetailReserv from "./DetailReserv";
import DetailReview from "./DetailReview";
import { AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import LocationMap from "./LocationMap";
import DetailRefund from "./DetailRefund";
import Iframe from "react-iframe";

interface IPhoto {
  file: string;
  description: string;
}

interface IRoomDetail {
  address: string;
  city: string;
  country: string;
  created_at: string;
  description: string;
  id: number;
  is_owner: boolean;
  kind: string;
  name: string;
  pet_friendly: boolean;
  price: number;
  rating: number;
  rooms: number;
  toilets: number;
  photos: IPhoto[];
}

export default function Detail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>(["room", roomPk], getRoom);
  console.log(isLoading, data);

  return (
    <VStack w="full" justifyContent={"center"} py="20" spacing="12">
      {/* 디테일 타이틀 */}
      <VStack w="7xl" spacing={0} alignItems="flex-start" px="4">
        <HStack justifyContent={"space-between"} w="full">
          <Text fontSize="28" fontWeight={600}>
            최고의 전망을 보유한 스터디룸, 조용한 공간
          </Text>
          <HStack spacing="2">
            <HStack spacing="1">
              <FiShare />
              <Text fontSize="14" as="u">
                공유하기
              </Text>
            </HStack>
            <HStack spacing="1">
              <AiFillHeart color="#D50005" />
              <Text fontSize="14" as="u">
                찜하기
              </Text>
            </HStack>
          </HStack>
        </HStack>
        <Text fontSize="22" color="gray.400">
          대구 동성로에 위치한 취업성공맛집!
        </Text>
        <HStack py="2" color="gray.600">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <Box key={i} border={"1px"} rounded="full" px="4" py="1">
                <Text fontSize="12">#대구스터디룸</Text>
              </Box>
            ))}
        </HStack>
      </VStack>

      {/* 3D 메타포트 */}
      <HStack w="7xl" px="4">
        <Box overflow={"hidden"} w="full" h="720px">
          <Iframe
            width="100%"
            height="100%"
            url="https://my.matterport.com/show/?m=feMk5TKzY19&play=1"
            allow="xr-spatial-tracking"
            allowFullScreen
          ></Iframe>
          {/* <Image
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          /> */}
        </Box>
      </HStack>

      {/* 사업자정보 */}
      <VStack w="7xl" alignItems={"flex-start"} px="4" spacing={4}>
        <HStack spacing="4">
          <Avatar />
          <VStack spacing={0} alignItems="flex-start">
            <Text fontSize="20" fontWeight={600}>
              아이캔 스터디룸
            </Text>
            <Text fontSize="14" color="gray.400">
              회원가입일 : 2023년 1월
            </Text>
          </VStack>
        </HStack>
        <HStack>
          <HStack justifyContent={"center"} spacing="1">
            <ImStarFull color="#ff9b25" size="14" />
            <ImStarFull color="#ff9b25" size="14" />
            <ImStarFull color="#ff9b25" size="14" />
            <ImStarHalf color="#ff9b25" size="14" />
            <ImStarEmpty color="#ff9b25" size="14" />
          </HStack>
          <Text fontSize="16">4.95(6,250)</Text>
        </HStack>
        <Text>
          안녕하세요. 숙박 호스팅을 전문적으로 하는 떠나요입니다. 오랜 기간 동안
          숙박 업체를 관리해온 신뢰를 바탕으로 설레는 여행 동안 편안한 쉼을
          제공할 수 있도록 하겠습니다.
        </Text>
      </VStack>

      {/* TAB */}
      <Tabs w="7xl">
        <TabList>
          <Tab>스터디룸선택</Tab>
          <Tab>위치/교통</Tab>
          <Tab>시설안내</Tab>
          <Tab>환불정책</Tab>
          <Tab>이용후기</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DetailReserv />
          </TabPanel>
          <TabPanel>
            <LocationMap />
          </TabPanel>
          <TabPanel>
            <DetailInfo />
          </TabPanel>
          <TabPanel>
            <DetailRefund />
          </TabPanel>
          <TabPanel>
            <DetailReview />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
