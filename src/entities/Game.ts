import {Platform} from "./Platform";
import {Genre} from "./Genre";
import {Publisher} from "./Publisher";

export interface Game {
    id: number,
    name: string,
    slug: string,
    description_raw: string,
    background_image: string,
    publishers: Publisher[],
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number,
    genres: Genre[]
}