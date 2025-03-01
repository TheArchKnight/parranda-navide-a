import React, { useState } from "react";
import { usePerfil } from "../hooks/AsignarPerfil";

interface Comment {
  id: number;
  username: string;
  text: string;
  image?: string;
}

interface CommentsProps {
  recipeId: string;
}

const Comments: React.FC<CommentsProps> = ({ recipeId }) => {
  const { obtenerDatosUsuario } = usePerfil();
  const user = obtenerDatosUsuario();
  const username = user?.name || "Usuario";

  const [comments, setComments] = useState<{ [key: string]: Comment[] }>({
    buñuelos: [
      { id: 1, username: "Juan", text: "Me quedaron súper esponjosos!"},
      { id: 2, username: "Maria", text: "Los hice con queso doble crema y quedaron deliciosos!" },
    ],
    natilla: [
      { id: 3, username: "Pedro", text: "La natilla quedó en su punto." },
      { id: 4, username: "Ana", text: "Usé panela y me encantó el resultado." },
    ],
    lechona: [
      { id: 5, username: "Luis", text: "Es la mejor receta de lechona que he probado!" },
    ],
  });

  const [newComment, setNewComment] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      username,
      text: newComment,
      image,
    };

    setComments((prev) => ({
      ...prev,
      [recipeId]: [...(prev[recipeId] || []), newCommentObj],
    }));

    setNewComment("");
    setImage(undefined);
  };

  const handleDeleteComment = (commentId: number) => {
    setComments((prev) => ({
      ...prev,
      [recipeId]: prev[recipeId].filter((comment) => comment.id !== commentId),
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100">
      <div className="mt-2 space-y-4">
        {comments[recipeId]?.map((comment) => (
          <div key={comment.id} className="p-2 bg-white rounded shadow relative">
            <p className="font-semibold">{comment.username}</p>
            <p>{comment.text}</p>
            {comment.image && (
              <img src={comment.image} alt="Comentario" className="w-32 h-32 mt-2 rounded" />
            )}
            {comment.username === username && (
              <button
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                onClick={() => handleDeleteComment(comment.id)}
              >
                🗑️
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <textarea
          className="p-2 border rounded w-full"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Preview" className="w-20 h-20 rounded" />}
        <button className="bg-red-500 text-white p-2 rounded" onClick={handleAddComment}>
          Enviar comentario
        </button>
      </div>
    </div>
  );
};

export default Comments;