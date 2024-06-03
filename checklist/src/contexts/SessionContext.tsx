import { useEffect } from "react";
import { PropsWithChildren, createContext, useState, Dispatch, SetStateAction } from "react";
import { supaClient } from "../services/supabase";

interface SessionContextType {
    isLogged: boolean;
    setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: SessionContextType = {
    isLogged: false,
    setIsLogged: () => {},
};

export const SessionContext = createContext<SessionContextType>(defaultValue);

export function SessionProvider({ children }: PropsWithChildren) {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const {
          data: { subscription },
        } = supaClient.auth.onAuthStateChange((_event, session) => {
            session ? setIsLogged(true) : setIsLogged(false);
        });
    
        return () => subscription.unsubscribe();
    },[]);

    return (
        <SessionContext.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </SessionContext.Provider>
    );
}
