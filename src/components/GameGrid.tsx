import React from 'react'
import {Box, Button, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import useGames, { Game } from "../Hooks/useGames";
import {GameCard} from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton";
import {GameCardContainer} from "./GameCardContainer";
import {GameQuery} from "../App";
import InfiniteScroll from 'react-infinite-scroll-component'

interface Props {
    gameQuery: GameQuery
}

export const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } = useGames(gameQuery)
    const skeletons = Array.from({length: 12}, (value, index) => index)
    if (error) return <Text>{(error as Error).message}</Text>

    const fetchedGamesCount = data?.pages.reduce((total, page) =>
        total+ page.results.length, 0) || 0

    return (
            <InfiniteScroll dataLength={fetchedGamesCount} next={() => fetchNextPage()} hasMore={!!hasNextPage} loader={<Spinner/>}
                // below props only if you need pull down functionality
                //             refreshFunction={this.refresh}
                //             pullDownToRefresh
                //             pullDownToRefreshThreshold={50}
                //             pullDownToRefreshContent={
                //                 <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                //             }
                //             releaseToRefreshContent={
                //                 <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                //             }
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