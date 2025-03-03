import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import api from "../services/api";

export const usePerfil = () => {
  const { user, setUser } = useAuth(); 
  const [loading, setLoading] = useState(false);

  const obtenerDatosUsuario = () => user;

  const actualizarNombre = async (nuevoNombre: string) => {
    setLoading(true);
    try {
      if (!user) return;

      const response = await api.put("/users/", {
        id: user.id,
        name: nuevoNombre,
      });

      setUser(response.data);
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

      await api.post("/users/password", {
        id: user.id,
        new_password: nuevaPassword,
      });

      alert("Contraseña actualizada correctamente");
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
