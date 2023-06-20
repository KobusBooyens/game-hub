import React from 'react'
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import {NavBar} from "../components/NavBar";

export const ErrorPage = () => {
    const error = useRouteError()

    return (
    <>
        <NavBar/>
        <Box padding={5}>
            <Heading>Oops</Heading>
            <Text>{isRouteErrorResponse(error)
                ? 'This page does not exists'
                : 'An unexpected error has occurred'}
            </Text>
        </Box>

    </>
    )
}
