import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import cropImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  selectGenre: (genre: Genre)=> void;
}

const GenreList = ({ selectGenre }: Props) => {
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
            <Button onClick={()=> selectGenre(d)} variant='link' fontSize="lg">{d.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
