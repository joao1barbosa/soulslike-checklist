/* eslint-disable react-refresh/only-export-components */
import { 
    Card, CardFooter, Text, Divider, Center, WrapItem, VStack, Box
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { memo } from 'react';
import { Boss } from '../types/boss';
import { DlcBadge } from './Badges/DlcBadge';
import { OptionalBadge } from './Badges/OptionalBadge';

interface Props{
    boss: Boss;
    selected: boolean;
    onSelect: () => void;
    index: number;
}

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1
        }
    })
};

function BossCard({ boss, selected, onSelect, index }: Props){
    return (
        <motion.div
            custom={index}
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <WrapItem onClick={onSelect} cursor='pointer'>
                <Card
                    h='30vh'
                    w='25vh'
                    m='15px'
                    background={selected ? '#4B3621' : '#6F5542'}
                    border={selected ? '1px solid #9c9c9c' : '0px'}
                    opacity={0.8}
                >
                    <VStack
                        bgImg={boss.picture}
                        bgSize='contain'
                        bgRepeat='no-repeat'
                        border='1px solid #6F5542'
                        borderRadius='0.375rem 0.375rem 0px 0px'
                        placeContent='start'
                        h='25vh'
                        w='100%'
                        position='relative'
                    >   
                            <Box
                                position="absolute"
                                top="0"
                                right="0"
                                m="4px"
                                display="flex"
                                flexDirection="column"
                                gap="2px"
                                alignItems='end'
                            >
                                {boss.dlc &&  <DlcBadge/>}
                                {boss.optional && <OptionalBadge/>}
                            </Box>
                    </VStack>
                    <Divider color='#c5c5c5'/> 
                    <CardFooter h='3vh' m='1.5vh'>
                        <Center 
                            justifyContent='center'
                            w='100%'
                        >
                            <Text 
                                as='b' 
                                color='#ffffff'
                                textAlign="center"
                            >{boss.name}</Text>
                        </Center>
                    </CardFooter>
                </Card>
            </WrapItem>
        </motion.div>
    );
}

export default memo(BossCard);