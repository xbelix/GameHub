import useData from "./useData";

interface platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  return useData<platform>("platforms/lists/parents");
};
export default usePlatform;
