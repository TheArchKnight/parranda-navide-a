import { useState } from "react";

interface UseCloudinaryReturn {
    uploadImage: (file: File) => Promise<string | null>;
    getImageUrl: (publicId: string) => string;
    imageUrl: string | null;
    loading: boolean;
    error: string | null;
}

const useCloudinary = (cloudName: string, uploadPreset: string): UseCloudinaryReturn => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const uploadImage = async (file: File): Promise<string | null> => {
        if (!file) return null;

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setImageUrl(data.secure_url);
                return data.secure_url;
            } else {
                throw new Error(data.error?.message || "Error al subir la imagen");
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Error desconocido";
            setError(errorMessage);
            console.error("Error al subir imagen:", errorMessage);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const getImageUrl = (publicId: string): string => {
        return `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}`;
    };

    return { uploadImage, getImageUrl, imageUrl, loading, error };
};

export default useCloudinary;
