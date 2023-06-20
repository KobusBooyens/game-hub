import React from 'react'
import {Heading} from "@chakra-ui/react";
import usePlatform from "../Hooks/usePlatform";
import useGenre from "../Hooks/useGenre";
import useGameQueryStore from "../store";

export const GameHeading = () => {
   const genreId = useGameQueryStore(s => s.gameQuery.genreId)
    const genre = useGenre(genreId)

   const platformId = useGameQueryStore(s => s.gameQuery.platformId)
    const platform = usePlatform(platformId)



    return (
        <Heading as="h1" marginY={5} fontSize={"5xl"}> {platform?.name} {genre?.name} Games</Heading>
    )
}
