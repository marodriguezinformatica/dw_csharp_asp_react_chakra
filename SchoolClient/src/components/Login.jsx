import { useState, useEffect } from 'react';
import {FormControl,FormLabel, Input, Center,Box,Heading,Image,Flex} from '@chakra-ui/react';
import imagen from '../img/login.png';
import { useNavigate } from "react-router-dom";
import * as API from '../services/data';

export function Login(){

    const [teacher, setTeacher] = useState({usuario:'',password:''});

    const navigate = useNavigate();

   

    async function handleSubmit(e){
        e.preventDefault();
        const response = await API.login(teacher.usuario,teacher.password);
        console.log(response);
        if (response.length != 0){
            sessionStorage.setItem("usuario", response);
            navigate('/dashboard');
        }
        else{
            Swal.fire(
                'Error',
                'Error al realizar el login',
                'error'
              )
        }
          
        
    }

    return(
        <>
            <Flex direction='column'>
            <Center>
            <Image mt='3%' src={imagen} width='150px' height='150px' />
            </Center>
            <Center>
            <Box m='2%' boxShadow="xl" borderRadius='md' width='40%' id='caja'>
            <Box textAlign="center">
                <Heading>Iniciar sesión</Heading>
            </Box>
            <Box p='20px'>
                <form id='formulario' onSubmit={handleSubmit}>
                    <FormControl mt='3'>
                        <FormLabel>Usuario</FormLabel>
                        <Input required type='text' id='usuario' onChange={event => setTeacher({...teacher, usuario:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3'>
                        <FormLabel>Password</FormLabel>
                        <Input required type='password' id='pass' onChange={event => setTeacher({...teacher, password:event.target.value})} />
                    </FormControl>     
                    
                    <FormControl mt='3'>
                    
                        <Input type='submit' mt='3' id='enviar' borderColor= 'teal'  value='Login' />
                      
                    </FormControl>  
                    
                </form>
                </Box>
                </Box>
        </Center>
        </Flex>
        </>
    )


}