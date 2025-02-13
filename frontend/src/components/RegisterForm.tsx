import React from "react";
import { Input } from "./formComponents/Input";
import { Button } from "./formComponents/Button";

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
  return (
    <div className="inset-0 w-full p-8">
      <h2 className="text-2xl font-bold mb-6">Registrar usuario</h2>
      <form onSubmit={onSubmit} className="space-y-4">
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
        <Button type="submit" isLoading={loading} className="w-full">
          Crear cuenta
        </Button>
      </form>
    </div>
  );
}


export default RegisterForm;