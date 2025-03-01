import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export const usePerfil = () => {
  const { user, setUser } = useAuth(); 
  const [loading, setLoading] = useState(false);

  const obtenerDatosUsuario = () => user;

  const actualizarNombre = async (nuevoNombre: string) => {
    setLoading(true);
    try {
      if (!user) return; 
      /*
      {
        "id": obtenerDatosUsuario()?.id
        "name": nuevoNombre
      }
      */

     /*
      El backend debe devolver un JSON con la estructura:
      {
        "id": "id",
        "name": "Nuevo Nombre",
        "email": "email",
        "photoUrl": "ruta-de-la-imagen.com/foto.jpg"
      }
      */

      /*
      const updatedUser = await response.json(); 
      setUser(updatedUser);
      */

    } catch (error) {
      console.error("Error al actualizar el nombre:", error);
    } finally {
      setLoading(false);
    }
  };

  const actualizarPassword = async (nuevaPassword: string) => {
    setLoading(true);
    try {
      if (!user) return;

      /*
      {
        "id": obtenerDatosUsuario()?.id
        "password": nuevaPassword
      }
      */

      /*
      El backend debe devolver un JSON con la estructura:
      {
        "message": "Contraseña actualizada correctamente"
      }
      */

      /*
      const updatedUser = await response.json(); 
      setUser(updatedUser);
      */

    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
    } finally {
      setLoading(false);
    }
  };

  const actualizarFoto = async (nuevaFoto: File) => {
    setLoading(true);
    try {
      if (!user) return;
      console.log("file:");
      console.log(nuevaFoto);
      /*
      {
        "id": obtenerDatosUsuario()?.id
        "profilePicture": nuevaFoto
      }
      */

      /*
      El backend debe devolver un JSON con la estructura:
      {
        "id": "id",
        "name": "nombre",
        "email": "email",
        "photoUrl": "ruta-de-la-imagen.com/foto.jpg"
      }
      */

      /*
      const updatedUser = await response.json(); 
      setUser(updatedUser);
      */

    } catch (error) {
      console.error("Error al actualizar la foto:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    obtenerDatosUsuario,
    actualizarNombre,
    actualizarPassword,
    actualizarFoto,
    loading,
  };
};
