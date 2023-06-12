import React from 'react'
import useGenre from "../Hooks/useGenre";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

export const GenreList = () => {
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
                        <Text fontSize='12'>{g.name}</Text>
                    </HStack>
                </ListItem>)}
        </List>
    )
}
