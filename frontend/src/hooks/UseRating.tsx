import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../services/api';

// Definir los tipos para los datos de las calificaciones
interface Rating {
  total: number;
  promedio: number;
  votes: number;
}

interface CreateRatingPayload {
  valor: number;
  id_calificador: number;
  id_receta: number;
}

// Definir los tipos del hook
interface UseRatingResult {
  rating: Rating | null;
  loading: boolean;
  error: string | null;
  fetchRating: (id_recipe: number) => void;
  fetchUserRating: (id_recipe: number, id_user: number) => void;
  submitRating: (valor: number, id_calificador: number, id_receta: number) => void;
}

const useRating = (): UseRatingResult => {
  const [rating, setRating] = useState<Rating | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = '/calificacion_recetas'; // El endpoint base para las calificaciones

  // Obtener la calificación de una receta por su id
  const fetchRating = async (id_recipe: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Rating>(`${apiUrl}/${id_recipe}`);
      setRating(response.data); // Guardamos la calificación
      console.log(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
const fetchUserRating = async (id_recipe: number, id_user: number) => {
  setError(null);
  try {
    const response = await api.get<Rating>('calificacion_receta_user', {
      params: { id_recipe, id_user },

    });
      console.log(response.data);
    return response.data.valor;    
  } catch (err) {
    const error = err as AxiosError;

    if (error.response?.status === 404) {
      console.log("User has not rated this recipe.");
      return null; // Handle no rating case
    }

    setError(error.message);
  }
};
  // Enviar una nueva calificación para una receta
  const submitRating = async (valor: number, id_calificador: number, id_receta: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post<Rating>(apiUrl, {
        valor,
        id_calificador,
        id_receta,
      } as CreateRatingPayload);
      if(response)fetchRating(id_receta); // Volvemos a cargar la calificación 
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    rating,
    loading,
    error,
    fetchRating,
    submitRating,
    fetchUserRating
  };
};

export default useRating;
