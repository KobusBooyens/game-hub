import './App.css'
import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import React, {useState} from "react";
import {GenreList} from "./components/GenreList";
import {PlatformSelector} from "./components/PlatformSelector";
import {SortSelector} from "./components/SortSelector";
import {GameHeading} from "./components/GameHeading";

export interface GameQuery {
    genreId?: number,
    platformId?: number
    sortOrder: string,
    searchText: string
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return <Grid templateAreas={{
              base: ` "nav" "main"`,
              lg: `"nav nav" "aside main"`
              }}
              templateColumns={{
                  base: 'fr1',
                  lg: '200px 1fr'
              }}>
              <GridItem area={'nav'}>
                  <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}></NavBar>
              </GridItem>

              <Show above="lg">
                  <GridItem area="aside" paddingX='5'>
                      <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
                                 selectedGenreId={gameQuery.genreId}/>
                  </GridItem>
              </Show>

              <GridItem area={'main'}>
                  <Box paddingLeft={2}>
                      <GameHeading gameQuery={gameQuery}/>
                      <Flex marginBottom={5}>
                          <Box marginRight={5}>
                              <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}
                                                selectedPlatformId={gameQuery?.platformId}/>
                          </Box>
                          <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
                                        selectedSortOrder={gameQuery.sortOrder}/>
                      </Flex>
                  </Box>

                  <GameGrid gameQuery={gameQuery} ></GameGrid>
              </GridItem>
          </Grid>
}

export default App
