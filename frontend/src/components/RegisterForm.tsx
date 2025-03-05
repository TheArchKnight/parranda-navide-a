import React from "react";
import { Input } from "./formComponents/Input";
import { Button } from "./formComponents/Button";
import PasswordStrengthChecker from "./formComponents/PasswordStrengthChecker";

type RegisterFormProps = {
  formData: {
    name: string;
    email: string;
    password: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
};

const RegisterForm = ({
  formData,
  onChange,
  onSubmit,
  loading,
}: RegisterFormProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const expRegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;
  const isPasswordStrong = expRegPass.test(formData.password);

  const handleSubmit = (e: React.FormEvent) => {
    if (!isPasswordStrong) {
      e.preventDefault(); // 🔹 Evita el envío del formulario si la contraseña es débil
      alert("La contraseña no es segura. Asegúrate de cumplir con los requisitos.");
      return;
    }
    onSubmit(e); // 🔹 Si la contraseña es segura, procede con el envío
  };

  return (
    <div className="inset-0 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrar usuario</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          label="Nombre"
          value={formData.name}
          onChange={onChange}
          required
        />
        <Input
          type="email"
          name="email"
          label="Correo"
          value={formData.email}
          onChange={onChange}
          required
        />
        <Input
          type="password"
          name="password"
          label="Contraseña"
          value={formData.password}
          onChange={onChange}
          onShowPasswordChange={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          required
        />
        <PasswordStrengthChecker password={formData.password} />
        <Button type="submit" isLoading={loading} className="w-full">
          Crear cuenta
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
