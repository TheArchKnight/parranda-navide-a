from datetime import timedelta
from fastapi import Depends, HTTPException, UploadFile, File
from src import auth, crud, schemas
from sqlalchemy.orm import Session
from src.database import get_db
from src.auth import hash_password
import os
import shutil


class UserService():
    def __init__(self):
        pass

    def create_user(self, user: schemas.UserCreate,
                    db: Session = Depends(get_db)):
        db_user = crud.get_user_by_email(db, user.email, False)
        if db_user:
            raise HTTPException(status_code=409,
                                detail="User already registered.")
        return crud.create_user(db, user)

    def login_user(self, request: schemas.LoginRequest,
                   db: Session = Depends(get_db)):
        user = crud.get_user_by_email(db, request.email)
        if not auth.verify_password(request.password, user.password):
            raise HTTPException(status_code=400, detail="Wrong credentials")

        access_token = auth.create_access_token(
            data={"sub": user.email},
            expires_delta=timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
        )

        # Convert user object to dictionary and add the access token
        user_data = user.__dict__.copy()
        user_data["access_token"] = access_token
        user_data["token_type"] = "bearer"

        return user_data

    def update_password(self, password_update: schemas.PasswordUpdate,
                        db: Session = Depends(get_db)):
        user = crud.get_user_by_id(db, password_update.id)
        user.password = hash_password(password_update.new_password)
        db.commit()
        return {"message": "Contraseña actualizada correctamente"}

    def update_user(self, request: schemas.UserUpdate,
                    db: Session = Depends(get_db)):
        user = crud.get_user_by_id(db, request.id)
        update_data = request.dict(exclude_unset=True)
        for key, value in update_data.items():
            setattr(user, key, value)
        db.commit()
        db.refresh(user)
        return user

    async def upload_file(self, user_id: str, file: UploadFile = File(...)):
        from main import UPLOAD_FOLDER
        user_folder = os.path.join(UPLOAD_FOLDER, user_id)
        os.makedirs(user_folder, exist_ok=True)
        file_path = os.path.join(user_folder, file.filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return {"url": f"http://localhost:8000/media/profile_pictures/\
{user_id}/{file.filename}"}
