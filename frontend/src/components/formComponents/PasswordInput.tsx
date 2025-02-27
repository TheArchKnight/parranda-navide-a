import * as React from "react";
import { Eye, EyeOff } from "lucide-react"; // Íconos de ojo para mostrar/ocultar contraseña

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, value, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="relative">
      <label className="block text-gray-700 font-medium">{label}</label>
      <div className="relative">
        <input
          type={isPasswordVisible ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
        >
          {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
