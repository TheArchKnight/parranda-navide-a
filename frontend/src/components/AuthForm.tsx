import useAuthForm from "../hooks/UseAuthForm";
import { Button } from "./formComponents/Button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useState } from "react";

const AuthForm = () => {
  const { isLogin, setIsLogin, loading, formData, handleChange, handleSubmit } =
    useAuthForm();
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-[800px] h-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 flex">
          <div className="relative w-full flex">
            {!isForgotPassword ? (
              <>
                <div className="w-1/2 p-8">
                  <LoginForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={loading}
                    onForgotPassword={() => setIsForgotPassword(true)}
                  />
                </div>

                <div className="w-1/2 p-8">
                  <RegisterForm
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={loading}
                  />
                </div>
              </>
            ) : (
              <div className="w-1/2 p-8">
                <ForgotPasswordForm
                  onCancel={() => setIsForgotPassword(false)}
                />
              </div>
            )}
          </div>

          <div
            className={`absolute inset-0 w-1/2 bg-red-500 transition-all duration-700 ease-in-out z-10 flex ${
              !isLogin ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="w-full p-8 text-white flex flex-col items-center justify-center text-center">
              <h2 className="text-3xl font-bold mb-4">
                {!isLogin ? "¿Eres nuevo?" : "Bienvenido"}
              </h2>
              <p className="mb-8">
                {isLogin
                  ? "Regístrate para comenzar"
                  : "Si ya tienes una cuenta, inicia sesión"}
              </p>
              <Button variant="outline" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Registrarse" : "Iniciar sesión"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

