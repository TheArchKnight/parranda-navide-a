import React, { useState } from "react";
import { usePerfil } from "../hooks/AsignarPerfil";

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
  const { obtenerDatosUsuario } = usePerfil();
  const user = obtenerDatosUsuario();
  const username = user?.name || "Usuario";

  const [comments, setComments] = useState<{ [key: string]: Comment[] }>({
    buñuelos: [
      { id: 1, username: "Juan", text: "Me quedaron súper esponjosos!" },
      { id: 2, username: "Maria", text: "Los hice con queso doble crema y quedaron deliciosos!" },
    ],
    natilla: [
      { id: 3, username: "Pedro", text: "La natilla quedó en su punto." },
      { id: 4, username: "Ana", text: "Usé panela y me encantó el resultado." },
    ],
    lechona: [
      { id: 5, username: "Luis", text: "Es la mejor receta de lechona que he probado!" },
      { id: 6, username: "Sofía", text: "Un clásico de la gastronomía colombiana." },
    ],
  });

  const [newComment, setNewComment] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState("");
  const [editedImage, setEditedImage] = useState<string | undefined>(undefined);

  const handleAddComment = () => {
    if (!newComment.trim() && !image) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      username,
      text: newComment || undefined,
      image,
    };

    setComments((prev) => ({
      ...prev,
      [recipeId]: [...(prev[recipeId] || []), newCommentObj],
    }));

    setNewComment("");
    setImage(undefined);
    (document.getElementById("file-input") as HTMLInputElement).value = "";
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

  const handleEditComment = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditedText(comment.text || "");
    setEditedImage(comment.image);
  };

  const handleSaveEdit = () => {
    if (editingCommentId === null) return;

    setComments((prev) => ({
      ...prev,
      [recipeId]: prev[recipeId].map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editedText || undefined, image: editedImage }
          : comment
      ),
    }));

    setEditingCommentId(null);
    setEditedText("");
    setEditedImage(undefined);
  };

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
        {comments[recipeId]?.map((comment) => (
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
        <button className="bg-red-500 text-white p-2 rounded" onClick={handleAddComment}>
          Enviar comentario
        </button>
      </div>
    </div>
  );
};

export default Comments;