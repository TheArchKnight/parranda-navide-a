import React from "react";
import { Input } from "./formComponents/Input";
import { Button } from "./formComponents/Button";

type LoginFormProps = {
  formData: {
    email: string;
    password: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
};

const  LoginForm = ({
  formData,
  onChange,
  onSubmit,
  loading,
}: LoginFormProps)  => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className="inset-0 w-full ">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
      <form onSubmit={onSubmit} className="space-y-4">
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
          Ingresar
        </Button>
      </form>
      <p className="mt-4 text-sm text-center">
        <button type="button" className="text-red-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
