import React, { useRef } from "react";
import { Button } from "./Button";
import { UploadCloud } from "lucide-react";

interface UploadButtonProps {
  onFileSelect: (file: File | null) => void;
  loading?: boolean;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onFileSelect, loading = false }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileSelect(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      <Button onClick={handleClick} className="flex items-center gap-2 mt-4">
        <UploadCloud size={20} /> {loading ? "Subiendo..." : "Subir Foto"}
      </Button>
    </div>
  );
};

export default UploadButton;
