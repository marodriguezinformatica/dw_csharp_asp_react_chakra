using AccesoDatos.Models;
using AccesoDatos.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class CalificacionController : ControllerBase
    {
        private CalificacionDAO calificacionDAO = new CalificacionDAO();

        [HttpGet("calificaciones")]
        public List<Calificacion> get(int idMatricula)
        {
            return calificacionDAO.seleccionar(idMatricula);
        }

        [HttpPost("calificacion")]
        public bool agregar([FromBody] Calificacion calif)
        {
            return calificacionDAO.agregarCalificacion(calif);
        }

        [HttpDelete("calificacion")]
        public bool eliminar(int id)
        {
            return calificacionDAO.eliminarCalificacion(id);
        }
    }
}
