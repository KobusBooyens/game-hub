import React from 'react'
import {Box, Heading} from "@chakra-ui/react";

interface Props{
    heading: string,
    children: React.ReactNode | React.ReactNode[]
}

export const DefinitionItem = ({heading, children} : Props) => {

    return (
        <Box marginY={5}>
            <Heading as='dt'size={"md"} color={"gray.600"}>{heading}</Heading>
            <dd>{children}</dd>
        </Box>
    )
}
