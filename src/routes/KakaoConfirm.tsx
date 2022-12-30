import { Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { kakaoLogIn } from "../api";

export default function KakaoConfirm() {
  const { search } = useLocation();
  const toast = useToast();
  // 로그인 후 상태를 바로 변화시키기 위한 리패치
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    if (code) {
      const status = await kakaoLogIn(code);
      if (status === 200) {
        toast({
          status: "success",
          title: "로그인",
          description: "만나서 반가워요.",
          position: "top",
        });
        // 로그인 후 상태를 바로 변화시키기 위한 리패치
        queryClient.refetchQueries(["me"]);
        // 리다이렉트 홈
        navigate("/");
      }
    }
  };
  useEffect(() => {
    confirmLogin();
  });
  return (
    <VStack justifyContent={"center"} my="32">
      <Text color="red.500" fontSize="28" fontWeight={600}>
        카카오로 로그인 중입니다...
      </Text>
      <Text>잠시만 기다려 주세요</Text>
      <Spinner size="xl" />
    </VStack>
  );
}
