from sqlalchemy.orm import Session
from src.models import Usuario
from src.schemas import UsuarioCreate
from src.auth import hash_password


def get_usuario_by_correo(db: Session, correo: str):
    return db.query(Usuario).filter(Usuario.correo == correo).first()


def create_usuario(db: Session, usuario: UsuarioCreate):
    hashed_password = hash_password(usuario.contraseña)
    db_usuario = Usuario(
        nombre=usuario.nombre,
        correo=usuario.correo,
        contraseña=hashed_password,
        url_foto_perfil=usuario.url_foto_perfil
    )
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario
