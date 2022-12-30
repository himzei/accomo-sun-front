import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { SiNaver } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";

export default function Login() {
  const kakaoParams = {
    client_id: "c00c9350689f948254a3cc6207a83134",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();

  return (
    <HStack w="full" justifyContent={"center"} alignItems="center">
      <VStack py={24}>
        <Box py={4}>
          <Text fontFamily={"heading"} color="red.500" fontSize={"2xl"}>
            저기어때
          </Text>
        </Box>

        {/* 카카오톡으로 로그인 */}
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w="sm"
          bg="#fee221"
          leftIcon={<RiKakaoTalkFill size="24" />}
        >
          <Text fontWeight={600} fontSize={18}>
            카카오톡으로 로그인
          </Text>
        </Button>

        {/* Facebook 로그인 */}
        <Button
          as="a"
          w="sm"
          bg="#006aef"
          color="white"
          leftIcon={<BsFacebook size="20" />}
        >
          <Text fontWeight={600} fontSize={18}>
            Facebook으로 로그인
          </Text>
        </Button>

        {/* 네이버 로그인 */}
        <Button
          as="a"
          w="sm"
          bg="#00ce17"
          color="white"
          leftIcon={<SiNaver size="20" />}
        >
          <Text fontWeight={600} fontSize={18}>
            네이버로 로그인
          </Text>
        </Button>

        {/* Github로 로그인 */}
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=d3d9977c152c50bddaa4&scope=read:user,user:email"
          w="sm"
          leftIcon={<AiFillGithub size="22" />}
        >
          <Text fontWeight={600} fontSize={18} color="black">
            Github로 로그인
          </Text>
        </Button>

        <HStack py="6" w="sm" justifyContent={"space-between"}>
          <Box h="1px" bg="gray.100" w="150px" />
          <Text color="gray.400">또는</Text>
          <Box h="1px" bg="gray.100" w="150px" />
        </HStack>

        {/* 이메일 입력 */}
        <InputGroup size="lg">
          <InputLeftElement
            children={
              <HStack
                justifyContent={"center"}
                alignItems="center"
                color={"gray.400"}
              >
                <MdEmail />
              </HStack>
            }
          />
          <Input
            placeholder="이메일 주소"
            transition="0.4s"
            _focus={{
              boxShadow: "0 0 5pt 0.5pt #d3d3d3",
              outlineWidth: "0px",
            }}
          />
        </InputGroup>

        {/* 비번입력 */}
        <InputGroup size="lg">
          <InputLeftElement
            transform={"translateY(5)"}
            children={
              <Box color={"gray.400"}>
                <HiLockClosed size="20" />
              </Box>
            }
          />
          <Input
            transition="0.4s"
            _focus={{
              boxShadow: "0 0 5pt 0.5pt #d3d3d3",
              outlineWidth: "0px",
            }}
            type="password"
            placeholder="비밀번호"
          />
        </InputGroup>
        <HStack
          w="sm"
          h="54px"
          rounded="md"
          bg="red.500"
          justifyContent={"center"}
        >
          <Text color="white" fontWeight={600} fontSize="18">
            로그인
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
