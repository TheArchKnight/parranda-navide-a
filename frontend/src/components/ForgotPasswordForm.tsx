import { useState } from "react";
import { Input } from "./formComponents/Input";
import { Button } from "./formComponents/Button";
import api from "../services/api"
type ForgotPasswordFormProps = {
  onCancel: () => void;
};

const ForgotPasswordForm = ({ onCancel }: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      api.post("users/forgotPassword", null, {params: {email: email}})
      setMessage(
        "Si el correo está registrado, recibirás una nueva contraseña temporal."
      );
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setMessage("Hubo un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="insert-0 w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Recuperar contraseña</h2>
      {message ? (
        <p className="text-center text-green-600">{message}</p>
      ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="email"
              label="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" isLoading={loading} className="w-full">
              Enviar nueva contraseña
            </Button>
            <p className="mt-4 text-sm text-center">

              <button
                type="button"
                className="text-red-500 hover:underline"
                onClick={onCancel}
              >
                Cancelar
              </button>
            </p>
          </form>
        )}
    </div>
  );
};

export default ForgotPasswordForm;

