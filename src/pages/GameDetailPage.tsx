import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import {Box, Button, Heading, Spinner, Text} from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

export const GameDetailPage = () => {
    const { slug } = useParams()
   const {data:game, isLoading, error} = useGame(slug!)

    if(isLoading) return <Spinner/>

    if(error || !game) throw error

    // const[description, setDescription] =  useState('some description')

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>
                {game.description_raw}
            </ExpandableText>
        </>
    )
}
