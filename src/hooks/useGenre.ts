import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get(),
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
