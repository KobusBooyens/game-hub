import React from 'react'
import useGenre, {Genre} from "../Hooks/useGenre";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre: (genre: Genre) => void,
    selectedGenre: Genre | null
}

export const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
    const { data, isLoading, error } = useGenre();

    if(error){
        return null
    }

    if(isLoading){
        return <Spinner/>
    }

    return (
        <List >
            {data.map(g =>
                <ListItem key={g.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(g.image_background) }></Image>
                        <Button fontWeight={selectedGenre?.id === g.id ? 'bold' : 'normal'} fontSize='lg' variant='link' onClick={() => onSelectGenre(g)}>{g.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}
