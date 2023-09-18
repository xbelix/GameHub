import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import cropImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenre();

  if(isLoading) return <GenreListSkeleton />
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id} py="5px">
          <HStack>
            <Image
              src={cropImage(d.image_background)}
              borderRadius={8}
              boxSize="32px"
            />
            <Text fontSize="lg">{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
