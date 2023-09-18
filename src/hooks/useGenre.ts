import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}
const useGenre = () => {
  return useData<Genre>("/genres");
};

export default useGenre;
