import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import cropImage from "../services/image-url";

const GameScreenshots = ({ gameId }: { gameId: number }) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((img) => (
        <Image key={img.id} src={cropImage(img.image)} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
