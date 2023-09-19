import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";

interface Props {
  recievedGenre: Genre | null;
  recievedPlatform: Platform | null;
}

const GameGrid = ({ recievedGenre, recievedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(recievedGenre, recievedPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          "2xl": 5,
        }}
        spacing={5}
        p="10px"
      >
        {isLoading &&
          skeleton.map((skel) => (
            <GameCardContainer key={skel}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
