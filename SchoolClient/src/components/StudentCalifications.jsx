import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {TableContainer,Table,Thead,Tbody,Tr,Th,Td} from '@chakra-ui/react';
import {Input,Box,Badge,Center,Text,VStack,Heading} from '@chakra-ui/react';
import {FaTrash,FaCheck} from 'react-icons/fa';
import { Header } from '../components/Header';
import * as API from '../services/data';


export function StudentCalifications(id){

    //let token= sessionStorage.getItem("token");

    let params = useParams();

    const [calificaciones, setCalificaciones] = useState([]);

    const [calificacion, setCalificacion] = useState([]);

    useEffect(() => {
        API.getCalificaciones(params.matriculaId).then(setCalificaciones);
    });

    let total = 0;
    
        calificaciones?.map(calificacion =>
         (
             total = total + calificacion.nota * (calificacion.porcentaje/100)
         ))
     

    function createCalificacion(){
        let descrField=document.getElementById("descripcion");
        let notaField=document.getElementById("nota");
        let porcentField = document.getElementById("porcentaje");

        let valid = descrField.value.trim() !== "" && notaField.value.trim() !== "" && porcentField.value.trim() != "";

        if(valid){
            API.createCalificacion(calificacion,params.matriculaId).then(result => {
                if (result=="true"){
                    Swal.fire(
                        'Calificación añadida',
                        'Has añadido una calificación de forma satisfactoria',
                        'success'
                    )
                    document.getElementById("descripcion").value='';
                    document.getElementById("nota").value='';
                    document.getElementById("porcentaje").value='';     
                }
                
            })
        }
        else{
            Swal.fire(
                'Error',
                'Introduce valores para todos los campos',
                'error'
              )
        }
        
    }

    function deleteCalificacion(id){
        API.deleteCalificacion(id).then(result => {
            if (result=="true"){ 
                Swal.fire(
                    'Calificación eliminada',
                    'Se ha eliminado la calificación de forma satisfactoria',
                    'success'
                )
            }
            else{
                Swal.fire(
                    'Error',
                    'Error al eliminar la calificacion',
                    'error'
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
        return (

            <>
            
            <Header />
            <Box m='100px'>


                <TableContainer>
                    <Table size='md'>
                        <Thead>
                            <Tr>
                                <Th>Descripción</Th>
                                <Th>Nota</Th>
                                <Th>Ponderación</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                
                                calificaciones?.map(calificacion => 
                                    (
                                    <Tr>
                                        <Td>{calificacion.descripcion}</Td>
                                        <Td>{calificacion.nota}</Td>
                                        <Td>{calificacion.porcentaje}%</Td>
                                        <Td><FaTrash cursor='pointer' onClick={() => deleteCalificacion(calificacion.id)} /></Td>
                                    </Tr>
                                    ))
                        
                                
                            }
                            <Tr>
                                <Td><Input type='text' id='descripcion' placeholder='Descripción' onChange={event => setCalificacion({...calificacion, descripcion:event.target.value})} /></Td>
                                <Td><Input type='text' id='nota' placeholder='Nota' onChange={event => setCalificacion({...calificacion, nota:event.target.value})} /></Td>
                                <Td><Input type='number' id='porcentaje' placeholder='Ponderación' onChange={event => setCalificacion({...calificacion, porcentaje:event.target.value})} /></Td>
                                <Td><FaCheck cursor='pointer' onClick={() => createCalificacion()} /></Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                            


            
                {<Center><Box mt='10px' fontSize='lg'>Nota total: <Badge fontSize='lg' variant='outline' colorScheme='green'>{total}</Badge></Box></Center>} 
                
            </Box>
            </>
        )
    //}

}
