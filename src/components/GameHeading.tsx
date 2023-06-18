import React from 'react'
import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import usePlatform from "../Hooks/usePlatform";
import useGenre from "../Hooks/useGenre";

interface Props{
    gameQuery: GameQuery
}
export const GameHeading = ({gameQuery}: Props) => {
    const genre = useGenre(gameQuery.genreId)
    const platform = usePlatform(gameQuery.platformId)

    return (
        <Heading as="h1" marginY={5} fontSize={"5xl"}> {platform?.name} {genre?.name} Games</Heading>
    )
}
