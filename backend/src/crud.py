from sqlalchemy.orm import Session
from src.models import User
from src.schemas import UserCreate
from src.auth import hash_password


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


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
