import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/games");
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get(),
    initialData: { count: genres.length, results: genres, next: null },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
