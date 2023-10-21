import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Trailers } from "../entities/Trailers";

const useTrailers = (gameId: number) => {
  const apilCient = new APIClient<Trailers>(`games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apilCient.get,
  });
};
export default useTrailers;
