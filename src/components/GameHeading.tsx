import React from 'react'
import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";
import usePlatforms from "../Hooks/usePlatforms";
import useGenre from "../Hooks/useGenre";

interface Props{
    gameQuery: GameQuery
}
export const GameHeading = ({gameQuery}: Props) => {

    const {data: genres} =  useGenre()
    const {data: platforms} =  usePlatforms()

    const genre = genres?.results.find(g => g.id === gameQuery.genreId)
    const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

    return (
        <Heading as="h1" marginY={5} fontSize={"5xl"}> {platform?.name} {genre?.name} Games</Heading>
    )
}
