import { useResponsiveStyles } from '../hooks/useResponsiveStyles';
import { useNavigate } from 'react-router-dom';
import { Image, HStack, Text } from '@chakra-ui/react';
import Select from 'react-select';

import dsIcon from '../assets/demonssouls-icon.png'
import ds1Icon from '../assets/darksouls-icon.png';
import ds2Icon from '../assets/darksouls2-icon.png';
import ds3Icon from '../assets/darksouls3-icon.png';
import bbIcon from '../assets/bloodborne-icon.png';
import skIcon from '../assets/sekiro-icon.png';
import erIcon from '../assets/eldenring-icon.png';

export function SelectGame() {
    const navigate = useNavigate();

    const games = [
        { value: 'demonssouls', label: `Demon's Souls`, image: dsIcon },
        { value: '', label: `Dark Souls`, image: ds1Icon },
        { value: 'darksouls2', label: `Dark Souls 2`, image: ds2Icon },
        { value: 'bloodborne', label: `Bloodborne`, image: bbIcon },
        { value: 'darksouls3', label: `Dark Souls 3`, image: ds3Icon },
        { value: 'sekiro', label: `Sekiro`, image: skIcon },
        { value: 'eldenring', label: `Elden Ring`, image: erIcon }
    ];

    const styles = useResponsiveStyles();

    return(
        <Select 
            options={games}
            defaultValue={games[1]}
            styles={styles}
            onChange={ (choice) =>{
                navigate(
                    ('/' + choice?.value),
                    { replace: true }
                );
            } }
            formatOptionLabel={ game => (
                <HStack 
                    spacing='10px'
                    placeContent={['center', 'start']}
                >
                    <Image 
                        src={game.image} 
                        boxSize={['6vh', '5vh']}
                        mx={['0px', '5px']}
                    />
                    <Text size='xl' display={['none', 'block']} >
                        {game.label}
                    </Text>
                </HStack>
            )}
        />
    );
}