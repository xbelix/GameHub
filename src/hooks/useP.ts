import usePlatform from "./usePlatform";

const useP = (id?: number) => {
  const { data } = usePlatform();
  return data?.results.find((p) => p.id === id);
};
export default useP;
