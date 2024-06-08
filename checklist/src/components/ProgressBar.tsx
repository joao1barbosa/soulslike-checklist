import { HStack, Progress } from '@chakra-ui/react';
import { useSelection } from '../hooks/useSelection';


export function ProgressBar(){
    const { totalBosses, selectedBosses } = useSelection();

    const progress = totalBosses > 0 
                        ? (selectedBosses.length / totalBosses) * 100 
                        : 0;

    return(
        <HStack px="8" gap="4" h="100%" placeContent='center'>
                <Progress value={progress} w='80%' colorScheme='yellow' borderRadius='4px'/>
        </HStack>
    );
}