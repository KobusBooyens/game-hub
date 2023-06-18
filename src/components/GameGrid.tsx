import React from 'react'
import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import useGames, { Game } from "../Hooks/useGames";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import {GameQuery} from "../App";

interface Props {
    gameQuery: GameQuery
}

export const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useGames(gameQuery)
    const skeletons = Array.from({length: 12}, (value, index) => index)
    const pageSize = 20
    if (error) return <Text>{(error as Error).message}</Text>

    return (
        <Box padding="10px">
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}  spacing={6}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {data?.pages.map((page, index) =>
                <React.Fragment key={index}>
                    {page.results.map((game: Game) =>
                        <GameCardContainer key={game.id}>
                            <GameCard game={game}/>
                        </GameCardContainer>
                    )}
                </React.Fragment>)}
            </SimpleGrid>

            {hasNextPage &&
                <Button onClick={() => fetchNextPage()} marginY={5}>
                    {isFetchingNextPage ? 'Loading...' : 'Load More'}
                </Button>
            }
        </Box>
    )
}
