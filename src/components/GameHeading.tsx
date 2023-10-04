import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useG from "../hooks/useG";
import useP from "../hooks/useP";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useG(gameQuery.genreId);
  const platform = useP(gameQuery.platformId)

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
