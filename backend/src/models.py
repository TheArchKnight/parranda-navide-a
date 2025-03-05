from sqlalchemy import Column, ForeignKey, Integer, LargeBinary, String
from src.database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True,
                index=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    url_profile_picture = Column(String, nullable=True)


class Receta(Base):
    __tablename__ = "receta"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nombre = Column(String, nullable=False)
    ingredientes = Column(String, nullable=False)  # Store as a comma-separated string
    instrucciones = Column(String, nullable=False)
    code = Column(String, nullable=False)


class CalificacionReceta(Base):
    __tablename__ = "calificacion_receta"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    valor = Column(Integer, nullable=False)
    id_calificador = Column(Integer, ForeignKey("user.id"), nullable=False)
    id_receta = Column(Integer, ForeignKey("receta.id"), nullable=False)


class Comentario(Base):
    __tablename__ = "comentario"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    comentario = Column(String, nullable=False)
    id_usuario = Column(Integer, ForeignKey("user.id"), nullable=False)
    id_receta = Column(Integer, ForeignKey("receta.id"), nullable=False)
    respuesta_de = Column(Integer, ForeignKey("comentario.id"), nullable=True)
<<<<<<< HEAD
    url_foto = Column(String, nullable=True)


class Foto(Base):
    __tablename__ = "foto"
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    url = Column(String, nullable=False)
    id_receta = Column(Integer, ForeignKey("receta.id"), nullable=True)
    id_usuario = Column(Integer, ForeignKey("user.id"), nullable=False)
    id_comentario = Column(Integer, ForeignKey("comentario.id"), nullable=True)

=======
>>>>>>> dev
