import React from 'react'
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, { Game } from "../Hooks/useGames";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery
}

export const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery)
    const skeletons = Array.from({length: 12}, (value, index) => index)

    if (error) return <Text>{(error as Error).message}</Text>

    return (
        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={6}>
            {isLoading && skeletons.map(skeleton =>
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton/>
                </GameCardContainer>
            )}

            {data?.results.map((game: Game) =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>
    )
}
