import useData from "./useData";
import { Platform } from "./useGames";

const usePlatform = () => {
  return useData<Platform>("platforms/lists/parents");
};
export default usePlatform;
