const URL = 'https://localhost:7106/api/';


export function login(usuario,pass){

    let datos = {usuario:usuario,pass:pass};
    
    return fetch(URL+'autenticacion',{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    .then(data => data.text())
    
    //response.text().then(data => {       console.log(text);     });
            

}

export function getStudents(usuario){


        return fetch(URL+'alumnosProfesor?usuario='+usuario,{
            headers:{
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer '+ token
            }
        })
        .then(data => data.json());
    
}

export function getStudentDetails(id){

 
        return fetch(URL+'Alumno?id='+id,{
            headers:{
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer '+ token
            }
        })
        .then(data => data.json());
    

}

export function deleteStudent(id){
  
        return fetch(URL+'Alumno?id='+id,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer '+ token
            }
        })
        //.then(data => data.json());
        .then(data => data.text());
    
    
}

export function createStudent(student){

    let data = {dni:student.dni,nombre:student.nombre,direccion:student.direccion,edad:student.edad,email:student.email};

 
        return fetch(URL+'Alumno?id_asig='+student.asignatura,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
                //'Authorization': 'Bearer '+ token
            }
        })
        //.then(data => data.json());
        .then(data => data.text());
}

export function editStudent(student){

    let data = {id:student.id,dni:student.dni,nombre:student.nombre,direccion:student.direccion,edad:student.edad,email:student.email};

  
        return fetch(URL+'Alumno',{
            method: 'PUT',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer '+ token
            }
        })
        //.then(data => data.json());
        .then(data => data.text())
}




export function getCalificaciones(id){
   
        return fetch(URL+'calificaciones?idMatricula='+id,{
            headers:{
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer '+ token
            }
        })
        .then(data => data.json());
}

export function createCalificacion(calificacion,id){

    let data = {descripcion:calificacion.descripcion,nota:calificacion.nota,porcentaje:calificacion.porcentaje,matriculaId:id};

    
        return fetch(URL+'calificacion',{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
                //'Authorization': 'Bearer '+ token
            }
        })
        //.then(data => data.json());
        .then(data => data.text())
}


export function deleteCalificacion(id){
   
        return fetch(URL+'Calificacion?id='+id,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                //'Authorization': 'Bearer '+ token
            }
        })
        //.then(data => data.json());
        .then(data => data.text())
}