import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import cropImage from "../services/image-url";
import Emojis from "./Emojis";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link to={"games/" + game.slug}>
      <Card variant="filled">
        <Image src={cropImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between" mb={3}>
            <PlatformIcons
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            {game.name}
            <Emojis rating_top={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Link>
  );
};

export default GameCard;
