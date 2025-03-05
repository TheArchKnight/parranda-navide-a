import * as React from "react";
import { usePerfil } from "../hooks/AsignarPerfil";
import { Input } from "../components/formComponents/Input";
import { Button } from "../components/formComponents/Button";
import PasswordStrengthChecker from "./formComponents/PasswordStrengthChecker";
import ConfirmPasswordChecker from "../components/formComponents/ConfirmPasswordChecker";
import PasswordInput from "../components/formComponents/PasswordInput";
import defaultPhoto from "../assets/images/profile-picture.png";
import api from "../services/api";
import useCloudinary from "../hooks/UseCloudinary";
import UploadButton from "../components/formComponents/UploadButton";

const GestionPerfil: React.FC = () => {
  const { obtenerDatosUsuario, actualizarNombre, actualizarPassword, actualizarFoto, loading } = usePerfil();
  const user = obtenerDatosUsuario();
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const { uploadImage, loading: uploadingImage } = useCloudinary(CLOUD_NAME, UPLOAD_PRESET);

  const [name, setName] = React.useState(user?.name || "");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const [generatedCode, setGeneratedCode] = React.useState(""); 

  const [isEditingName, setIsEditingName] = React.useState(false);
  const [isEditingPassword, setIsEditingPassword] = React.useState(false);
  const [isSecurityCodeSent, setIsSecurityCodeSent] = React.useState(false);
  const [isSecurityCodeButtonDisabled, setIsSecurityCodeButtonDisabled] = React.useState(false);
  const [photoUrl, setPhotoUrl] = React.useState<string | null>(user?.photoUrl || null);

  const generateSecurityCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSaveName = async () => {
    await actualizarNombre(name);
    setIsEditingName(false);
  };

  const handleSendSecurityCode = () => {
    const newCode = generateSecurityCode();
    setGeneratedCode(newCode);
    setIsSecurityCodeSent(true);
    setIsSecurityCodeButtonDisabled(true);
    api.post("/users/send_mail", {
      recipient: user?.email,
      subject: "Codigo de confirmacion",
      message: `Codigo de confirmacion para cambio de contraseña: ${newCode}`
    })
    setTimeout(() => {
      setIsSecurityCodeButtonDisabled(false);
    }, 300000);
  };

  const handleSavePassword = async () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    if (securityCode !== generatedCode) {
      alert("El código de seguridad ingresado es incorrecto.");
      return;
    }
    await actualizarPassword(password);
    setIsEditingPassword(false);
    setPassword("");
    setConfirmPassword("");
    setSecurityCode("");
    setGeneratedCode("");
    setIsSecurityCodeSent(false);
  };

  const handlePhotoSelect = async (file: File | null) => {
    if (file) {
      const uploadedUrl = await uploadImage(file);
      if (uploadedUrl) {
        setPhotoUrl(uploadedUrl);
        await actualizarFoto(file);
      }
    }
  };

  const isSavePasswordButtonEnabled =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    securityCode.length > 0 &&
    password === confirmPassword &&
    securityCode === generatedCode;

  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 md:p-6 overflow-y-auto">
        {/* Título */}
        <div className="w-full flex justify-end">
          <h2 className="bg-red-500 text-white text-xl md:text-2xl lg:text-3xl px-6 py-2 rounded-full mb-4">
              Perfil
          </h2>
      </div>

        {/* Contenedor Principal */}
        <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-y overflow-hidden">
          
          {/* Foto de perfil - En móviles arriba, en desktop a la izquierda */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center bg-red-500 p-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md overflow-hidden">
              <img
                src={photoUrl || defaultPhoto} 
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>
            <UploadButton onFileSelect={handlePhotoSelect} loading={uploadingImage} />
          </div>

          {/* Datos del Usuario */}
          <div className="w-full md:w-2/3 p-6 bg-gray-50">
            
            {/* Cambiar Nombre */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              {!isEditingName ? (
                <>
                  <p className="text-lg font-medium text-gray-800">Nombre: {name}</p>
                  <Button className="mt-2 w-full md:w-auto" onClick={() => setIsEditingName(true)}>
                    Cambiar Nombre
                  </Button>
                </>
              ) : (
                <>
                  <Input label="Nuevo Nombre" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  <Button className="mt-2 w-full md:w-auto" onClick={handleSaveName} disabled={loading}>
                    {loading ? "Guardando..." : "Guardar Nombre"}
                  </Button>
                </>
              )}
            </div>

            {/* Cambiar Contraseña */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              {!isEditingPassword ? (
                <>
                  <p className="text-lg font-medium text-gray-800">Contraseña: ********</p>
                  <Button className="mt-2 w-full md:w-auto" onClick={() => setIsEditingPassword(true)}>
                    Cambiar Contraseña
                  </Button>
                </>
              ) : (
                <>
                  <PasswordInput
                    label="Nueva Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <PasswordStrengthChecker password={password} />

                  <PasswordInput
                    label="Confirmar Nueva Contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <ConfirmPasswordChecker password={password} confirmPassword={confirmPassword} />

                  <Button
                    className="mt-2 w-full md:w-auto"
                    onClick={handleSendSecurityCode}
                    disabled={isSecurityCodeButtonDisabled || loading}
                  >
                    {isSecurityCodeButtonDisabled ? "Espera 5 minutos" : "Enviar Código de Seguridad"}
                  </Button>

                  {isSecurityCodeSent && (
                    <Input
                      label="Código de Seguridad enviado al correo electronico."
                      type="text"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                    />
                  )}

                  <Button
                    className="mt-2 w-full md:w-auto"
                    onClick={handleSavePassword}
                    disabled={!isSavePasswordButtonEnabled || loading}
                  >
                    {loading ? "Guardando..." : "Guardar Contraseña"}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionPerfil;
