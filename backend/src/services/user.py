from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from fastapi import Depends, HTTPException, UploadFile, File
from src import auth, crud, schemas
from sqlalchemy.orm import Session
from src.auth import hash_password
from src.database import get_db
from datetime import timedelta
from pydantic import EmailStr
from dotenv import load_dotenv
import os
import shutil


load_dotenv()


class UserService():

    mail_conf = ConnectionConfig(
        MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
        MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
        MAIL_FROM=os.getenv("MAIL_FROM"),
        MAIL_PORT=int(os.getenv("MAIL_PORT", 587)),
        MAIL_SERVER=os.getenv("MAIL_SERVER"),
        MAIL_FROM_NAME=os.getenv("MAIL_FROM_NAME"),
        MAIL_STARTTLS=True,
        MAIL_SSL_TLS=False,
        USE_CREDENTIALS=True,
        VALIDATE_CERTS=True)

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

    async def send_mail(self, email: EmailStr, subject: str, message: str):
        try:
            message_schema = MessageSchema(
                subject=subject,
                recipients=[email],
                body=message,
                subtype=MessageType.html
            )
            fm = FastMail(self.mail_conf)
            await fm.send_message(message_schema)

            return {"message": "Mail sent successfully."}
        except Exception as e:
            return {"error": f"Failed to send email: {str(e)}"}
