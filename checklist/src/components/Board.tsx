/* eslint-disable @typescript-eslint/no-explicit-any */
import { Wrap } from "@chakra-ui/react";
import { BossCard } from "./BossCard";
import { supaClient } from "../services/supabase";
import { useEffect, useState } from "react";
import { Boss } from "../types/boss";

interface Props{
    game: string
}

export function Board({ game }: Props){
    const [chosenGames, setChosenGames] = useState<Boss[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getBosses = async (value: string) => {
            setLoading(true);
            setError(null);
            try {
                const { data, error } = await supaClient
                    .from('boss')
                    .select('*')
                    .eq('game', value);

                if (error) throw error;

                setChosenGames(data);

            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getBosses(game);
    }, [game]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <Wrap
            spacing='24px'
            justify='center'
            align='center'
            h='100%'
            w='100%'
        >
            {chosenGames.map(boss => (
                <BossCard key={boss.id} boss={boss}/>
            ))}
        </Wrap>
    );
}