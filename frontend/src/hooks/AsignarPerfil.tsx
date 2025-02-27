import { useAuth } from "../contexts/AuthContext";
import { authService } from "../services/authService";
import { useState } from "react";

export const usePerfil = () => {
  const { user, setUser } = useAuth(); 
  const [loading, setLoading] = useState(false);
  const defaultPhoto = "/assets/images/perfil-defecto.png";

  const obtenerDatosUsuario = () => user;

  const actualizarNombre = async (nuevoNombre: string) => {
    setLoading(true);
    try {
      if (!user) return; // 🔥 Se usa `user` para evitar error
      // Llamar a `authService.updateProfile(user.id, { name: nuevoNombre })`
      // Actualizar el estado del usuario con `setUser()`
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
      // Llamar a `authService.updatePassword(user.id, nuevaPassword)`
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
      // Crear un FormData y añadir la foto
      // Llamar a `authService.updateProfilePicture(user.id, formData)`
      // Actualizar el estado del usuario con `setUser()`
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
