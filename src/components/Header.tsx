import {
  Avatar,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  const toast = useToast();
  const queryClient = useQueryClient();
  const onLogOut = async () => {
    await logOut();
    queryClient.refetchQueries(["me"]);
    toast({
      title: "로그아웃",
      description: "즐거운 여행 되시고, 다음에 만나요",
      status: "success",
      position: "top",
    });
  };
  return (
    <HStack w="full" justifyContent={"center"} bg="red.500">
      <HStack justifyContent={"space-between"} w={"5xl"} py={4} px={10}>
        <Box color="red.500">
          <Link to={"/"}>
            <Text
              fontFamily={"heading"}
              fontWeight={"700"}
              fontSize="24"
              color="white"
            >
              저기어때.
            </Text>
          </Link>
        </Box>
        <HStack spacing={2} color="white">
          <Box px="8">
            <AiOutlineSearch size="20px" />
          </Box>
          <Button variant={"ghost"}>내주변</Button>
          <Button variant={"ghost"}>예약내역</Button>
          <Button variant={"ghost"}>더보기</Button>
          {!userLoading ? (
            !isLoggedIn ? (
              <>
                <Link to="login">
                  <Button variant={"ghost"}>로그인</Button>
                </Link>
              </>
            ) : (
              <Box px="2">
                <Menu>
                  <MenuButton>
                    <Avatar name={user.name} src={user.avatar} size="sm" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={onLogOut}>
                      <Text color="black">로그아웃</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            )
          ) : null}
        </HStack>
      </HStack>
    </HStack>
  );
}
