import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { LogButton } from "../components/LogButton";
import { SelectGame } from "../components/SelectGame";
import { Outlet } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";

export function Root(){
    return(
        <Grid
            templateAreas={`
                'select progress-bar button'
                'outlet outlet outlet'
            `}
            gridTemplateColumns={'1fr 3fr 1fr'}
            gridTemplateRows={'7vh 1fr'}
            gap="1"
            minH="100vh"
            bg='#414C58'
        >
            <GridItem area="select">
                <HStack px="8" gap="4" h="100%" placeContent="center">
                    <SelectGame/>  
                </HStack>
            </GridItem>
            <GridItem area="progress-bar">
                <HStack px="8" gap="4" h="100%" placeContent="center">
                    <ProgressBar/>
                </HStack>
            </GridItem>
            <GridItem area="button">
                <HStack px="8" gap="4" h="100%" placeContent="end">
                    <LogButton/>
                </HStack>
            </GridItem>
            <GridItem area='outlet' bg='#161615'>
                <Outlet />
            </GridItem>
        </Grid>
    );
}