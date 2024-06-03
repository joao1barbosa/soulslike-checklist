import { Grid, GridItem } from "@chakra-ui/react";
import { LogButton } from "../components/LogButton";
import { SelectGame } from "../components/SelectGame";
import { Outlet } from "react-router-dom";
import { ProgressBar } from "../components/ProgressBar";
import { Placer } from "../components/Placer";
import { useEffect, useState } from "react";
import { supaClient } from '../services/supabase';

export function Root(){
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

    const getSession = async () => {
        const {
            data: {
                session
            }
        } = await supaClient.auth.getSession();

        setIsLoggedIn(!(!session));

        console.log(isLoggedIn);
    }
    
    useEffect(() => {
      getSession();
    });


    return(
        <Grid
            templateAreas={`
                'select progress-bar button'
                'outlet outlet outlet'
            `}
            gridTemplateColumns={'2fr 3fr 2fr'}
            gridTemplateRows={['10vh 1fr' ,'7vh 1fr']}
            gap="1"
            minH="100vh"
            bg='#414C58'
        >
            <GridItem area="select">
                <Placer placeContent="start">
                    <SelectGame/>  
                </Placer>
            </GridItem>
            <GridItem area="progress-bar">
                <Placer placeContent="center">
                    <ProgressBar/>
                </Placer>
            </GridItem>
            <GridItem area="button">
                <Placer placeContent="end">
                    <LogButton/>
                </Placer>
            </GridItem>
            <GridItem area='outlet' bg='#161615'>
                <Outlet />
            </GridItem>
        </Grid>
    );
}