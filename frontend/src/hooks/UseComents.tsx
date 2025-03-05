import { useState } from 'react';
import { AxiosError } from 'axios';
import api from '../services/api';

// Definir los tipos para los datos de los comentarios
interface Comment {
  id: number;
  username: string;
  text: string;
  image?: string;
}

interface CreateCommentPayload {
  comentario: string;
  id_usuario: number;
  id_receta: number;
}

interface UpdateCommentPayload {
  id: number;
  username: string;
  text: string;
}

interface ResponseComment {
    comentario: string;
    id_usuario: number;
    id_receta: number;
}


// Definir los tipos del hook
interface UseCommentsResult {
  comments: Comment[];
  loading: boolean;
  error: string | null;
  fetchComments: (code: number) => void; // Cambié el nombre para reflejar que ahora traemos varios comentarios
  createComment: (comentario: string, id_usuario: number, id_receta: number, imageUrl?:string) => void;
  updateComment: (id: number, username: string, text: string) => void;
  deleteComment: (id: number) => void;
}

const useComments = (): UseCommentsResult => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = '/comments'; // El endpoint base

  // Obtener comentarios filtrados por código (code)
  const fetchComments = async (code: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get<Comment[]>(`${apiUrl}/${code}`);
      setComments(response.data); // Ahora guardamos varios comentarios
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Crear un comentario
  const createComment = async (comentario: string, id_usuario: number, id_receta: number, imageUrl?:string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post<Comment>(apiUrl, {
        comentario,
        id_usuario,
        id_receta,
        url_foto: imageUrl
      } as CreateCommentPayload);
      if (response) fetchComments(id_receta); 
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Actualizar un comentario
  const updateComment = async (id: number, username: string, text: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.put<ResponseComment>(apiUrl, {
        id,
        username,
        text,
      } as UpdateCommentPayload);
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === id ? { ...comment, text: response.data.comentario } : comment
        )
      );
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar un comentario
  const deleteComment = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`${apiUrl}/${id}`);
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    comments,
    loading,
    error,
    fetchComments,
    createComment,
    updateComment,
    deleteComment,
  };
};

export default useComments;
