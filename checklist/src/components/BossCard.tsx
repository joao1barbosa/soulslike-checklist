import { Card, CardBody, CardFooter, Text, Divider, Center, WrapItem } from '@chakra-ui/react'

interface Props{
    boss?: {
        name: string,
        picture: string,
        dlc: boolean,
        optional: boolean
    }
}

export function BossCard({ boss }: Props){
    return (
        <WrapItem>
            <Card
                h='25vh'
                w='25vh'
                m='15px'
                background='#6F5542'
                opacity={0.8}
            >
                <CardBody>
                    <Text>{boss?.picture}</Text>
                    <Text>{boss?.dlc}</Text>
                    <Text>{boss?.optional}</Text>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Center 
                        justifyContent='center'
                        w='100%'
                    >
                        <Text>{boss?.name}</Text>
                    </Center>
                </CardFooter>
            </Card>
        </WrapItem>
    );
}