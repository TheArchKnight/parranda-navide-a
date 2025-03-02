from datetime import timedelta
from fastapi import Depends, HTTPException
from src import auth, crud, schemas
from sqlalchemy.orm import Session

from src.database import get_db

class UserService():
    def __init__(self):
        pass

    def crear_user(self,user: schemas.UserCreate, db: Session = Depends(get_db)):
        db_user = crud.get_user_by_email(db, user.email)
        if db_user:
            raise HTTPException(status_code=400, detail="User already registered.")
        return crud.create_user(db, user)
    def login_user(self,request: schemas.LoginRequest, db: Session = Depends(get_db)):
        user = crud.get_user_by_email(db, request.email)
        if not user or not auth.verify_password(request.password, user.password):
            raise HTTPException(status_code=400, detail="Wrong credentials.")

        access_token = auth.create_access_token(
            data={"sub": user.email},
            expires_delta=timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES))
        return {"access_token": access_token, "token_type": "bearer"}
