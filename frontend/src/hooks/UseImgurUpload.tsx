import { useState } from "react";

const useImgurUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<void> => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: "Client-ID 955660ccf9873bd",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error en la subida: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        setImageUrl(data.data.link); // Guarda la URL de la imagen
        alert("Imagen subida con éxito: " + data.data.link);
      } else {
        throw new Error("La respuesta de Imgur no fue exitosa.");
      }
    } catch (err: any) {
      console.error("Error en la subida:", err);
      setError(err.message || "Algo salió mal al subir la imagen");
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, loading, error, imageUrl };
};

export default useImgurUpload;
