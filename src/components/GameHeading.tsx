import { Heading } from "@chakra-ui/react";
import useG from "../hooks/useG";
import useP from "../hooks/useP";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useG(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useP(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" my={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
