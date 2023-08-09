import { Header } from '../components/Header';
import { StudentList } from '../components/StudentList';
import {Box,Heading,Text,VStack} from '@chakra-ui/react';

export function Dashboard(){

    
    //let usuario= sessionStorage.getItem("usuario");
    
    /*if (token == null){

        return (
            <VStack spacing={10} mt='5%'>
                <Box>
                    <Heading size='2xl'>Acceso no autorizado</Heading>
                </Box>
                <Box>
                    <Text fontSize='xl'>Estás intentando acceder a una página que no estás autorizada a consultar.</Text>
                </Box>
                <Box>
                    <Text fontSize='xl'>Inicie sesión en el sitio web o póngase en contacto con el administrador</Text>
                </Box>
            </VStack>
        )
    }
    else{*/
        return (
            
            <>
                <Header />
                <StudentList />
           </>

        )
    //}
        
    

}