import { Button, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export function LogButton(){
const navigate = useNavigate();

    return(
        <Button 
            h='6vh'
            w='6vh'
            onClick={() => navigate('/login')}
            background='#81878E'
        >
            <Icon as={FiLogIn} boxSize={6} color='#fff'/>        
        </Button>
    );
}