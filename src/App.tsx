import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            selectGenre={(g) => setGameQuery({ ...gameQuery, genre: g })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          showPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})}
        />
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
