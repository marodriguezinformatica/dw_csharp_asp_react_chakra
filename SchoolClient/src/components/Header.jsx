import logo from '../img/school.png';
import {Link} from 'react-router-dom';
import {Flex,Image,HStack,Box} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

export function Header(){

    const navigate = useNavigate();

    function cerrarSesion(){
        sessionStorage.removeItem('token');
        navigate('/');
    }

        return(
            <>
                <Flex
                w='100%'
                h='70px'
                p='6px'
                align='center'
                justify='space-between'
                bgColor='#2B6CB0'
                color='white'>

                
                
                <HStack as="nav" spacing="10">
                    <Image src={logo} h='50px' ml='6px' />
                    <Link to={'/dashboard'}><Box _hover={{color: "gray.300",}}>Listado</Box></Link>
                    <Link to={'/student'}><Box _hover={{color: "gray.300",}}>Nuevo</Box></Link>
                </HStack>

                <HStack>
                    <Box mr='20px' cursor='pointer' _hover={{color: "gray.300",}} onClick={() => cerrarSesion()}>Cerrar sesion</Box>
                </HStack>
                
                    
                
            </Flex>

                
            </>
        )

}