import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailers from "../components/GameTrailers";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={5}>
      <GridItem>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttribute game={data} />
      </GridItem>
      <GridItem>
        <GameTrailers gameId={data.id} />
        <GameScreenshots gameId={data.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
