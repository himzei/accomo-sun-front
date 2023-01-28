import {
  Box,
  HStack,
  Img,
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
    <HStack w="full" justifyContent={"center"} py="16">
      <VStack w="full" spacing={16}>
        <HStack w="4xl" justifyContent={"space-between"} h="400px" spacing="8">
          <VStack w="50%" h="full">
            <Box>
              <Img src={`${data?.photos[3].file || ""}`} />
            </Box>
            <HStack>
              {Array(4)
                .fill("")
                .map((_, i) => (
                  <Box w="100px" h="60px" bg="red.500" overflow={"hidden"}>
                    <Img
                      src={`${data?.photos[i].file || ""}`}
                      objectFit="cover"
                      objectPosition={"center center"}
                    />
                  </Box>
                ))}
            </HStack>
          </VStack>
          <VStack w="50%" h="full" alignItems={"flex-start"}>
            <HStack>
              <Box bg="gray.400" px="1">
                <Text color="white" fontSize="sm">
                  비즈니스
                </Text>
              </Box>
              <Text fontWeight={600} fontSize="22">
                {data?.name}
              </Text>
            </HStack>
            <Text>서울 강남구 논현동</Text>
            <VStack
              w="full"
              bg="gray.100"
              h="310px"
              p="4"
              alignItems={"flex-start"}
            >
              <Text fontWeight={600} fontSize="14">
                사장님 한마디
              </Text>
              <Text fontSize="14" color="gray.700">
                엘리에나 호텔은 이탈리아 출신 교수를 주축으로 국내 유수의
                디자이너 15인이 참여하여 시크하고 현대적인 감각을 살려
                스타일리쉬하고 세련된 디자인을 구현하였습니다
              </Text>
            </VStack>
          </VStack>
        </HStack>

        <Tabs>
          <TabList>
            <Tab>객실안내/예약</Tab>
            <Tab>숙소정보</Tab>
            <Tab>리뷰</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DetailReserv />
            </TabPanel>
            <TabPanel>
              <DetailInfo />
            </TabPanel>
            <TabPanel>
              <DetailReview />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </HStack>
  );
}
