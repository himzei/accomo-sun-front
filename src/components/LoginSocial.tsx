import { Button, Text } from "@chakra-ui/react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { SiNaver } from "react-icons/si";

import { AiFillGithub } from "react-icons/ai";

export default function LoginSocial() {
  const kakaoParams = {
    client_id: "c00c9350689f948254a3cc6207a83134",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
  return (
    <>
      {/* 카카오톡으로 로그인 */}
      <Button
        as="a"
        href={`https://kauth.kakao.com/oauth/authorize?${params}`}
        w="sm"
        bg="#fee221"
        leftIcon={<RiKakaoTalkFill size="24" />}
      >
        <Text fontWeight={600} fontSize={16}>
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
        <Text fontWeight={600} fontSize={16}>
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
        <Text fontWeight={600} fontSize={16}>
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
        <Text fontWeight={600} fontSize={16} color="black">
          Github로 로그인
        </Text>
      </Button>
    </>
  );
}
