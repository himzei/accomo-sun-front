import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { priceFormat } from "../lib/utils";

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  pk: number;
}

export default function List({
  pk,
  imageUrl,
  name,
  city,
  country,
  price,
  rating,
}: IRoomProps) {
  return (
    <Link to={`/motels/${pk}`}>
      <VStack
        pt="2"
        justifyContent={"space-between"}
        w="580px"
        h="240px"
        bg="gray.200"
        alignItems={"flex-start"}
        backgroundImage={`url('${imageUrl}')`}
        backgroundSize="cover"
        backgroundPosition={"center center"}
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="full"
          h="full"
          bgGradient="linear(white 15%, black 50%)"
          opacity="0.5"
        />
        <Box zIndex={9} bg="gray.900" px="4" opacity={0.7}>
          <Text color="white">선 주차 및 연박 이용시 이벤트 공지사항 확인</Text>
        </Box>
        <HStack
          zIndex={9}
          justifyContent={"space-between"}
          alignItems="flex-end"
          w="full"
          h="full"
          p="5"
        >
          <VStack alignItems={"flex-start"} spacing="1">
            <Text fontSize="22" fontWeight="600" color="white">
              {name}
            </Text>
            <Text color="yellow.300" fontSize="18">
              {rating} 추천해요(1661)
            </Text>
            <Text fontSize="20" color="white">
              {country} {city}
            </Text>
          </VStack>
          <VStack spacing={1} alignItems="flex-end">
            <HStack spacing={1} alignItems="center">
              <Box bg="gray.700">
                <Text fontSize="sm" color="white" px="1">
                  무한대실
                </Text>
              </Box>
              <Box bg="red.600">
                <Text fontSize="sm" color="white" px="1">
                  예약
                </Text>
              </Box>
              <Text fontSize="24" fontWeight={600} color="white">
                30,000원
              </Text>
            </HStack>
            <HStack spacing={1} alignItems="center">
              <Box bg="gray.700">
                <Text fontSize="sm" color="white" px="1">
                  숙박 빠른입실
                </Text>
              </Box>
              <Box bg="red.600">
                <Text fontSize="sm" color="white" px="1">
                  예약
                </Text>
              </Box>
              <Text fontSize="24" fontWeight={600} color="white">
                {priceFormat(price)}
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Link>
  );
}
