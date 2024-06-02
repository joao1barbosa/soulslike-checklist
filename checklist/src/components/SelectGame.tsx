/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, HStack, Text } from '@chakra-ui/react';
import Select from 'react-select';
import dsIcon from '../assets/demonssouls-icon.png'
import ds1Icon from '../assets/darksouls-icon.png';
import ds2Icon from '../assets/darksouls2-icon.png';
import ds3Icon from '../assets/darksouls3-icon.png';
import bbIcon from '../assets/bloodborne-icon.png';
import skIcon from '../assets/sekiro-icon.png';
import erIcon from '../assets/eldenring-icon.png';

export function SelectGame(){
    const games = [
        { value: 'demonsSouls', label: `Demon's Souls`, image: dsIcon },
        { value: 'darkSouls', label: `Dark Souls`, image: ds1Icon },
        { value: 'darkSouls2', label: `Dark Souls 2`, image: ds2Icon },
        { value: 'bloodborne', label: `Bloodborne`, image: bbIcon },
        { value: 'darkSouls3', label: `Dark Souls 3`, image: ds3Icon },
        { value: 'sekiro', label: `Sekiro`, image: skIcon },
        { value: 'eldenRing', label: `Elden Ring`, image: erIcon }
    ];

    const styles = {
        control: (provided: any) => ({
            ...provided,
            background: '#81878E',
            border: 'none'
        }),
        menu: (provided: any) => ({
            ...provided,
            background: '#81878E',
        }),
        indicatorSeparator: (provided: any) => ({
            ...provided,
            background: 'transparent'
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            background: state.isSelected ? '#69503d' : '#81878E',
            color: state.isSelected ? '#fff' : '#000',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Arial, sans-serif',
            '&:hover': {
                background: '#666',
                color: '#fff',
            },
        }),
        input: (provided: any) => ({
            ...provided,
            caretColor: "transparent"
        })
    }

    return(
        <Select 
            options={games}
            defaultValue={games[1]}
            styles={styles}
            formatOptionLabel={ game =>(
                <HStack spacing='10px' w='180px'>
                    <Image src={game.image} boxSize='45px' mx='5px'/>
                    <Text size='xl'>
                        {game.label}
                    </Text>
                </HStack>
            )}
        />
    );
}