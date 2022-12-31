import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

export default function Reviews() {
  return (
    <>
      {/* 리뷰 */}
      <VStack w="full" spacing="8">
        <HStack w="full" alignItems={"flex-start"} pt="2">
          <HStack
            justifyContent={"center"}
            alignItems="flex-start"
            w="100px"
            pt="1"
          >
            <Avatar />
          </HStack>
          <VStack alignItems={"flex-start"} spacing="4">
            <VStack alignItems="flex-start" spacing={1}>
              <Box bg="red.500" px="1" rounded="xl">
                <Text
                  fontFamily={"heading"}
                  color="white"
                  fontSize="xs"
                  fontWeight={600}
                >
                  베스트 리뷰
                </Text>
              </Box>
              <Text fontWeight={600} fontSize="20">
                조금 아쉬웠지만 이용할만해요
              </Text>
              <HStack spacing="2">
                <HStack justifyContent={"center"} spacing="1">
                  <ImStarFull color="#ff9b25" size="16" />
                  <ImStarFull color="#ff9b25" size="16" />
                  <ImStarFull color="#ff9b25" size="16" />
                  <ImStarHalf color="#ff9b25" size="16" />
                  <ImStarEmpty color="#ff9b25" size="16" />
                </HStack>
                <Text fontSize="18">9.2</Text>
              </HStack>
            </VStack>
            <VStack alignItems="flex-start">
              <Text color="gray.600">VIP 객실 이용</Text>
              <Text>
                엄청따뜻하고~~~ 좋았어요 화장실과 샤워실이 분리된것도 만족했구요
                안마기도 있으니 사용해보게 되더라구요^^ 암튼 만족했고~~ 서울오면
                또이용할겁니다ㅡ~!!^.^
              </Text>
              <Text color="gray.600">2022-12-30</Text>
            </VStack>
          </VStack>
        </HStack>
        <Box w="full" h="20px" borderTop="1px" borderColor="gray.200" my="8" />
      </VStack>
    </>
  );
}
