import React from 'react'
import {HStack, Switch, Text, useColorMode} from "@chakra-ui/react";

export const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode()

    return (
       <HStack>
           <Switch colorScheme={'green'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}> </Switch>
               <Text>Dark Mode</Text>

       </HStack>
    )
}