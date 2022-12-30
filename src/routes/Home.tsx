import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import Slider from "react-slick";
import { Box, Img, VStack, HStack, Text } from "@chakra-ui/react";
import { ReactComponent as Hotel } from "../assets/svg/Hotel.svg";
import { ReactComponent as Resort } from "../assets/svg/Resort.svg";
import { ReactComponent as Guest } from "../assets/svg/Guest.svg";
import { ReactComponent as Pension } from "../assets/svg/Pension.svg";
import { ReactComponent as Camping } from "../assets/svg/Camping.svg";
import { ReactComponent as Caravan } from "../assets/svg/Caravan.svg";
import { ReactComponent as Leisure } from "../assets/svg/Leisure.svg";
import carTravel from "../assets/png/carTravel.png";
import hotel from "../assets/png/hotel.png";
import { Link } from "react-router-dom";

export default function Home() {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    swipeToSlide: true,
  };

  return (
    <VStack w="full" alignItems={"center"} my={20} spacing={24}>
      {/* 메인 슬라이드 */}
      <Box w="4xl" h="460px" overflow={"hidden"}>
        <Img
          objectFit="cover"
          objectPosition={"center"}
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
        />
      </Box>

      {/* 카테고리 SVG */}
      <HStack justifyContent={"space-between"} w="4xl">
        <Link to="motel">
          <VStack spacing="4">
            <Box w="50px" h="50px">
              <Hotel />
            </Box>
            <Text>모텔</Text>
          </VStack>
        </Link>
        <VStack spacing="4">
          <Box w="50px" h="50px">
            <Resort />
          </Box>
          <Text>호텔•리조트</Text>
        </VStack>
        <VStack spacing="4">
          <Box w="50px" h="50px">
            <Guest />
          </Box>
          <Text>게스트하우스</Text>
        </VStack>
        <VStack spacing="4">
          <Box w="50px" h="50px">
            <Pension />
          </Box>
          <Text>펜션</Text>
        </VStack>
        <VStack spacing="4">
          <Box w="50px" h="50px">
            <Camping />
          </Box>
          <Text>캠핑</Text>
        </VStack>
        <VStack spacing="4">
          <Box w="50px" h="50px">
            <Caravan />
          </Box>
          <Text>카라반</Text>
        </VStack>
        <VStack spacing="4">
          <Box w="50px" h="50px">
            <Leisure />
          </Box>
          <Text>레져활동</Text>
        </VStack>
      </HStack>

      {/* 저기어때 최신 소식 */}
      <VStack w="4xl" alignItems={"start"}>
        <Text fontSize="24" fontWeight={700} mb={4}>
          저기어때 소식
        </Text>
        <HStack w="full">
          <HStack w="100%" h="160px">
            <HStack w="50%" h="full">
              <VStack
                margin="-8px"
                px="0px"
                w="180px"
                bg="red.300"
                h="full"
                justifyContent={"center"}
              >
                <Text color="white" fontSize="20" fontWeight={600}>
                  <b>여기어때</b> 비즈니스
                </Text>
              </VStack>
              <VStack
                px="8"
                margin="-8px"
                w="300px"
                border="1px"
                borderColor="gray.100"
                h="full"
                alignItems={"flex-start"}
                justifyContent="center"
              >
                <Text fontSize="20" fontWeight={600}>
                  여기어때 비즈니스
                </Text>
                <Text>출장부터 복지까지 여기어때 비즈니스로 스마트하게</Text>
              </VStack>
            </HStack>
            <HStack w="50%" h="full">
              <VStack
                margin="-8px"
                px="0px"
                w="180px"
                bg="blue.300"
                h="full"
                justifyContent={"center"}
              >
                <Text color="white" fontSize="20" fontWeight={600}>
                  여기어때 비즈니스
                </Text>
              </VStack>
              <VStack
                px="8"
                margin="-8px"
                w="300px"
                border="1px"
                borderColor="gray.100"
                h="full"
                alignItems={"flex-start"}
                justifyContent="center"
              >
                <Text fontSize="20" fontWeight={600}>
                  여기어때 비즈니스
                </Text>
                <Text>출장부터 복지까지 여기어때 비즈니스로 스마트하게</Text>
              </VStack>
            </HStack>
          </HStack>
        </HStack>
      </VStack>

      {/* 어플 다운로드 */}
      <HStack w="full" justifyContent={"center"}>
        <VStack
          w="4xl"
          h="300px"
          justifyContent={"center"}
          backgroundImage={
            "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          }
          backgroundSize="cover"
          backgroundPosition={"center"}
        >
          <VStack spacing={4}>
            <Text fontSize={24}>
              앱 다운 받고 <b>더 많은 혜택</b> 받으세요
            </Text>
            <HStack>
              <Img
                width="150px"
                src="https://image.goodchoice.kr/images/web_v3/banner_and.png"
              />
              <Img
                width="150px"
                src="https://image.goodchoice.kr/images/web_v3/banner_ios.png"
              />
            </HStack>
          </VStack>
        </VStack>
      </HStack>

      {/* 이벤트 */}
      <VStack w="4xl" alignItems={"start"}>
        <Text fontSize="24" fontWeight={700} mb={4}>
          이벤트
        </Text>
        <Box w="full">
          <Slider {...settings}>
            <Img src="https://image.goodchoice.kr/images/cms/home_img/3c13f7bf4ea5ef67729fa285aca7896f.jpg" />

            <Img src="https://image.goodchoice.kr/images/cms/home_img/5d9082d5b8665dfa532927007292ff10.jpg" />
          </Slider>
        </Box>

        <HStack w="full">
          <HStack
            w="50%"
            h="180px"
            px={8}
            border="1px"
            borderColor={"gray.200"}
            rounded="lg"
          >
            <VStack alignItems={"flex-start"} justifyContent="center" w="full">
              <Text
                fontWeight={600}
                fontSize="24px"
                lineHeight={"32px"}
                color="red.500"
              >
                <b>저기어때</b>
                <br /> 광고 신청하기
              </Text>
              <Text>
                고정고객 확보,
                <br /> 신규회원 유치 가능합니다.
              </Text>
            </VStack>
            <Box w="340px" h="120px" overflow={"hidden"}>
              <Img src={carTravel} objectPosition="0 -50px" />
            </Box>
          </HStack>
          <HStack
            w="50%"
            h="180px"
            px={8}
            border="1px"
            borderColor={"gray.200"}
            rounded="lg"
          >
            <VStack alignItems={"flex-start"} justifyContent="center" w="full">
              <Text fontWeight={600} fontSize="24px" lineHeight={"32px"}>
                게스트하우스
                <br /> 숙소 등록하기
              </Text>
              <Text>
                숙소 등록하고,
                <br /> 더 많은 고객 확보하세요!
              </Text>
            </VStack>
            <Box w="340px" h="120px" overflow={"hidden"}>
              <Img src={hotel} objectPosition="0 -40px" />
            </Box>
          </HStack>
        </HStack>
      </VStack>

      {/* 슬라이드 */}
    </VStack>
  );
}
