import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const fetchedDataLength =
    data?.pages.reduce((acc, el) => acc + el.results.length, 0) || 0;

  return (
    <>
      {error && <Text>{error.message}</Text>}
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        dataLength={fetchedDataLength}
        loader={<Spinner my={10} />}
      >
        <SimpleGrid
        p="10px"
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={6}
        >
          {isLoading &&
            skeleton.map((skel) => (
              <GameCardContainer key={skel}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      </>
  );
};

export default GameGrid;
