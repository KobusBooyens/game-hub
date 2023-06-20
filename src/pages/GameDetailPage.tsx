import React from 'react'
import useGame from "../Hooks/useGame";
import {useParams} from "react-router-dom";
import {Box, Heading, Spinner, Text} from "@chakra-ui/react";

export const GameDetailPage = () => {
    const { slug } = useParams()
   const {data:game, isLoading, error} = useGame(slug)

    if(isLoading) return <Spinner/>

    if(error || !game) throw error

    return (
        <>
            <Heading>{game.name}</Heading>
            <Text>{game.description_raw}</Text>
        </>
    )
}
