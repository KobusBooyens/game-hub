import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {useEffect, useState} from "react";
import {GenreList} from "./components/GenreList";
import {Genre} from "./Hooks/useGenre";
import {PlatformSelector} from "./components/PlatformSelector";
import {Platform} from "./Hooks/useGames";

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
                      <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}></GenreList>
                  </GridItem>
              </Show>

              <GridItem area={'main'}>
                  <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}></PlatformSelector>
                  <GameGrid gameQuery={gameQuery} ></GameGrid>
              </GridItem>
          </Grid>
}

export default App
