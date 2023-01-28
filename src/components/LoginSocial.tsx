import { Button, Text } from "@chakra-ui/react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import { SiNaver } from "react-icons/si";

import { AiFillGithub } from "react-icons/ai";

export default function LoginSocial() {
  const kakaoParams = {
    client_id: "c00c9350689f948254a3cc6207a83134",
    redirect_uri: "https://jagioddae.click/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();

  const generateRandomString = (num: number) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const nStateToken = generateRandomString(20);

  const naverParams = {
    client_id: "AH87975Atf2Flz5RD1a5",
    response_type: "code",
    redirect_uri: "https://jagioddae.click/social/naver",
    state: nStateToken,
  };
  const paramNaver = new URLSearchParams(naverParams).toString();

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
        bg="#d15442"
        color="white"
        leftIcon={<AiFillGoogleCircle size="24" />}
      >
        <Text fontWeight={600} fontSize={16}>
          Google로 로그인
        </Text>
      </Button>

      {/* 네이버 로그인 */}
      <Button
        as="a"
        href={`https://nid.naver.com/oauth2.0/authorize?${paramNaver}`}
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
