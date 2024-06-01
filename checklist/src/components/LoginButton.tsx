import { Image, Link } from "@chakra-ui/react";
import loginLogo from '../assets/login-icon.svg';

export function LoginButton(){
    return(
        <Link href='/login' bg='blue' w='50px'>
            <Image 
                src={loginLogo}
                maxH='40px'
            /> 
        </Link>
    );
}