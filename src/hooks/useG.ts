import useGenre from "./useGenre";

const useG = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((gen) => gen.id === id);
};
export default useG;
