import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("platforms/lists/parents");

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.get,
    initialData: platforms,
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatform;
