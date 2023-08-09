import { useState, useEffect } from 'react';
import {FormControl,FormLabel, Input, Center,Box,Heading,Select} from '@chakra-ui/react';
import { Header } from '../components/Header';
import * as API from '../services/data';

export function StudentNew(){

    //const token = sessionStorage.getItem("token");

    const [student, setStudent] = useState({dni:'',nombre:'',direccion:'',edad:'',email:'',asignatura:''});


    function handleSubmit(e){
        e.preventDefault();
        API.createStudent(student).then(result => {
            if (result=="true"){
                Swal.fire(
                    'Alumno creado',
                    'Se ha creado el alumno de forma satisfactoria',
                    'success'
                  )
                document.getElementById("formulario").reset();
            }
            else{
                Swal.fire(
                    'Error',
                    'No se ha podido crear el alumno',
                    'error'
                  )
                document.getElementById("formulario").reset();
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
                <Box m='40px' boxShadow="xl" borderRadius='md' width='40%' id='caja'>
                <Box textAlign="center">
                    <Heading>Nuevo alumno</Heading>
                </Box>
                <Box p='20px'>
                    <form id='formulario' onSubmit={handleSubmit}>
                    <FormControl mt='3'>
                        <FormLabel>DNI</FormLabel>
                        <Input type='text' id='dni' required onChange={event => setStudent({...student, dni:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3'>
                        <FormLabel>Nombre</FormLabel>
                        <Input type='text' id='nombre' required onChange={event => setStudent({...student, nombre:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3'>
                        <FormLabel>Dirección</FormLabel>
                        <Input type='text' id='direccion' required onChange={event => setStudent({...student, direccion:event.target.value})} />
                    </FormControl>   
                    <FormControl mt='3'>
                        <FormLabel>Edad</FormLabel>
                        <Input type='number' id='edad' required onChange={event => setStudent({...student, edad:event.target.value})} />
                    </FormControl>    
                    <FormControl mt='3'>
                        <FormLabel>Email</FormLabel>
                        <Input type='text' id='email' required onChange={event => setStudent({...student, email:event.target.value})} />
                    </FormControl>
                    <FormControl mt='3'>
                        <FormLabel>Asignatura</FormLabel>
                        {/*<Input type='text' id='asignatura' required onChange={event => setStudent({...student, asignatura:event.target.value})} />*/}
                        <Select id='asignatura' onChange={event => setStudent({...student, asignatura:event.target.value})}>
                            <option value='1'>Matemáticas</option>
                            <option value='2'>Informática</option>
                            <option value='3'>Inglés</option>
                            <option value='4'>Literatura</option>
                        </Select>
                    </FormControl>   
                    <FormControl mt='3'>
                        <Input type='submit' mt='3' id='editar' borderColor= 'teal'  value='Nuevo' />
                    </FormControl>  
                    </form>
                    </Box>
                    </Box>
            </Center>
            
            </>
        )
    //}

}