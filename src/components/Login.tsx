import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import LoginEmail from "./LoginEmail";
import LoginSocial from "./LoginSocial";

export default function Login() {
  return (
    <HStack w="full" justifyContent={"center"} alignItems="center">
      <VStack py={24}>
        <Box py={4}>
          <Text fontFamily={"heading"} color="red.500" fontSize={"2xl"}>
            저기어때
          </Text>
        </Box>

        {/* 소셜 로그인 컴포넌트 임포트 */}
        <LoginSocial />

        <HStack py="6" w="sm" justifyContent={"space-between"}>
          <Box h="1px" bg="gray.100" w="150px" />
          <Text color="gray.400">또는</Text>
          <Box h="1px" bg="gray.100" w="150px" />
        </HStack>

        {/* 이메일 로그인 컴포넌트 임포트 */}
        <LoginEmail />
      </VStack>
    </HStack>
  );
}
