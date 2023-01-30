import { HStack, Text, VStack } from "@chakra-ui/react";

export default function DetailRefund() {
  return (
    <VStack
      w="full"
      bg="gray.100"
      p="6"
      spacing={6}
      alignItems="flex-start"
      fontSize="14"
    >
      <VStack w="full" alignItems={"flex-start"} spacing="4">
        <VStack spacing={0} alignItems="flex-start" fontSize="16">
          <Text>
            이용당일(첫 날) 이후에 환불 관련 사항은 호스트에게 직접 문의하셔야
            합니다.
          </Text>
          <Text>
            결제 후 2시간 이내에는 100% 환불리 가능합니다.(단, 이용시간 전까지만
            가능)
          </Text>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 8일 전
            </Text>
            <Text>총 금액의 100% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 7일 전
            </Text>
            <Text>총 금액의 90% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 6일 전
            </Text>
            <Text>총 금액의 70% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 5일 전
            </Text>
            <Text>총 금액의 50% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 4일 전
            </Text>
            <Text>총 금액의 40% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 3일 전
            </Text>
            <Text>총 금액의 30% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 2일 전
            </Text>
            <Text>총 금액의 20% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용 1일 전
            </Text>
            <Text>총 금액의 10% 환불</Text>
          </HStack>
          <HStack>
            <Text w="100px" fontWeight={600}>
              이용당일
            </Text>
            <Text>환불불가</Text>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
