import { useResponsiveStyles } from '../hooks/useResponsiveStyles';
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
    const games = [
        { value: 'demonsSouls', label: `Demon's Souls`, image: dsIcon },
        { value: 'darkSouls', label: `Dark Souls`, image: ds1Icon },
        { value: 'darkSouls2', label: `Dark Souls 2`, image: ds2Icon },
        { value: 'bloodborne', label: `Bloodborne`, image: bbIcon },
        { value: 'darkSouls3', label: `Dark Souls 3`, image: ds3Icon },
        { value: 'sekiro', label: `Sekiro`, image: skIcon },
        { value: 'eldenRing', label: `Elden Ring`, image: erIcon }
    ];

    const styles = useResponsiveStyles();

    return(
        <Select 
            options={games}
            defaultValue={games[1]}
            styles={styles}
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