import React from 'react'
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms, {Platform} from "../Hooks/usePlatforms";
import usePlatform from "../Hooks/usePlatform";
import useGameQueryStore from "../store";

export const PlatformSelector = () => {
    const {data: platforms, error} = usePlatforms()

    const selectedPlatformId = useGameQueryStore(r => r.gameQuery.platformId)
    const selectedPlatform = usePlatform(selectedPlatformId)
    const setSelectedPlatformId = useGameQueryStore(r => r.setPlatformId)

    if(error) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {platforms?.results.map((platform: Platform) =>
                    <MenuItem key={platform.id}
                              onClick={() => setSelectedPlatformId(platform.id)}>
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}
