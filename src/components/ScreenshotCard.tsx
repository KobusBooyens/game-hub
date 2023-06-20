import React from 'react'
import {Screenshot} from "../entities/Screenshot";
import {Card, Image} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    screenshot: Screenshot
}

export const ScreenshotCard = ({screenshot}: Props) => {
    return (
       <Card>
           <Image src={getCroppedImageUrl(screenshot.image)}></Image>
       </Card>
    )
}
