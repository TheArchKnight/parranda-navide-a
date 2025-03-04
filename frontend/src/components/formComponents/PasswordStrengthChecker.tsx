import * as React from "react";

interface PasswordStrengthCheckerProps {
  password: string;
}

const PasswordStrengthChecker: React.FC<PasswordStrengthCheckerProps> = ({ password }) => {
  const expRegPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

  const getStrengthMessage = () => {
    if (password.length === 0) return ""; // No mostrar nada si está vacío
    if (password.length < 8) return "❌ Debe tener al menos 8 caracteres.";
    if (!/[a-z]/.test(password)) return "❌ Debe contener al menos una letra minúscula.";
    if (!/[A-Z]/.test(password)) return "❌ Debe contener al menos una letra mayúscula.";
    if (!/\d/.test(password)) return "❌ Debe contener al menos un número.";
    if (!/[@$!%*?&]/.test(password)) return "❌ Debe contener al menos un carácter especial (@$!%*?&).";
    if (expRegPass.test(password)) return "✅ Contraseña segura.";
    return "⚠️ La contraseña es débil.";
  };

  return (
    <p className={`text-sm mt-2 ${expRegPass.test(password) ? "text-green-600" : "text-red-600"}`}>
      {getStrengthMessage()}
    </p>
  );
};

export default PasswordStrengthChecker;
