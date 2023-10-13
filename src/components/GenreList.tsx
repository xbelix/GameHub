import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import cropImage from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const selecetedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <GenreListSkeleton />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((d) => (
          <ListItem key={d.id} py="5px">
            <HStack>
              <Image
                objectFit="cover"
                src={cropImage(d.image_background)}
                borderRadius={8}
                boxSize="32px"
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={d.id === selecetedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(d.id)}
                variant="link"
                fontSize="lg"
              >
                {d.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
