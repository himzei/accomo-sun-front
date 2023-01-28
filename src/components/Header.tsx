import {
  Avatar,
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";
import Logo from "../assets/png/logo.png";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser();
  console.log(user);
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
    <HStack
      w="full"
      justifyContent={"center"}
      bg="white"
      h="80px"
      boxShadow={"xs"}
    >
      <HStack justifyContent={"space-between"} w={"7xl"} py={4} px={4}>
        <HStack spacing={8}>
          <Box>
            <Link to={"/"}>
              <img src={Logo} alt="logo" />
            </Link>
          </Box>
          <Box>
            <InputGroup size="md">
              <Input
                rounded={"full"}
                w="md"
                pr="4.5rem"
                type="text"
                placeholder="지역, 공간유형, 공간명으로 검색해 보세요"
              />
              <InputRightElement mr="1">
                <AiOutlineSearch color="gray" size="20" />
              </InputRightElement>
            </InputGroup>
          </Box>
        </HStack>
        <HStack spacing={1} color="black">
          <Button variant={"ghost"}>
            <AiOutlineMenu size="20" />
          </Button>
          {!userLoading ? (
            !isLoggedIn ? (
              <>
                <Link to="login">
                  <Avatar size="sm" />
                </Link>
              </>
            ) : (
              <Box px="2">
                <Menu>
                  <MenuButton>
                    <Avatar name={user.name} src={user.avatar} size="sm" />
                  </MenuButton>
                  <MenuList>
                    {user?.is_host ? (
                      <Link to="/rooms/upload">
                        <MenuItem py="2">
                          <Text color="gray.700" fontSize="14">
                            Upload room
                          </Text>
                        </MenuItem>
                      </Link>
                    ) : null}
                    <MenuItem onClick={onLogOut} py="2">
                      <Text color="gray.700" fontSize="14">
                        로그아웃
                      </Text>
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
