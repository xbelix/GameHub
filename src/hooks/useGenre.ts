import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get(),
    initialData: genres,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGenre;
