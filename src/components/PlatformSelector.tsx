import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useP from "../hooks/useP";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data, error } = usePlatform();
  const platform = useP(platformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((d) => (
          <MenuItem onClick={() => setPlatformId(d.id)} key={d.id}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
