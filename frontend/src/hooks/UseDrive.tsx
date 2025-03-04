import { useState } from "react";

const API_KEY = "AIzaSyCt_PJYdteS-uzSTBm2zHyzpGPBQag4KDw"; // Reemplaza con tu clave de API
const UPLOAD_FOLDER_ID = "18GOAblbsuwI2CUQrXgPZiwz9Uo78ArQ3"; // ID de la carpeta en Google Drive

const useGoogleDriveUpload = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<void> => {
    setLoading(true);
    setError(null);

    const metadata = {
      name: file.name,
      parents: [UPLOAD_FOLDER_ID],
      mimeType: file.type,
    };

    const formData = new FormData();
    formData.append(
      "metadata",
      new Blob([JSON.stringify(metadata)], { type: "application/json" })
    );
    formData.append("file", file);

    try {
      const response = await fetch(
        `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`, // Si usas OAuth2, debes reemplazar esto con un access token.
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error al subir: ${response.statusText}`);
      }

      const data = await response.json();
      const fileId = data.id;
      const fileUrl = `https://drive.google.com/uc?id=${fileId}`;
      setImageUrl(fileUrl);

      alert("Imagen subida con éxito: " + fileUrl);
    } catch (err: any) {
      console.error("Error en la subida:", err);
      setError(err.message || "Algo salió mal al subir la imagen");
    } finally {
      setLoading(false);
    }
  };

  return { uploadImage, loading, error, imageUrl };
};

export default useGoogleDriveUpload;
