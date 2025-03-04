import React, { useState, useEffect } from "react";
import { usePerfil } from "../hooks/AsignarPerfil";
import useComments from "../hooks/UseComents";

interface Comment {
  id: number;
  username: string;
  text?: string;
  image?: string;
}

interface CommentsProps {
  recipeId: string;
}

const Comments: React.FC<CommentsProps> = ({ recipeId }) => {
  const {
    comments,
    loading,
    error,
    fetchComments,
    createComment,
    updateComment,
    deleteComment,
  } = useComments();

  const { obtenerDatosUsuario } = usePerfil();
  const user = obtenerDatosUsuario();
  const username = user?.name || "Usuario";

  const [newComment, setNewComment] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>("");
  const [editedImage, setEditedImage] = useState<string | undefined>(undefined);

  // Estado local solo para comentarios con imagen
  const [localComments, setLocalComments] = useState<Comment[]>([]); 

  useEffect(() => {
    fetchComments(recipeId);
  }, [recipeId]);

  // Función para agregar un comentario con imagen (solo local)
  const handleAddCommentWithImage = () => {
    if (!newComment.trim() && !image) return; // No permite comentarios vacíos sin imagen

    const newCommentObj: Comment = {
      id: Date.now(),
      username,
      text: newComment || undefined,
      image,
    };

    // Agregar el comentario con imagen al estado local
    setLocalComments((prev) => [...prev, newCommentObj]);

    // Limpiar los campos de entrada
    setNewComment("");
    setImage(undefined);
    (document.getElementById("file-input") as HTMLInputElement).value = "";
  };

  // Función para crear un comentario sin imagen (usando el hook)
  const handleAddComment = () => {
    if (newComment.trim()) {
      createComment(newComment, user?.id || 0, recipeId);
      setNewComment(""); // Limpiar campo de texto
    }
  };

  // Función para eliminar un comentario (con imagen o no)
  const handleDeleteComment = (commentId: number) => {
    setLocalComments((prev) => prev.filter((comment) => comment.id !== commentId));
    deleteComment(commentId); // Llamada al hook para eliminar desde el servidor
  };

  // Función para editar un comentario
  const handleEditComment = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditedText(comment.text || "");
    setEditedImage(comment.image);
  };

  // Guardar la edición del comentario
  const handleSaveEdit = () => {
    if (editingCommentId === null) return;

    // Actualizar el comentario en el estado local y servidor
    setLocalComments((prev) =>
      prev.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editedText || undefined, image: editedImage }
          : comment
      )
    );
    updateComment(editingCommentId, username, editedText); // Actualizar en el servidor

    // Limpiar el estado de edición
    setEditingCommentId(null);
    setEditedText("");
    setEditedImage(undefined);
  };

  // Función para manejar el cambio de imagen en un comentario
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Función para subir la imagen cuando se edita el comentario
  const handleEditImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setEditedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100 w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        {loading && <p>Cargando comentarios...</p>}
        {error && <p>Error: {error}</p>}

        {/* Mostrar los comentarios tanto locales como los obtenidos del servidor */}
        {[...comments, ...localComments].map((comment) => (
          <div key={comment.id} className="p-3 bg-white rounded shadow relative">
            {editingCommentId === comment.id ? (
              <>
                <textarea
                  className="w-full p-2 border rounded"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <input type="file" accept="image/*" onChange={handleEditImageUpload} />
                {editedImage && <img src={editedImage} alt="Preview" className="w-20 h-20 rounded" />}
                <button className="bg-green-500 text-white p-1 mt-2 rounded" onClick={handleSaveEdit}>
                  Guardar
                </button>
              </>
            ) : (
              <>
                <p className="font-semibold">{comment.username}</p>
                {comment.text && <p>{comment.text}</p>}
                {comment.image && (
                  <img
                    src={comment.image}
                    alt="Comentario"
                    className="w-32 h-32 mt-2 rounded cursor-pointer"
                    onClick={() => setSelectedImage(comment.image ?? null)}
                  />
                )}
                {comment.username === username && (
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="bg-blue-500 text-white p-1 rounded" onClick={() => handleEditComment(comment)}>
                      ✏️
                    </button>
                    <button className="bg-red-500 text-white p-1 rounded" onClick={() => handleDeleteComment(comment.id)}>
                      🗑️
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Ampliado" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}

      <div className="mt-4 flex flex-col gap-2">
        <textarea
          className="p-2 border rounded w-full"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <input id="file-input" type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Preview" className="w-20 h-20 rounded" />}
        <button className="bg-red-500 text-white p-2 rounded" onClick={image ? handleAddCommentWithImage : handleAddComment}>
          {image ? "Enviar comentario con imagen" : "Enviar comentario"}
        </button>
      </div>
    </div>
  );
};

export default Comments;
