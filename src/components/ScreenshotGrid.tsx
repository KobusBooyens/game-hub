import React from 'react'
import {SimpleGrid, Spinner} from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import {ScreenshotContainer} from "./ScreenshotContainer";
import {ScreenshotCard} from "./ScreenshotCard";

interface Prop{
    gameId: number
}

export const ScreenshotGrid = ({gameId} : Prop) => {
    const {data: screenshot, error, isLoading} = useScreenshots(gameId)

    if(isLoading) return null
    if(error) throw error

    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2} padding="10px">
            {screenshot?.results.map(file =>
                <ScreenshotContainer key={file.id}>
                    <ScreenshotCard screenshot={file}/>
                </ScreenshotContainer>)}
        </SimpleGrid>
    )
}

export default ScreenshotGrid
