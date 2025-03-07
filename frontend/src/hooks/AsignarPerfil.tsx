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
      const formData = new FormData();
      formData.append("id", user.id); // Enviar el ID del usuario
      formData.append("profile_picture", nuevaFoto); // Nombre del campo debe coincidir con el backend
      const response = await api.put("/users/profile_picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUser((prevUser) =>
        prevUser ? { ...prevUser, photoUrl: response.data.url_profile_picture } : prevUser
      );
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
