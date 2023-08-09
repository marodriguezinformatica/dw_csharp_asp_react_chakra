import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {TableContainer,Table,Thead,Tbody,Tr,Th,Td} from '@chakra-ui/react';
import {Box} from '@chakra-ui/react';
import {FaEdit,FaStickyNote,FaTrash} from 'react-icons/fa';
import * as API from '../services/data';

export function StudentList(){

    //let token= sessionStorage.getItem("token");
    let usuario = sessionStorage.getItem("usuario");

    const [students, setStudents] = useState([]);


        useEffect(() => {
            API.getStudents(usuario).then(setStudents);
        })
    

    function deleteStudent(id){
        
        API.deleteStudent(id).then(result => {
           
            if (result == "true"){
                Swal.fire(
                    'Estudiante eliminado',
                    'Has eliminado el alumno de forma satisfactoria',
                    'success'
                  )   
            }
            else{
                Swal.fire(
                    'Error',
                    'No se ha podido eliminar el alumno',
                    'error'
                  )  
            }
               
            
        })
    }



        return (

            <Box m='50px'>
                <TableContainer>
                    <Table size='md' variant='striped' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th>ID</Th>
                                <Th>DNI</Th>
                                <Th>Nombre</Th>
                                <Th>Dirección</Th>
                                <Th>Edad</Th>
                                <Th>Email</Th>
                                <Th>Asignatura</Th>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                        {
                            students?.map(student => (
                                <Tr key={student.id}>
                                    <Td>{student.id}</Td>
                                    <Td>{student.dni}</Td>
                                    <Td>{student.nombre}</Td>
                                    <Td>{student.direccion}</Td>
                                    <Td>{student.edad}</Td>
                                    <Td>{student.email}</Td>
                                    <Td>{student.asignatura}</Td>
                                    <Td><Link to={'/student/'+student.id}><FaEdit /></Link></Td>
                                    <Td><Link to={'/student/califications/'+student.matricula}><FaStickyNote /></Link></Td>
                                    <Td><FaTrash onClick={() => deleteStudent(student.id)} cursor='pointer' /></Td>
                                </Tr>
                        ))     
                    }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        )

    
}