import React from 'react'
import {SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames  from "../hooks/useGames";
import {Game} from "../entities/Game";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import InfiniteScroll from 'react-infinite-scroll-component'

export const GameGrid = () => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames()
    const skeletons = Array.from({length: 12}, (value, index) => index)
    if (error) return <Text>{(error as Error).message}</Text>

    const fetchedGamesCount = data?.pages.reduce((total, page) =>
        total+ page.results.length, 0) || 0

    return (
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={<Spinner/>}
            >
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}}  spacing={6} padding="10px">
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
            </InfiniteScroll>
    )
}