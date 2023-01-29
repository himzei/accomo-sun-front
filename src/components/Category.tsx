import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as One } from "../assets/svg/1.svg";
import { ReactComponent as Two } from "../assets/svg/2.svg";
import { ReactComponent as Three } from "../assets/svg/3.svg";
import { ReactComponent as Four } from "../assets/svg/4.svg";
import { ReactComponent as Five } from "../assets/svg/5.svg";
import { ReactComponent as Six } from "../assets/svg/6.svg";
import { ReactComponent as Seven } from "../assets/svg/7.svg";
import { ReactComponent as Eight } from "../assets/svg/8.svg";

export default function Category() {
  return (
    <HStack justifyContent={"space-between"} w="7xl" h="156px">
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <One height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Two height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Three height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Four height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Five height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Six height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Seven height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
      <Link to="motels">
        <VStack spacing="4">
          <Box
            w="120px"
            h="120px"
            bg="gray.100"
            rounded="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Eight height="50px" width="50px" />
          </Box>
          <Text>카페테마</Text>
        </VStack>
      </Link>
    </HStack>
  );
}
