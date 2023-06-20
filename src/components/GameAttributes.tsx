import React from 'react'
import {Game} from "../entities/Game";
import {SimpleGrid, Text} from "@chakra-ui/react";
import {DefinitionItem} from "./DefinitionItem";
import {CriticScore} from "./CriticScore";

interface Props{
    game: Game
}

export const GameAttributes = ({game}: Props) => {
    return (
        <SimpleGrid columns={2}  spacing={6} padding="10px" as="dl">
            <DefinitionItem heading='Platforms'>
                {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
            </DefinitionItem>
            <DefinitionItem heading='Metascore'>
                <CriticScore score={game.metacritic}/>
            </DefinitionItem>
            <DefinitionItem heading='Genres'>
                {game.genres.map(g =>
                    <Text key={g.id}>{g.name}</Text>)}
            </DefinitionItem>
            <DefinitionItem heading='Publisher'>
                {game.publishers.map(p => <Text key={p.id}>{p.name}</Text>)}
            </DefinitionItem>
        </SimpleGrid>
    )
}
