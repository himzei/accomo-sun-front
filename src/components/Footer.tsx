import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram, AiFillGoogleCircle } from "react-icons/ai";

export default function Footer() {
  return (
    <HStack justifyContent={"center"} w="full" bg="gray.100" py={16}>
      <VStack spacing={8} alignItems="flex-start">
        <VStack
          w="4xl"
          alignItems={"flex-start"}
          fontSize="xs"
          color="gray.600"
          spacing={2}
        >
          <HStack spacing={2}>
            <Text>회사소개</Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>이용약관</Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>
              <b>개인정보처리방침</b>
            </Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>소비자 분쟁해결 기준 </Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>사업자 정보확인</Text>
          </HStack>
          <HStack spacing={2}>
            <Text>저기어때 마케팅센터</Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>액티비티 호스트센터</Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>HOTEL 저기어때</Text>
            <Box h="12px">
              <Divider color="gray.200" orientation="vertical" />
            </Box>
            <Text>콘텐츠산업진흥법에 의한 표시</Text>
          </HStack>
        </VStack>
        <Text fontSize="xs">
          <b>고객행복센터 1670-6250</b> 오전 9시 ~ 새벽 3시
        </Text>
        <VStack alignItems={"flex-start"} fontSize="xs">
          <Text>(주)저기어때 컴퍼니</Text>
          <Text>
            주소 : 서울특별시 강남구 봉은사로 479, 479타워 11층 | 대표이사 :
            정명훈 | 사업자등록번호: 742-86-00224
          </Text>
          <Text>
            통신판매번호 : 2017-서울강남-01779 | 관광사업자 등록번호:
            제1026-24호 | 전화번호 : 1670-6250 | 전자우편주소 :
            help@goodchoice.kr
          </Text>
          <Text>
            (주) 여기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며,
            상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게
            있습니다.
          </Text>
        </VStack>
        <Text fontSize="xs">
          Copyright GC COMPANY Corp. All rights reserved.
        </Text>
        <Box w="full" h="1px" bg="gray.200" />
        <HStack spacing={4}>
          <BsFacebook size={"20px"} color="gray" />
          <AiFillInstagram size="24px" color="gray" />
          <AiFillGoogleCircle size="24px" color="gray" />
        </HStack>
      </VStack>
    </HStack>
  );
}
