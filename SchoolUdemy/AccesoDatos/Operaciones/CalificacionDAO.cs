using AccesoDatos.Context;
using AccesoDatos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccesoDatos.Operaciones
{
    public class CalificacionDAO
    {
        ProyectoContext contexto = new ProyectoContext();

        public List<Calificacion> seleccionar(int id)
        {
            var calificaciones = contexto.Calificacions.Where(c => c.MatriculaId == id).ToList();

            return calificaciones;
        }

        public bool agregarCalificacion(Calificacion calif)
        {
            try
            {
                contexto.Calificacions.Add(calif);
                contexto.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool eliminarCalificacion(int id)
        {
            try
            {
                var calificacion = contexto.Calificacions.Where(c => c.Id == id).FirstOrDefault();

                if (calificacion != null)
                {
                    contexto.Calificacions.Remove(calificacion);
                    contexto.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch(Exception ex)
            {
                return false;
            }
        }
    }
}
