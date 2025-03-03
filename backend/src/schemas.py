from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class UserBase(BaseModel):
    name: str
    email: EmailStr
    url_profile_picture: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "johndoe@example.com",
                "url_profile_picture": "https://example.com/profile.jpg"
            }
        }


class LoginRequest(BaseModel):
    email: EmailStr
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "johndoe@example.com",
                "password": "securepassword123"
            }
        }


class UserCreate(UserBase):
    password: str

    class Config:
        schema_extra = {
            "example": {
                "name": "John Doe",
                "email": "johndoe@example.com",
                "password": "securepassword123",
                "url_profile_picture": "https://example.com/profile.jpg"
            }
        }


class UserResponse(UserBase):
    id: int

    class Config:
        from_attributes = True
        schema_extra = {
            "example": {
                "id": 1,
                "name": "John Doe",
                "email": "johndoe@example.com",
                "url_profile_picture": "https://example.com/profile.jpg"
            }
        }


class TokenResponse(BaseModel):
    access_token: str
    token_type: str

    class Config:
        schema_extra = {
            "example": {
                "access_token": "jwt_token_example",
                "token_type": "bearer"
            }
        }


class UserUpdate(BaseModel):
    id: Optional[int] = None
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
    age: Optional[int] = None

    class Config:
        from_attributes = True  # For ORM compatibility


class PasswordUpdate(BaseModel):
    old_password: str = Field(..., min_length=6)
    new_password: str = Field(..., min_length=6)
    id: int
