import { useState, useRef } from "react";
import { Button } from "../components/formComponents/Button";
import { UploadCloud, XCircle } from "lucide-react";

interface UploadPhotoProps {
  onPhotoChange: (file: File | null, imageUrl: string | null) => void;
  actualizarFoto: (nuevaFoto: File) => Promise<void>;
}

const UploadPhoto: React.FC<UploadPhotoProps> = ({ onPhotoChange, actualizarFoto }) => {
  const [image, setImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImage(imageUrl);
        onPhotoChange(file, imageUrl);
      };
      reader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => fileInputRef.current?.click();
  
  const handleRemoveImage = () => {
    setImage(null);
    setSelectedFile(null);
    onPhotoChange(null, null);
  };

  const handleSavePhoto = async () => {
    if (selectedFile) {
      await actualizarFoto(selectedFile);
      onPhotoChange(selectedFile, image);
      
      // Limpiar la previsualización después de guardar
      setImage(null);
      setSelectedFile(null);
    }
  };

  return (
    <div className="flex flex-col items-center border m-4 rounded-lg ">
      {image ? (
        <div className="relative">
          <img
            src={image}
            alt="Uploaded"
            className="w-40 h-40 object-cover rounded-lg shadow-md"
          />
          <button
            className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-md hover:bg-red-500 hover:text-white transition"
            onClick={handleRemoveImage}
          >
            <XCircle size={20} />
          </button>
        </div>
      ) : (
        <Button onClick={handleUploadClick} className="flex items-center gap-2">
          <UploadCloud size={20} /> Subir Foto
        </Button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <Button onClick={handleSavePhoto} className="w-full text-white">
          Guardar Foto
        </Button>
      )}
    </div>
  );
};

export default UploadPhoto;
