import React from 'react'
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import {Genre} from "../Hooks/useGenre";

interface Props{
    selectedGenre: Genre | null
}

export const GameGrid = ({selectedGenre}: Props) => {
    const {data, error, isLoading} = useGames(selectedGenre)
    const skeletons = Array.from({ length: 12 }, (value, index) => index)
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={3}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}

                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}
