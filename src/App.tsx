import './App.css'
import {Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {useEffect, useState} from "react";
import {GenreList} from "./components/GenreList";
import {Genre} from "./Hooks/useGenre";
import {PlatformSelector} from "./components/PlatformSelector";
import {Platform} from "./Hooks/useGames";
import {SortSelector} from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null,
    platform: Platform | null
}

function App() {
    let setTitle = false
    useEffect(() => {
        if(!setTitle){
            document.title = 'Game Hub'
            setTitle = true
        }
    })

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return <Grid templateAreas={{
              base: ` "nav" "main"`,
              lg: `"nav nav" "aside main"`
              }}
              templateColumns={{
                  base: 'fr1',
                  lg: '200px 1fr'
              }}>
              <GridItem area={'nav'}><NavBar></NavBar></GridItem>
              <Show above="lg">
                  <GridItem area="aside" paddingX='5'>
                      <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                                 selectedGenre={gameQuery.genre}/>
                  </GridItem>
              </Show>

              <GridItem area={'main'}>
                  <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                      <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                                        selectedPlatform={gameQuery.platform}/>
                      <SortSelector></SortSelector>
                  </HStack>

                  <GameGrid gameQuery={gameQuery} ></GameGrid>
              </GridItem>
          </Grid>
}

export default App
