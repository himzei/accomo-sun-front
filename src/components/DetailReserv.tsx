import { Box, Button, HStack, Img, Text, VStack } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function DetailReserv() {
  return (
    <VStack w="4xl">
      {Array(4)
        .fill("")
        .map((_, i) => (
          <HStack
            p={4}
            border="1px"
            borderColor="gray.200"
            w="full"
            h="200px"
            spacing={8}
          >
            <Box>
              <Img
                w="420px"
                src="https://image.goodchoice.kr/resize_370x220/affiliate/2021/12/27/61c9407a575f6.jpg"
              />
            </Box>
            <VStack w="full" alignItems={"flex-start"} h="full" spacing={2}>
              <Text fontSize="18" fontWeight={600}>
                스테이트 킹베드
              </Text>
              <HStack
                w="full"
                py="2"
                justifyContent={"space-between"}
                borderBottom="1px"
                borderColor={"gray.200"}
              >
                <Text fontWeight={600} fontSize="sm">
                  가격
                </Text>
                <Text fontWeight={600}>79,000원</Text>
              </HStack>
              <HStack w="full" pb="2" justifyContent={"space-between"}>
                <Text fontSize="sm">객실이용안내</Text>
                <IoIosArrowForward />
              </HStack>
              <Button colorScheme={"red"} w="full">
                <Text fontSize={"sm"}>예약</Text>
              </Button>
            </VStack>
          </HStack>
        ))}
    </VStack>
  );
}
