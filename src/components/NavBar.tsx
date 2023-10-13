import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import SwitchColorMode from "./SwitchColorMode";

const NavBar = () => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
