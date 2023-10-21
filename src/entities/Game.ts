import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}
