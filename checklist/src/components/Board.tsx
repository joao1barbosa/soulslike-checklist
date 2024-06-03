import { Wrap } from "@chakra-ui/react";
import { BossCard } from "./BossCard";

interface Props{
    game?: string
}

export function Board({ game }: Props){
    return (
        <Wrap
            spacing='24px'
            justify='center'
            align='center'
            h='100%'
            w='100%'
        >
            <BossCard>

            </BossCard>
        </Wrap>
    );
}