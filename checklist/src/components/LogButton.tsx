import { Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export function LogButton(){
const navigate = useNavigate();

    return(
        <Button 
            onClick={() => navigate('/login')}
            background='#6F5542'
        >
            <Icon as={FiLogIn} boxSize={6} color='#fff'/>        
        </Button>
    );
}