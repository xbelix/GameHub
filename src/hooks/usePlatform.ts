import platforms from "../data/platforms";
import apiClient, { FetchData } from "../services/api-client";
import { Platform } from "./useGames";
import { useQuery } from "@tanstack/react-query";

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchData<Platform>>("platforms/lists/parents")
        .then((res) => res.data),
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatform;
