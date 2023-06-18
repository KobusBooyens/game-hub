import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms, {Platform} from "../Hooks/usePlatforms";
import usePlatform from "../Hooks/usePlatform";

interface Props {
    onSelectedPlatform: (platform: Platform) => void,
    selectedPlatformId?: number
}

export const PlatformSelector = ({onSelectedPlatform, selectedPlatformId} : Props) => {

    const {data: platforms, error} = usePlatforms()
    const selectedPlatform = usePlatform(selectedPlatformId)

    if(error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {platforms?.results.map((platform: Platform) =>
                    <MenuItem key={platform.id}
                              onClick={() => onSelectedPlatform(platform)}>
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}
