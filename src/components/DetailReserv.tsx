import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";

export default function DetailReserv() {
  return (
    <VStack w="7xl" alignItems={"flex-start"} pr="8">
      <Grid templateColumns={"repeat(2, 1fr)"} gap="4" w="full">
        {Array(10)
          .fill("")
          .map((_, i) => (
            <GridItem key={i} w="full">
              <HStack
                p={2}
                border="1px"
                borderColor="gray.200"
                w="full"
                h="200px"
                spacing={4}
              >
                <Box w="320px" h="180px" overflow={"hidden"}>
                  <Image
                    objectFit={"cover"}
                    src="https://image.goodchoice.kr/resize_370x220/affiliate/2021/12/27/61c9407a575f6.jpg"
                  />
                </Box>

                <VStack alignItems={"flex-start"} spacing={2} w="250px">
                  <Text fontSize="18" fontWeight={600}>
                    아이캔 1번룸
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
                  <Button colorScheme={"red"} w="full" size="sm">
                    <Text fontSize={"sm"}>예약</Text>
                  </Button>
                </VStack>
              </HStack>
            </GridItem>
          ))}
      </Grid>
    </VStack>
  );
}
