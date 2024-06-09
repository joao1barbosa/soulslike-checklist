import { Button, Icon, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useSession } from "../hooks/useSession";
import { useSignOut } from "../hooks/useSignOut";

export function LogButton(){
const navigate = useNavigate();
const { isLogged } = useSession();
const { signOut } = useSignOut();

    return(
        <Tooltip 
        hasArrow
        fontSize='md'
        bg='#81878E'
        label={
            isLogged ? 'Logout' : 'Login'
        }>
        <Button 
            h='6vh'
            w='6vh'
            onClick={ isLogged ? signOut : () => navigate('/login') }
            background='#81878E'
        >
            <Icon 
                as={
                    isLogged ? FiLogOut : FiLogIn
                } 
                boxSize={6} 
                color='#fff'
            />        
        </Button>
        </Tooltip>
    );
}