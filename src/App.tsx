import './App.css'
import {Grid, GridItem, Show} from "@chakra-ui/react";
import {NavBar} from "./components/NavBar";
import {GameGrid} from "./components/GameGrid";
import {useEffect} from "react";
import {GenreList} from "./components/GenreList";

function App() {
    let setTitle = false
    useEffect(() => {
        if(!setTitle){
            document.title = 'Game Hub'
            console.log('set document title.')
            setTitle = true
        }
    })

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
              <GenreList></GenreList>
          </GridItem>
      </Show>

      <GridItem area={'main'}>
          <GameGrid></GameGrid>
      </GridItem>

  </Grid>
}

export default App
