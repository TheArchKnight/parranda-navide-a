import React, { useState, useEffect } from "react";
import { usePerfil } from "../hooks/AsignarPerfil";
import useComments from "../hooks/UseComents";
import useCloudinary from "../hooks/UseCloudinary";

interface Comment {
  id: number;
  username: string;
  text?: string;
  image?: string;
}

interface CommentsProps {
  recipeId: number;
}

const Comments: React.FC<CommentsProps> = ({ recipeId }) => {
  const { comments, loading, error, fetchComments, createComment, updateComment, deleteComment } = useComments();
  const { obtenerDatosUsuario } = usePerfil();
  const user = obtenerDatosUsuario();
  const username = user?.name || "Usuario";

  const [newComment, setNewComment] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>("");
  const [, setEditedImage] = useState<string | undefined>(undefined);

  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const { uploadImage, loading: uploadingImage } = useCloudinary(CLOUD_NAME, UPLOAD_PRESET);

  useEffect(() => {
    fetchComments(recipeId);
  }, [recipeId]);

  const handleAddComment = async () => {
    if (!newComment.trim() && !image) return;


    if (image) {
      uploadImage(image).then((url) => {
        createComment(newComment, Number(user?.id) || 0, recipeId, url || undefined);
        setNewComment("");
        setImage(null);
        setImagePreview(null);
      }).catch((err) => {
        console.error("Error al subir imagen:", err);
      });
      
    }
  };

  const handleDeleteComment = (commentId: number) => {
    deleteComment(commentId);
  };

  const handleEditComment = (comment: Comment) => {
    setEditingCommentId(comment.id);
    setEditedText(comment.text || "");
    setEditedImage(comment.image);
  };

  const handleSaveEdit = () => {
    if (editingCommentId === null) return;
    updateComment(editingCommentId, username, editedText);
    setEditingCommentId(null);
    setEditedText("");
    setEditedImage(undefined);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-100 w-full max-w-2xl mx-auto">
      <div className="space-y-4">
        {loading && <p>Cargando comentarios...</p>}
        {error && <p>Error: {error}</p>}

        {comments.map((comment) => (
          <div key={comment.id} className="p-3 bg-white rounded shadow relative">
            {editingCommentId === comment.id ? (
              <>
                <textarea className="w-full p-2 border rounded" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                <button className="bg-green-500 text-white p-1 mt-2 rounded" onClick={handleSaveEdit}>Guardar</button>
              </>
            ) : (
              <>
                <p className="font-semibold">{comment.username}</p>
                {comment.text && <p>{comment.text}</p>}
                {comment.image && <img src={comment.image} alt="Comentario" className="w-32 h-32 mt-2 rounded" />}
                {comment.username === username && (
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button className="bg-blue-500 text-white p-1 rounded" onClick={() => handleEditComment(comment)}>✏️</button>
                    <button className="bg-red-500 text-white p-1 rounded" onClick={() => handleDeleteComment(comment.id)}>🗑️</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <textarea className="p-2 border rounded w-full" placeholder="Escribe un comentario..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {imagePreview && <img src={imagePreview} alt="Preview" className="w-20 h-20 rounded" />}
        <button className="bg-red-500 text-white p-2 rounded" onClick={handleAddComment} disabled={uploadingImage}>
          {uploadingImage ? "Subiendo imagen..." : "Enviar comentario"}
        </button>
      </div>
    </div>
  );
};

export default Comments;
