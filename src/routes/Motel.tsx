import { HStack, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import List from "../components/List";

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
    <HStack w="full" justifyContent={"center"} py={16}>
      <VStack w="4xl" spacing="0">
        {data?.map((room, index) => (
          <List
            key={index}
            pk={room.pk}
            imageUrl={room.photos[0].file}
            name={room.name}
            rating={room.rating}
            city={room.city}
            country={room.country}
            price={room.price}
          />
        ))}
      </VStack>
    </HStack>
  );
}
