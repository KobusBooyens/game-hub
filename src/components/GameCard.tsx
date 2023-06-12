import React from 'react'
import {Game} from "../Hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {PlatformIconList} from "./PlatformIconList";
import {CriticScore} from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    game: Game
}

export const GameCard = ({game}:Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}