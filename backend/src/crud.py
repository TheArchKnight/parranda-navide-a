from sqlalchemy.orm import Session
from src.models import User
from src.schemas import UserCreate
from src.auth import hash_password
from fastapi import HTTPException, status


def _user_not_found(user, should_raise=True):
    if not user and should_raise:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="User not found")
    if not user and not should_raise:
        return False
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
