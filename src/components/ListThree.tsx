import { Box, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { ImStarFull } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTrain } from "react-icons/fa";

export default function ListThree() {
  return (
    <GridItem w="100%" position="relative">
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
            <Text
              fontFamily={"Monteserat"}
              color="#D50000"
              fontSize="24"
              fontWeight={700}
            >
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
  );
}
