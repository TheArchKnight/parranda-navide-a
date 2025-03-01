import * as React from "react";

interface ConfirmPasswordCheckerProps {
  password: string;
  confirmPassword: string;
}

const ConfirmPasswordChecker: React.FC<ConfirmPasswordCheckerProps> = ({ password, confirmPassword }) => {
  if (confirmPassword.length === 0) return null; // No mostrar nada si no se ha ingresado confirmación

  const isMatch = password === confirmPassword;
  return (
    <p className={`text-sm mt-2 ${isMatch ? "text-green-600" : "text-red-600"}`}>
      {isMatch ? "✅ Las contraseñas coinciden." : "❌ Las contraseñas no coinciden."}
    </p>
  );
};

export default ConfirmPasswordChecker;
