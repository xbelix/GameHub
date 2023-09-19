import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack  p="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
