import React from 'react'
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";

export const GameGrid = () => {
    const {games, error, isLoading} = useGames()
    const skeleton = Array.from<number>({length:12})
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding="10px" spacing={10} key='1'>
                {isLoading && skeleton.map(s => <GameCardSkeleton key={s}></GameCardSkeleton>)}
                {games.map(game =>
                    <GameCard key={game.id} game={game}/>
                )}
            </SimpleGrid>
        </>
    )
}
