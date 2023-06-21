import React from 'react'
import useTrailer from "../hooks/useTrailer";
import {Spinner} from "@chakra-ui/react";

interface Props{
    gameId: number
}

export const GameTrailer = ({gameId} : Props) => {

    const {data: trailer, error, isLoading} = useTrailer(gameId)

    if(isLoading) return null
    if(error) throw error

    const dataToUse  = trailer?.results[0]

    return dataToUse
        ? (<video
            src={dataToUse?.data[480]}
            poster={dataToUse?.preview}
            title={dataToUse?.name}
            controls/>)
        : null
}
