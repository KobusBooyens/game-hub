import React from 'react'
import useGenres, {Genre} from "../Hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";



export const GenreList = () => {
    const { data, isLoading, error } = useGenres();

    if(error){
        return null
    }

    if(isLoading){
        return <Spinner/>
    }

    const selectedGenreId = useGameQueryStore(r =>  r.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(r => r.setGenreId)

    return (
        <>
            <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
            <List >
                {data?.results.map((g: Genre) =>
                    <ListItem key={g.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize="32px"
                                   borderRadius={8}
                                   objectFit="cover"
                                   src={getCroppedImageUrl(g.image_background) }/>
                            <Button whiteSpace='normal'
                                    textAlign='left'
                                    fontWeight={selectedGenreId === g.id ? 'bold' : 'normal'}
                                    fontSize='lg'
                                    variant='link'
                                    onClick={() => setSelectedGenreId(g.id)}>
                                {g.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}
