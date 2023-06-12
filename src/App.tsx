import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {useEffect, useState} from "react";
import {GenreList} from "./components/GenreList";
import {Genre} from "./Hooks/useGenre";

function App() {
    let setTitle = false
    useEffect(() => {
        if(!setTitle){
            document.title = 'Game Hub'
            setTitle = true
        }
    })

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
              <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)}></GenreList>
          </GridItem>
      </Show>

      <GridItem area={'main'}>
          <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>

  </Grid>
}

export default App
