import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../Hooks/usePlatforms";
import {Platform} from "../Hooks/useGames";

interface Props {
    onSelectedPlatform: (platform: Platform) => void,
    selectedPlatform: Platform | null
}

export const PlatformSelector = ({onSelectedPlatform, selectedPlatform} : Props) => {

    const {data, error} = usePlatforms()

    if(error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {data?.results.map((platform: Platform) =>
                    <MenuItem key={platform.id}

                              onClick={() => onSelectedPlatform(platform)}>
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}
