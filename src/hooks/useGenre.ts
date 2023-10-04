import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchData<Genre>>("/genres").then((res) => res.data),
    initialData: { count: genres.length, results: genres },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
