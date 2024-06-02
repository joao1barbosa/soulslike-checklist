import { HStack } from "@chakra-ui/react";

interface PlacerProps{
    placeContent: string
}

export function Placer({ placeContent }: PlacerProps){
    return(
        <HStack px="8" gap="4" h="100%" placeContent={placeContent}>
            //childen
        </HStack>
    );
}