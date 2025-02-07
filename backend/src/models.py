from sqlalchemy import Column, Integer, String
from database import Base


class Usuario(Base):
    __tablename__ = "usuarios"

    id_usuario = Column(Integer, primary_key=True,
                        index=True, autoincrement=True)
    nombre = Column(String, nullable=False)
    correo = Column(String, unique=True, index=True, nullable=False)
    contraseña = Column(String, nullable=False)
    url_foto_perfil = Column(String, nullable=True)
