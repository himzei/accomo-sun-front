import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  emailLogIn,
  IEmailLoginError,
  IEmailLoginSuccess,
  IEmailLoginVariables,
} from "../api";
import { useNavigate } from "react-router-dom";

interface IForm {
  username: string;
  password: string;
}

export default function LoginEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const toast = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation<
    IEmailLoginSuccess,
    IEmailLoginError,
    IEmailLoginVariables
  >(emailLogIn, {
    onMutate: () => {
      console.log("mutation starting");
    },
    onSuccess: () => {
      toast({
        title: "환영합니다.",
        status: "success",
      });
      reset();
      navigate("/");
      queryClient.refetchQueries(["me"]);
    },
  });
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password });
  };
  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} w="full">
      {/* 이메일 입력 */}
      <InputGroup size="md">
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
          required
          isInvalid={Boolean(errors.username?.message)}
          {...register("username", {
            required: "아이디 작성해 주세요",
          })}
          placeholder="아이디"
          transition="0.4s"
          _focus={{
            boxShadow: "0 0 5pt 0.5pt #d3d3d3",
            outlineWidth: "0px",
          }}
        />
      </InputGroup>

      {/* 비번입력 */}
      <InputGroup size="md">
        <InputLeftElement
          transform={"translateY(5)"}
          children={
            <Box color={"gray.400"}>
              <HiLockClosed size="18" />
            </Box>
          }
        />
        <Input
          required
          isInvalid={Boolean(errors.password?.message)}
          {...register("password", {
            required: "비밀번호를 작성해 주세요",
          })}
          transition="0.4s"
          _focus={{
            boxShadow: "0 0 5pt 0.5pt #d3d3d3",
            outlineWidth: "0px",
          }}
          type="password"
          placeholder="비밀번호"
        />
      </InputGroup>
      {mutation.isError ? (
        <Text color="red.500" textAlign={"center"} fontSize="sm">
          이메일/패스워드가 잘못되었습니다.
        </Text>
      ) : null}
      <Button
        isLoading={mutation.isLoading}
        type="submit"
        w="sm"
        h="42px"
        rounded="md"
        bg="red.500"
        justifyContent={"center"}
      >
        <Text color="white" fontWeight={600} fontSize="18">
          로그인
        </Text>
      </Button>
    </VStack>
  );
}
