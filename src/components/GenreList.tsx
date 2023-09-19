import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import cropImage from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, selectGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <GenreListSkeleton />;
  if (error) return null;
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
            <Button
              fontWeight={d.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => selectGenre(d)}
              variant="link"
              fontSize="lg"
            >
              {d.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
