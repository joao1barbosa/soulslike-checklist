/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Wrap } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { supaClient } from "../services/supabase";
import { useSelection } from "../hooks/useSelection";
import { Boss } from "../types/boss";
import BossCard  from "./BossCard";  

interface Props{
    game: string
}

export function Board({ game }: Props){
    const [chosenGame, setChosenGame] = useState<Boss[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { setTotalBosses, selectedBosses, toggleBossSelection } = useSelection();

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

                setTotalBosses(data.length);
                setChosenGame(data);

            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getBosses(game);
    }, [game, setTotalBosses]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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

    return (
        <Wrap
            spacing='24px'
            justify='center'
            align='center'
            h='100%'
            w='100%'
        >
            {chosenGame.map((boss, index) => (
                <motion.div
                    key={boss.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    <BossCard 
                        key={boss.id} 
                        boss={boss}
                        selected={selectedBosses.includes(boss.id)}
                        onSelect={()=> toggleBossSelection(boss.id)}
                    />
                </motion.div>
            ))}
        </Wrap>
    );
}