import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}
const useGames = (
  selectedgenre: Genre | null,
  selectedplatform: Platform | null
) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedgenre?.id,
        platforms: selectedplatform?.id,
      },
    },
    [selectedgenre?.id, selectedplatform?.id]
  );
};

export default useGames;
