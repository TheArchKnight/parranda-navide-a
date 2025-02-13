
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from src import models, crud, schemas, database
import auth
from datetime import timedelta

app = FastAPI()

models.Base.metadata.create_all(bind=database.engine)


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/usuarios/", response_model=schemas.UsuarioResponse)
def crear_usuario(usuario: schemas.UsuarioCreate, db: Session = Depends(get_db)):
    db_usuario = crud.get_usuario_by_correo(db, usuario.correo)
    if db_usuario:
        raise HTTPException(status_code=400, detail="Correo ya registrado")
    return crud.create_usuario(db, usuario)


@app.post("/login/")
def login_usuario(correo: str, contraseña: str, db: Session = Depends(get_db)):
    usuario = crud.get_usuario_by_correo(db, correo)
    if not usuario or not auth.verify_password(contraseña, usuario.contraseña):
        raise HTTPException(status_code=400, detail="Credenciales incorrectas")

    access_token = auth.create_access_token(
        data={"sub": usuario.correo}, expires_delta=timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    return {"access_token": access_token, "token_type": "bearer"}
