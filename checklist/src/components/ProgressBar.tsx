import { HStack, Progress, CircularProgress, useMediaQuery, CircularProgressLabel } from '@chakra-ui/react';
import { useSelection } from '../hooks/useSelection';


export function ProgressBar(){
    const { totalBosses, selectedBosses } = useSelection();
    const [isMobile] = useMediaQuery("(max-width: 480px)");
    
    const progress = totalBosses > 0 
                        ? (selectedBosses.length / totalBosses) * 100 
                        : 0;

    return(
        <HStack px="8" gap="4" h="100%" placeContent='center'>
        {isMobile ? (
            <CircularProgress 
                value={progress} 
                color='yellow.400'
                size='90%'
                thickness='10px'
                w="100%"
                h="100%"
            >
                <CircularProgressLabel
                    fontSize="1em"
                    fontWeight="bold"
                    color="#ffffff"
                    textAlign="center"
                    lineHeight="120px"
                >
                    {`${Math.round(progress)}%`}
                </CircularProgressLabel>
            </CircularProgress>
        ) : (
            <Progress 
                value={progress} 
                w='80%' 
                colorScheme='yellow' 
                borderRadius='4px' 
                sx={{ 
                    transition: 'width 0.5s ease-in-out',
                    '& > div': { 
                        transition: 'width 0.5s ease-in-out'
                    }
                }}
            />
        )}
    </HStack>
);
}