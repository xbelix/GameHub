import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  showPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, showPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {showPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((d) => (
          <MenuItem onClick={() => onSelectPlatform(d)} key={d.id}>
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
