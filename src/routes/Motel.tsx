import { Grid, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import Category from "../components/Category";
import ListThree from "../components/ListThree";

interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

export default function Motel() {
  const { isLoading, data } = useQuery<IRoom[]>(["motels"], getRooms);

  console.log(isLoading, data);
  return (
    <VStack w="full" alignItems={"center"} spacing={20} my={20}>
      {/* 카테고리 */}
      <Category />

      {/* 3열 스터디룸 리스트 */}
      <VStack w="7xl" alignItems={"start"}>
        <Text fontSize="28" fontWeight={700} mb={4}>
          최근 본 상품의 연관상품
        </Text>
        <Grid templateColumns={"repeat(3, 1fr)"} gap="4" rowGap={6}>
          {Array(24)
            .fill("")
            .map((_, i) => (
              <ListThree key={i} />
            ))}
        </Grid>
      </VStack>
    </VStack>
  );
}
