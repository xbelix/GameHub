import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { search: searchText } })),
  setGenreId: (genre) =>
    set((stat) => ({ gameQuery: { ...stat.gameQuery, genreId: genre } })),
  setPlatformId: (platform) =>
    set((stat) => ({ gameQuery: { ...stat.gameQuery, platformId: platform } })),
  setSortOrder: (order) =>
    set((stat) => ({ gameQuery: { ...stat.gameQuery, sortOrder: order } })),
}));
export default useGameQueryStore;
