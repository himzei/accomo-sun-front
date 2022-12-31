import { Box, VStack, Text, HStack } from "@chakra-ui/react";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import Reviews from "./Reviews";

export default function DetailReview() {
  return (
    <VStack w="4xl">
      <VStack spacing={4} py="6" w="full">
        <VStack w="full" alignItems={"center"} spacing="0">
          <Box>
            <Text fontSize="24">추천해요</Text>
          </Box>
          <HStack spacing="4">
            <HStack justifyContent={"center"} spacing="2">
              <ImStarFull color="#ff9b25" size="22" />
              <ImStarFull color="#ff9b25" size="22" />
              <ImStarFull color="#ff9b25" size="22" />
              <ImStarHalf color="#ff9b25" size="22" />
              <ImStarEmpty color="#ff9b25" size="22" />
            </HStack>
            <Text fontSize="24">9.2</Text>
          </HStack>
        </VStack>
        <HStack>
          <Text>전체리뷰 1654</Text>
        </HStack>
        <Box w="full" borderBottom="1px" borderColor="gray.200" h="30px"></Box>
      </VStack>

      {/* 리뷰 */}
      {Array(4)
        .fill("")
        .map((_, i) => (
          <Reviews />
        ))}
    </VStack>
  );
}
