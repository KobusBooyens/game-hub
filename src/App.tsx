import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {useEffect, useState} from "react";
import {GenreList} from "./components/GenreList";
import {Genre} from "./Hooks/useGenre";
import {PlatformSelector} from "./components/PlatformSelector";
import {Platform} from "./Hooks/useGames";

function App() {
    let setTitle = false
    useEffect(() => {
        if(!setTitle){
            document.title = 'Game Hub'
            setTitle = true
        }
    })

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
              <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}></GenreList>
          </GridItem>
      </Show>

      <GridItem area={'main'}>
          <PlatformSelector onSelectedPlatform={(platform) => setSelectedPlatform(platform)} selectedPlatform={selectedPlatform}></PlatformSelector>
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} ></GameGrid>
      </GridItem>

  </Grid>
}

export default App
