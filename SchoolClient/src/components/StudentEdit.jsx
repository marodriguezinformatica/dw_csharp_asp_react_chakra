import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {FormControl,FormLabel, Input, Center,Box,Heading,VStack,Text} from '@chakra-ui/react';
import { Header } from '../components/Header';  

import * as API from '../services/data';

export function StudentEdit(id){

    //let token= sessionStorage.getItem("token");

    let params = useParams();

    const [student, setStudent] = useState([]);
   

    useEffect(() => {
        API.getStudentDetails(params.studentId).then(setStudent);
    },[]);


    

    function handleSubmit(e){
        e.preventDefault();
        API.editStudent(student).then(result => {
            if (result=="true"){
                Swal.fire(
                    'Alumno modificado',
                    'Se han modificado los datos del alumno de forma satisfactoria',
                    'success'
                  )
            }
           
               
           
        })
    }

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


        return(
        
            <>
            <Header />
            <Center>
                <Box  m='40px' boxShadow="xl" borderRadius='md' width='40%' id='caja'>
                    <Box textAlign="center">
                        <Heading>Editar alumno {student.dni}</Heading>
                    </Box>
                    <Box p='20px'>
                        <form id='formulario' onSubmit={handleSubmit}>
                        <FormControl mt='3'>
                            <FormLabel>DNI</FormLabel>
                            <Input type='text' id='dni' required disabled value={student.dni} />
                        </FormControl>
                        <FormControl mt='3'>
                            <FormLabel>Nombre</FormLabel>
                            <Input type='text' id='nombre' required value={student.nombre} onChange={event => setStudent({...student, nombre:event.target.value})} />
                        </FormControl>
                        <FormControl mt='3'>
                            <FormLabel>Dirección</FormLabel>
                            <Input type='text' id='direccion' required value={student.direccion} onChange={event => setStudent({...student, direccion:event.target.value})} />
                        </FormControl>   
                        <FormControl mt='3'>
                            <FormLabel>Edad</FormLabel>
                            <Input type='number' id='edad' required value={student.edad} onChange={event => setStudent({...student, edad:event.target.value})} />
                        </FormControl>    
                        <FormControl mt='3'>
                            <FormLabel>Email</FormLabel>
                            <Input type='text' id='email' required value={student.email} onChange={event => setStudent({...student, email:event.target.value})} />
                        </FormControl>
                        <FormControl mt='3'>
                            <Input type='submit' mt='3' required id='editar' borderColor= 'teal'  value='Editar' />
                        </FormControl>    
                        </form>
                        </Box>
                        </Box>
                </Center>
                </>
                    
        )
    //}
}