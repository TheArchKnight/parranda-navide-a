import * as React from "react";
import { usePerfil } from "../hooks/AsignarPerfil";
import { Input } from "../components/formComponents/Input";
import { Button } from "../components/formComponents/Button";
import PasswordStrengthChecker from "./formComponents/PasswordStrengthChecker";
import ConfirmPasswordChecker from "../components/formComponents/ConfirmPasswordChecker";
import PasswordInput from "../components/formComponents/PasswordInput";
import UploadPhoto from "./UploadPhoto";
import defaultPhoto from "../assets/images/profile-picture.png";

const GestionPerfil: React.FC = () => {
  const { obtenerDatosUsuario, actualizarNombre, actualizarPassword, actualizarFoto, loading } = usePerfil();
  const user = obtenerDatosUsuario();

  // Estados locales para la edición
  const [name, setName] = React.useState(user?.name || "");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [securityCode, setSecurityCode] = React.useState("");
  const [generatedCode, setGeneratedCode] = React.useState(""); 

  const [isEditingName, setIsEditingName] = React.useState(false);
  const [isEditingPassword, setIsEditingPassword] = React.useState(false);
  const [isSecurityCodeSent, setIsSecurityCodeSent] = React.useState(false);
  const [isSecurityCodeButtonDisabled, setIsSecurityCodeButtonDisabled] = React.useState(false);

  // Estado para la foto de perfil
  const [photoUrl, setPhotoUrl] = React.useState<string | null>(user?.photoUrl || null);

  const generateSecurityCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSaveName = async () => {
    await actualizarNombre(name);
    setIsEditingName(false);
  };

  const handleSendSecurityCode = () => {
    const newCode = generateSecurityCode();
    setGeneratedCode(newCode);
    setIsSecurityCodeSent(true);
    setIsSecurityCodeButtonDisabled(true);
    console.log(`Código de seguridad enviado al correo de: ${user?.email} - Código: ${newCode}`);

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

  const handlePhotoChange = async (file: File | null) => {
    if (file) {
      await actualizarFoto(file); 
      setPhotoUrl(user?.photoUrl || null);
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
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
        <div className="flex items-center gap-2 font-semibold ml-auto">
          <h2 className="bg-red-500 text-white text-[25px] m-2 px-10 py-1 rounded-full">
            Perfil
          </h2>
        </div>
        {/* Sección principal */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Sección de datos */}
          <div className="w-full md:w-2/3 p-6 bg-gray-50">
            {/* Sección para cambiar nombre */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                {!isEditingName ? (
                  <>
                    <p className="text-lg font-medium text-gray-800">Nombre: {name}</p>
                    <Button className="mt-2 w-full" onClick={() => setIsEditingName(true)}>
                      Cambiar Nombre
                    </Button>
                  </>
                ) : (
                  <>
                    <Input label="Nuevo Nombre" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <Button className="mt-2 w-full" onClick={handleSaveName} disabled={loading}>
                      {loading ? "Guardando..." : "Guardar Nombre"}
                    </Button>
                  </>
                )}
            </div>

            {/* Sección para cambiar contraseña */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                {!isEditingPassword ? (
                  <>
                    <p className="text-lg font-medium text-gray-800">Contraseña: ********</p>
                    <Button className="mt-2 w-full" onClick={() => setIsEditingPassword(true)}>
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
                      className="mt-2 w-full"
                      onClick={handleSendSecurityCode}
                      disabled={isSecurityCodeButtonDisabled || loading}
                    >
                      {isSecurityCodeButtonDisabled ? "Espera 5 minutos" : "Enviar Código de Seguridad"}
                    </Button>

                    {isSecurityCodeSent && (
                      <Input
                        label="Código de Seguridad"
                        type="text"
                        value={securityCode}
                        onChange={(e) => setSecurityCode(e.target.value)}
                      />
                    )}

                    <Button
                      className="mt-2 w-full"
                      onClick={handleSavePassword}
                      disabled={!isSavePasswordButtonEnabled || loading}
                    >
                      {loading ? "Guardando..." : "Guardar Contraseña"}
                    </Button>
                  </>
                )}
            </div>
          </div>  
          {/* Sección de foto de perfil */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center bg-red-500 p-6 min-h-full">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden">
              <img
                src={photoUrl || defaultPhoto} 
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <UploadPhoto onPhotoChange={handlePhotoChange} actualizarFoto={actualizarFoto} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GestionPerfil;
