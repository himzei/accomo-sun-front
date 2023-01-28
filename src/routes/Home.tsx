import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import Slider from "react-slick";
import {
  Box,
  Img,
  VStack,
  HStack,
  Text,
  Image,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { ReactComponent as One } from "../assets/svg/1.svg";
import { ReactComponent as Two } from "../assets/svg/2.svg";
import { ReactComponent as Three } from "../assets/svg/3.svg";
import { ReactComponent as Four } from "../assets/svg/4.svg";
import { ReactComponent as Five } from "../assets/svg/5.svg";
import { ReactComponent as Six } from "../assets/svg/6.svg";
import { ReactComponent as Seven } from "../assets/svg/7.svg";
import { ReactComponent as Eight } from "../assets/svg/8.svg";
import { ReactComponent as About1 } from "../assets/svg/about1.svg";
import { ReactComponent as About2 } from "../assets/svg/about2.svg";
import { ReactComponent as About3 } from "../assets/svg/about3.svg";
import { ReactComponent as About4 } from "../assets/svg/about4.svg";
import { ReactComponent as About5 } from "../assets/svg/about5.svg";
import { ReactComponent as About6 } from "../assets/svg/about6.svg";

import carTravel from "../assets/png/carTravel.png";
import hotel from "../assets/png/hotel.png";
import mainImage from "../assets/png/main01.png";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { FaTrain } from "react-icons/fa";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";

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
    <VStack w="full" alignItems={"center"} spacing={20}>
      {/* 메인 슬라이드 */}
      <Box w="full" h="550px" overflow={"hidden"} position="relative">
        <Image
          objectFit="cover"
          objectPosition={"center center"}
          src={mainImage}
        />
        <Box
          position="absolute"
          w="full"
          h="full"
          left="0"
          top="0"
          background={"rgba(255, 255, 255, 0.5)"}
        />
        <VStack
          position="absolute"
          top="20%"
          left="20%"
          alignItems={"flex-start"}
          spacing={0}
        >
          <Text fontSize="30px" fontWeight={600}>
            스터디룸 예약은 하모
          </Text>
          <Text fontSize="50px" fontWeight={900} lineHeight="60px">
            3D 공간투어 & AI추천공간
            <br /> 하모 플랫폼
          </Text>
          <Box h={8} />
          <Button rounded="full" colorScheme="red" size="sm" px="16">
            <Text>자세히보기</Text>
          </Button>
        </VStack>
      </Box>

      {/* 카테고리 SVG */}
      <HStack justifyContent={"space-between"} w="7xl" h="156px">
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <One height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Two height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Three height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Four height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Five height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Six height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Seven height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
        <Link to="motels">
          <VStack spacing="4">
            <Box
              w="120px"
              h="120px"
              bg="gray.100"
              rounded="full"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Eight height="50px" width="50px" />
            </Box>
            <Text>카페테마</Text>
          </VStack>
        </Link>
      </HStack>

      {/* 최근 본 상품의 연관상품 */}
      <VStack w="7xl" alignItems={"start"}>
        <Text fontSize="28" fontWeight={700} mb={4}>
          최근 본 상품의 연관상품
        </Text>

        <Grid templateColumns={"repeat(3, 1fr)"} gap="4" rowGap={6}>
          {Array(6)
            .fill("")
            .map((_, i) => (
              <GridItem w="100%" key={i} position="relative">
                <VStack alignItems={"flex-start"}>
                  <Box rounded="xl" overflow={"hidden"}>
                    <Image
                      width="416px"
                      height="234px"
                      src={
                        "https://images.unsplash.com/photo-1503423571797-2d2bb372094a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                      }
                    />
                  </Box>
                  <VStack spacing="1">
                    <Text fontSize={22} fontWeight={600}>
                      [동성로]아이캔 스터디룸
                    </Text>
                    <Text fontSize={14}>#취업스터디룸 #멋진뷰 #스터디카페</Text>
                  </VStack>
                  <HStack spacing="2">
                    <HStack>
                      <Text color="#D50000" fontSize="24" fontWeight={600}>
                        10,000
                      </Text>
                      <Text color="gray.700" fontSize="12">
                        원/시간
                      </Text>
                    </HStack>
                    <HStack spacing={1}>
                      <BsFillPersonFill color="gray" />
                      <Text fontSize="12" color="gray.700">
                        4~12인
                      </Text>
                    </HStack>
                    <HStack spacing={1}>
                      <FaTrain color="gray" />
                      <Text fontSize="12" color="gray.700">
                        중앙로역
                      </Text>
                    </HStack>
                  </HStack>
                </VStack>
                <Box
                  position={"absolute"}
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  px="4"
                  pt="4"
                >
                  <HStack w="full" justifyContent={"space-between"}>
                    <Box>
                      <AiOutlineHeart color="#D50000" size="24" />
                    </Box>
                    <HStack spacing="1" alignItems={"center"}>
                      <Box>
                        <ImStarFull color="white" />
                      </Box>
                      <Text color="white" fontSize="14">
                        4.95
                      </Text>
                    </HStack>
                  </HStack>
                </Box>
              </GridItem>
            ))}
        </Grid>
      </VStack>

      {/* 리뷰 탑 스터디룸 추천 */}
      <VStack w="7xl" alignItems={"start"}>
        <Text fontSize="28" fontWeight={700} mb={4}>
          리뷰 TOP 스터디룸 추천
        </Text>

        <Grid templateColumns={"repeat(2, 1fr)"} gap="4" rowGap={6}>
          {Array(6)
            .fill("")
            .map((_, i) => (
              <GridItem
                w="630px"
                h="178px"
                key={i}
                rounded="xl"
                overflow={"hidden"}
                boxShadow="md"
                position="relative"
              >
                <Box
                  position="absolute"
                  w="40px"
                  h="40px"
                  left="0"
                  top="0"
                  bg="black"
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Text color="white" fontWeight={600} fontSize="18">
                    {i + 1}
                  </Text>
                </Box>
                <HStack
                  w="100%"
                  h="full"
                  justifyContent={"flex-start"}
                  py="2"
                  pr="4"
                >
                  <Box w="180px">
                    <Image
                      width="178px"
                      height="178px"
                      src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                    />
                  </Box>
                  <VStack
                    justifyContent={"space-between"}
                    alignItems="flex-start"
                    w="400px"
                    h="full"
                    pl="4"
                  >
                    <VStack spacing="1" alignItems={"flex-start"}>
                      <Box
                        border="1px"
                        borderColor="#D50000"
                        rounded="md"
                        px="2"
                      >
                        <Text fontSize="12px" color="#D50000" fontWeight={600}>
                          베스트
                        </Text>
                      </Box>
                      <Text fontSize={22} fontWeight={600}>
                        [동성로]아이캔 스터디룸
                      </Text>
                      <Text fontSize={14}>
                        #취업스터디룸 #멋진뷰 #스터디카페
                      </Text>
                    </VStack>
                    <VStack alignItems={"flex-end"} w="full" spacing="2px">
                      <HStack spacing="2">
                        <HStack justifyContent={"center"} spacing="1">
                          <ImStarFull color="#ff9b25" size="14" />
                          <ImStarFull color="#ff9b25" size="14" />
                          <ImStarFull color="#ff9b25" size="14" />
                          <ImStarHalf color="#ff9b25" size="14" />
                          <ImStarEmpty color="#ff9b25" size="14" />
                        </HStack>
                        <Text fontSize="16">4.95(6,250)</Text>
                      </HStack>
                      <HStack spacing="2">
                        <HStack>
                          <Text color="#D50000" fontSize="24" fontWeight={600}>
                            10,000
                          </Text>
                          <Text color="gray.700" fontSize="12">
                            원/시간
                          </Text>
                        </HStack>
                        <HStack spacing={1}>
                          <BsFillPersonFill color="gray" />
                          <Text fontSize="12" color="gray.700">
                            4~12인
                          </Text>
                        </HStack>
                        <HStack spacing={1}>
                          <FaTrain color="gray" />
                          <Text fontSize="12" color="gray.700">
                            중앙로역
                          </Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </VStack>
                </HStack>
              </GridItem>
            ))}
        </Grid>
      </VStack>

      {/* 이벤트 */}
      <VStack w="7xl" alignItems={"start"}>
        <Text fontSize="28" fontWeight={700} mb={4}>
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

      {/* 내 주변 스터디룸 */}
      <VStack w="7xl" alignItems={"start"}>
        <Text fontSize="28" fontWeight={700} mb={4}>
          내 주변 스터디룸 추천
        </Text>

        <Grid templateColumns={"repeat(4, 1fr)"} gap="4">
          {Array(8)
            .fill("")
            .map((_, i) => (
              <GridItem overflow={"hidden"} rounded="xl" position="relative">
                <Box>
                  <Image
                    objectFit={"cover"}
                    width="308px"
                    height="308px"
                    src="https://plus.unsplash.com/premium_photo-1665203427126-f1f2fa815738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  />
                </Box>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  bgGradient="linear(to-b, rgba(0, 0, 0,0), rgba(0, 0, 0, 0.9))"
                />
                <VStack
                  position="absolute"
                  top="0"
                  left="0"
                  w="full"
                  h="full"
                  justifyContent={"space-between"}
                  p="4"
                >
                  <HStack w="full" justifyContent={"space-between"}>
                    <Box>
                      <AiOutlineHeart color="#D50000" size="24" />
                    </Box>
                    <HStack spacing="1" alignItems={"center"}>
                      <Box>
                        <ImStarFull color="white" />
                      </Box>
                      <Text color="white" fontSize="14">
                        4.95
                      </Text>
                    </HStack>
                  </HStack>
                  <VStack w="full" alignItems={"flex-start"}>
                    <VStack spacing="1">
                      <Text fontSize={22} fontWeight={600} color="white">
                        [동성로]아이캔 스터디룸
                      </Text>
                      <Text fontSize={14} color="white">
                        #취업스터디룸 #멋진뷰 #스터디카페
                      </Text>
                    </VStack>
                    <HStack spacing="2">
                      <HStack>
                        <Text color="#D50000" fontSize="24" fontWeight={600}>
                          10,000
                        </Text>
                        <Text color="white" fontSize="12">
                          원/시간
                        </Text>
                      </HStack>
                      <HStack spacing={1}>
                        <BsFillPersonFill color="white" />
                        <Text fontSize="12" color="white">
                          4~12인
                        </Text>
                      </HStack>
                      <HStack spacing={1}>
                        <FaTrain color="white" />
                        <Text fontSize="12" color="white">
                          중앙로역
                        </Text>
                      </HStack>
                    </HStack>
                  </VStack>
                </VStack>
              </GridItem>
            ))}
        </Grid>
      </VStack>

      {/* 지금 하모를 만나보세요 */}
      <VStack w="full" bg="gray.100" py="16">
        <VStack w="7xl" alignItems={"start"}>
          <Text fontSize="28" fontWeight={700} mb={4}>
            지금 하모를 만나보세요
          </Text>

          <Grid templateColumns={"repeat(3, 1fr)"} gap="4">
            <GridItem w="412px" h="152px" bg="white">
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                w="full"
                h="full"
                px="8"
              >
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={600} fontSize="20">
                    서비스 알아보기
                  </Text>
                  <Text>바로가기</Text>
                </VStack>
                <Box>
                  <Link to="motels">
                    <Box
                      w="100px"
                      h="100px"
                      bg="gray.100"
                      rounded="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <About1 height="50px" width="50px" />
                    </Box>
                  </Link>
                </Box>
              </HStack>
            </GridItem>
            <GridItem w="412px" h="152px" bg="white">
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                w="full"
                h="full"
                px="8"
              >
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={600} fontSize="20">
                    카카오톡 채널
                  </Text>
                  <Text>바로가기</Text>
                </VStack>
                <Box>
                  <Link to="motels">
                    <Box
                      w="100px"
                      h="100px"
                      bg="gray.100"
                      rounded="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <About2 height="50px" width="50px" />
                    </Box>
                  </Link>
                </Box>
              </HStack>
            </GridItem>
            <GridItem w="412px" h="152px" bg="white">
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                w="full"
                h="full"
                px="8"
              >
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={600} fontSize="20">
                    회사소개
                  </Text>
                  <Text>바로가기</Text>
                </VStack>
                <Box>
                  <Link to="motels">
                    <Box
                      w="100px"
                      h="100px"
                      bg="gray.100"
                      rounded="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <About3 height="50px" width="50px" />
                    </Box>
                  </Link>
                </Box>
              </HStack>
            </GridItem>
            <GridItem w="412px" h="152px" bg="white">
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                w="full"
                h="full"
                px="8"
              >
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={600} fontSize="20">
                    입점문의
                  </Text>
                  <Text>바로가기</Text>
                </VStack>
                <Box>
                  <Link to="motels">
                    <Box
                      w="100px"
                      h="100px"
                      bg="gray.100"
                      rounded="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <About4 height="50px" width="50px" />
                    </Box>
                  </Link>
                </Box>
              </HStack>
            </GridItem>
            <GridItem w="412px" h="152px" bg="white">
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                w="full"
                h="full"
                px="8"
              >
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={600} fontSize="20">
                    3D 촬영신청
                  </Text>
                  <Text>바로가기</Text>
                </VStack>
                <Box>
                  <Link to="motels">
                    <Box
                      w="100px"
                      h="100px"
                      bg="gray.100"
                      rounded="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <About5 height="50px" width="50px" />
                    </Box>
                  </Link>
                </Box>
              </HStack>
            </GridItem>
            <GridItem w="412px" h="152px" bg="white">
              <HStack
                justifyContent={"space-between"}
                alignItems="center"
                w="full"
                h="full"
                px="8"
              >
                <VStack alignItems={"flex-start"}>
                  <Text fontWeight={600} fontSize="20">
                    랜딩페이지 제작
                  </Text>
                  <Text>바로가기</Text>
                </VStack>
                <Box>
                  <Link to="motels">
                    <Box
                      w="100px"
                      h="100px"
                      bg="gray.100"
                      rounded="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <About6 height="50px" width="50px" />
                    </Box>
                  </Link>
                </Box>
              </HStack>
            </GridItem>
          </Grid>
        </VStack>
      </VStack>
    </VStack>
  );
}
