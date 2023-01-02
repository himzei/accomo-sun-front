import { Spinner, Text, useToast, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { naverLogIn } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function NaverConfirm() {
  const toast = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { search } = useLocation();

  const mutation = useMutation(naverLogIn, {
    onSuccess: () => {
      toast({
        status: "success",
        title: "로그인",
        description: "만나서 반가워요.",
        position: "top",
      });
      queryClient.refetchQueries(["me"]);
      navigate("/");
    },
  });

  const confirmLogin = async () => {
    const params = new URLSearchParams(search);
    const code = params.get("code");
    const state = params.get("state");

    if (code) {
      mutation.mutate({
        code,
        state,
      });
    }
  };

  useEffect(() => {
    confirmLogin();
  }, []);
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
