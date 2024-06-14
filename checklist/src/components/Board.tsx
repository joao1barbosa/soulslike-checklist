/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { Wrap } from "@chakra-ui/react";
import { supaClient } from "../services/supabase";
import { useSelection } from "../hooks/useSelection";
import { useSession } from "../hooks/useSession";
import { Boss } from "../types/boss";
import { WarningModal } from "./WarningModal";  
import BossCard  from "./BossCard";

interface Props{
    game: string
}

export function Board({ game }: Props){
    const [bosses, setBosses] = useState<Boss[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showWarning, setShowWarning] = useState(false);
    const [warningShown, setWarningShown] = useState<boolean>(false);

    const { setTotalBosses, selectedBosses, toggleBossSelection } = useSelection();
    const { isLogged } = useSession();

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
                setBosses(data);

            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getBosses(game);
    }, [game, setTotalBosses]);

    const handleBossSelection = useCallback((bossId: number) => {
        if (!isLogged && !warningShown) {
            setShowWarning(true);
            setWarningShown(true);
        }else{
            toggleBossSelection(bossId);
        }
    },[isLogged, warningShown, toggleBossSelection]);

    const closeWarningModal = () => setShowWarning(false);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <WarningModal isOpen={showWarning} onClose={closeWarningModal}/>
            <Wrap
                spacing='24px'
                justify='center'
                align='center'
                h='100%'
                w='100%'
            >
                {bosses.map((boss, index) => (
                    <BossCard 
                        key={boss.id} 
                        boss={boss}
                        selected={selectedBosses.includes(boss.id)}
                        onSelect={()=> handleBossSelection(boss.id)}
                        index={index}
                    />
                ))}
            </Wrap>
        </>
    );
}