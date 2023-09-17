import { HStack, Icon, color } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaApple,
  FaAndroid,
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
const PlatformIcons = ({ platform }: Props) => {
  const IconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    web: BsGlobe,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };
  return (
    <HStack>
      {platform.map((platform) => (
        <Icon as={IconMap[platform.slug]} color="gray.500" my={1} />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
