import React from 'react'
import useGenres, {Genre} from "../Hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre: (genre: Genre) => void,
    selectedGenreId?: number
}

export const GenreList = ({onSelectGenre, selectedGenreId} : Props) => {
    const { data, isLoading, error } = useGenres();

    if(error){
        return null
    }

    if(isLoading){
        return <Spinner/>
    }

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
                                    onClick={() => onSelectGenre(g)}>
                                {g.name}</Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}
