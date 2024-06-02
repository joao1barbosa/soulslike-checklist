import { HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface PlacerProps{
    placeContent: string
}

export function Placer(props: PropsWithChildren<PlacerProps> ){
    return(
        <HStack px="8" gap="4" h="100%" placeContent={props.placeContent}>
            {props.children}
        </HStack>
    );
}