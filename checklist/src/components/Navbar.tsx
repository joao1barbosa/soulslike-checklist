import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { LoginButton } from "./LoginButton";
import { SelectGame } from "./SelectGame";

export function Navbar(){
    return(
        <Grid
            templateColumns={'3fr 6fr 3fr'}
            minH='7vh'
            bg='#414C58'
        >
            <GridItem 
                alignContent='center'
            >
                <SelectGame/>
            </GridItem>

            <GridItem
                alignContent='center'
            >
                <Center>
                    Progressbar
                </Center>
            </GridItem>

            <GridItem
                alignContent='center'
            >   
                <Box alignContent='center' >
                    <LoginButton/>
                </Box>
            </GridItem>

        </Grid>
    );
}