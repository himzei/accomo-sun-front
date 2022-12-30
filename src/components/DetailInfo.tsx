import { Text, VStack } from "@chakra-ui/react";

export default function DetailInfo() {
  return (
    <VStack
      w="4xl"
      bg="gray.100"
      py="8"
      px="4"
      spacing={6}
      alignItems="flex-start"
    >
      <VStack spacing={1} w="full" alignItems={"flex-start"}>
        <Text>혜택안내</Text>
        <Text fontSize="sm" color="gray.700">
          요금할인
        </Text>
      </VStack>
      <VStack spacing={1} w="full" alignItems={"flex-start"}>
        <Text>주차장 정보</Text>
        <Text fontSize="sm" color="gray.700">
          -지하 타워 주차장 2개 포함 지상주차장 총 40대 주차가능 -선주차는
          프런트에 문의후 가능 -발렛서비스 제공 지상주차장으로 입차후 차량키는
          차에두고 로비로 들어오심됩니다. 총 40대 주차시설 보유
        </Text>
      </VStack>
    </VStack>
  );
}
