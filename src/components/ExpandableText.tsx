import React, {useState} from 'react'
import {Button, Text} from "@chakra-ui/react";

interface Props{
 children: string
}

export const ExpandableText = ({children} :Props) => {
    const[expanded, setExpanded] = useState(false)
    const limit = 300

    const textToDisplay = (children.length <= limit || expanded )
        ? children
        : children.substring(0, limit) + '...'

        return <Text>{textToDisplay}<Button
            size='xs'
            fontWeight={"bold"}
            colorScheme={"yellow"}
            marginLeft={1}
            onClick={() => setExpanded(!expanded)}>{expanded ? 'Show Less' : 'Show More'}
        </Button>
        </Text>

}

export default ExpandableText
