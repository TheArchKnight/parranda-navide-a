from sqlalchemy import Column, Integer, String
from src.database import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True,
                index=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    url_profile_picture = Column(String, nullable=True)
