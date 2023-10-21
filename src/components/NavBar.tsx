import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import SwitchColorMode from "./SwitchColorMode";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack p="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <SwitchColorMode />
    </HStack>
  );
};

export default NavBar;
