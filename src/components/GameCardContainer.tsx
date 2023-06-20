import React, {ReactNode} from 'react'
import {Box} from "@chakra-ui/react";

interface Props{
    children: ReactNode
}

export const GameCardContainer = ({children} : Props) => {
    return (
        <Box _hover={{
            transform: 'scale(1.03)',
            transition: '.15s ease-in-out'}}
             borderRadius={10} overflow="hidden">{children}</Box>
    )
}
