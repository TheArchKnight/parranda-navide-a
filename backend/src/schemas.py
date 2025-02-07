from pydantic import BaseModel, EmailStr


class UsuarioBase(BaseModel):
    nombre: str
    correo: EmailStr
    url_foto_perfil: str | None = None


class UsuarioCreate(UsuarioBase):
    contraseña: str


class UsuarioResponse(UsuarioBase):
    id_usuario: int

    class Config:
        from_attributes = True
