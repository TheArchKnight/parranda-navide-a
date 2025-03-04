from sqlalchemy.orm import Session
from src.models import User
from src.schemas import UserCreate
from src.auth import hash_password
from fastapi import HTTPException, status, File, UploadFile
import os
import shutil


def _user_not_found(user, should_raise=True):
    if not should_raise:
        return 0
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="User not found")
    return user


def get_user_by_email(db: Session, email: str, should_raise=True):
    user = db.query(User).filter(User.email == email).first()
    return _user_not_found(user, should_raise)


def get_user_by_id(db: Session, id: int):
    user = db.query(User).filter(User.id == id).first()
    return _user_not_found(user)


def create_user(db: Session, user: UserCreate):
    hashed_password = hash_password(user.password)
    db_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password,
        url_profile_picture=user.url_profile_picture
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


async def upload_file(user_id: str, file: UploadFile = File(...)):
    from main import UPLOAD_FOLDER
    user_folder = os.path.join(UPLOAD_FOLDER, user_id)
    os.makedirs(user_folder, exist_ok=True)
    file_path = os.path.join(user_folder, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"url": f"http://localhost:8000/media/profile_pictures/\
    {user_id}/{file.filename}"}
