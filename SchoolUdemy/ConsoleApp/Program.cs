// See https://aka.ms/new-console-template for more information
using AccesoDatos.Models;
using AccesoDatos.Operaciones;

AlumnoDAO opAlumno = new AlumnoDAO();

//opAlumno.insertar("45456T", "Jose Antonio Ruiz", "C/Paraguay 7", 20, "jaruiz@gmail.com");
Console.WriteLine("#############");
//opAlumno.actualizar(11, "45456T", "Jose Antonio Ruiz", "C/Argentina 52", 25, "jaruiz@gmail.com");
opAlumno.eliminar(11);
var alumnos = opAlumno.seleccionarTodos();

foreach (var alum in alumnos)
{
    Console.WriteLine(alum.Nombre);
}

Console.WriteLine("#############");
var alumno = opAlumno.seleccionar(1);
if (alumno != null)
{
    Console.WriteLine("El alumno con id=1 es: " + alumno.Nombre);
}
else
{
    Console.WriteLine("No existe");
}

Console.WriteLine("#############");

var alumasig = opAlumno.seleccionarAlumnosAsignaturas();
foreach(AlumnoAsignatura alasig in alumasig)
{
    Console.WriteLine(alasig.NombreAlumno + "->" + alasig.NombreAsignatura);
}




