import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

const GameTrailers = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return <Spinner />;
  if (error) throw error;

  const vid = data?.results[0];

  return vid ? <video src={vid?.data[480]} poster={vid?.preview} controls /> : null;
};

export default GameTrailers;
