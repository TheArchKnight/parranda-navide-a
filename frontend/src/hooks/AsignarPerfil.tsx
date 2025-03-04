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

      console.log("Subiendo archivo:", nuevaFoto);

      const formData = new FormData();
      formData.append("id", String(user.id)); // Enviar el ID del usuario
      formData.append("file", nuevaFoto); // Archivo de imagen

      const response = await api.put("/users/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Respuesta del servidor:", response.data);
      setUser(response.data);
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
