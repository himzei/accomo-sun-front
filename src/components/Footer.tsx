import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";
import { ReactComponent as Insta } from "../assets/svg/insta.svg";
import { ReactComponent as Kakao } from "../assets/svg/kakao.svg";

export default function Footer() {
  return (
    <HStack justifyContent={"center"} w="full" bg="#575757" py={16}>
      <VStack w="7xl" spacing={4} alignItems="flex-start" color="white">
        <HStack justifyContent={"space-between"} w="full" pr="4">
          <VStack spacing={0} alignItems="flex-start">
            <Text fontWeight={700} fontSize="28">
              하모 고객센터
            </Text>
            <Text fontWeight={600} fontSize="16">
              053.242.5454
            </Text>
          </VStack>
          <HStack>
            <Box
              w="50px"
              h="50px"
              bg="white"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Facebook />
            </Box>
            <Box
              w="50px"
              h="50px"
              bg="white"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Insta />
            </Box>
            <Box
              w="50px"
              h="50px"
              bg="white"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Youtube />
            </Box>
            <Box
              w="50px"
              h="50px"
              bg="white"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Twitter />
            </Box>
            <Box
              w="50px"
              h="50px"
              bg="white"
              rounded="full"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Kakao />
            </Box>
          </HStack>
        </HStack>
        <VStack spacing={0} alignItems="flex-start">
          <Text fontWeight={600} fontSize={16}>
            평일 : 09:00 ~ 18:00
          </Text>
          <Text fontWeight={600} fontSize={16}>
            하모는 언제가 고객과 함께합니다.
          </Text>
        </VStack>
        <Text fontWeight={600} fontSize={16}>
          회사소개 | 이용약관 | 개인정보처리방침
        </Text>
        <VStack spacing={0} alignItems="flex-start">
          <Text fontSize="14">
            사업자명: (주)하모 | 대표 : 조현일 | 사업자등록번호 : 123-45-67890
          </Text>
          <Text fontSize="14">
            주소 : 대구 중구 국채보상로 123길 16(문화동)
          </Text>
        </VStack>
        <Text fontSize="14">COPYRIGHT 하모 All rights reserved.</Text>
      </VStack>
    </HStack>
  );
}
