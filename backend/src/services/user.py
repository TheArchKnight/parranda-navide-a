from datetime import timedelta
from fastapi import Depends, HTTPException
from src import auth, crud, schemas
from sqlalchemy.orm import Session
from src.database import get_db
from src.auth import hash_password


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
            expires_delta=timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES))
        return {
            "access_token": access_token,
            "token_type": "bearer",
            "id": user.id,
            "email": user.email,
            "name": user.name
        }

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
