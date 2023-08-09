using AccesoDatos.Models;
using AccesoDatos.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private AlumnoDAO alumnoDAO = new AlumnoDAO();

        [HttpGet("alumnosProfesor")]
        public List<AlumnoProfesor> alumnosProfesor(string usuario)
        {
            return alumnoDAO.seleccionarAlumnosProfesor(usuario);
        }

        [HttpGet("alumno")]
        public Alumno getAlumno(int id)
        {
            return alumnoDAO.seleccionar(id);
        }

        [HttpPut("alumno")]
        public bool actualizarAlumno([FromBody]Alumno alumno)
        {
            return alumnoDAO.actualizar(alumno.Id, alumno.Dni, alumno.Nombre, alumno.Direccion, alumno.Edad, alumno.Email);
        }

        [HttpPost("alumno")]
        public bool insertarMatricular([FromBody]Alumno alumno, int id_asig)
        {
            return alumnoDAO.insertarYMatricular(alumno.Dni,alumno.Nombre,alumno.Direccion,alumno.Edad,alumno.Email, id_asig);
        }

        [HttpDelete("alumno")]
        public bool eliminarAlumno(int id)
        {
            return alumnoDAO.eliminarAlumno(id);
        }

        
    }

}
