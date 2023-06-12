import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
    return (
        <Card borderRadius={10} overflow="hidden"  width="300px" height="350px">
            <Skeleton height="200px" startColor='red.500' endColor='blue.500'/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    )
}
