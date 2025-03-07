from fastapi import APIRouter, Depends, HTTPException, File, UploadFile, Form
from src import schemas, crud
from sqlalchemy.orm import Session
from src.database import get_db
from src.services.user import UserService
from pydantic import EmailStr
from src import auth
user_service = UserService()
router = APIRouter()


@router.post("/register/", response_model=schemas.UserResponse,
             summary="Register a new user", description="Creates a new user \
          account with a name, email, and optional profile picture. \
          Returns the created user details.")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    try:
        return user_service.create_user(user, db)
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/login/", response_model=schemas.TokenResponse,
             summary="Login user", description="Authenticates a user with an \
          email and password, returning a JWT token.")
def login_user(request: schemas.LoginRequest, db: Session = Depends(get_db)):
    try:
        return user_service.login_user(request, db)
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.put("/users/", response_model=schemas.UserResponse)
def update_user(user_update: schemas.UserUpdate,
                db: Session = Depends(get_db),
                token_verify: schemas.UserResponse = Depends(auth.get_current_user)):
    try:
        return user_service.update_user(user_update, db)
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.put("/users/profile_picture", response_model=schemas.UserResponse)
async def update_profile_picture(
    id: str = Form(...), profile_picture: UploadFile = File(...),
    token_verify: schemas.UserResponse = Depends(auth.get_current_user),
    db: Session = Depends(get_db)
):
    try:
        # Upload the file and get the URL
        file_data = await user_service.upload_file(id, profile_picture)
        file_url = file_data["url"]

        # Create a UserUpdate schema with only the updated profile picture URL
        user_update = schemas.UserUpdate(id=int(id),
                                         url_profile_picture=file_url)

        # Update the user record
        return user_service.update_user(user_update, db)

    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/users/password", response_model=dict)
def update_password(password_update: schemas.PasswordUpdate,
                    token_verify: schemas.UserResponse = Depends(auth.get_current_user),
                    db: Session = Depends(get_db)):
    try:
        return user_service.update_password(password_update, db)
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/users/send_mail")
async def send_mail(request: schemas.Mail, db: Session = Depends(get_db),
                    token_verify: schemas.UserResponse = Depends(auth.get_current_user)):
    try:
        user = crud.get_user_by_email(db, request.recipient, False)
        if user:
            return await user_service.send_mail(request.recipient,
                                                request.subject,
                                                request.message)
        raise HTTPException(status_code=409, detail="User already registered.")
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/users/forgotPassword")
async def send_password(email: EmailStr,
                        db: Session = Depends(get_db)):
    try:
        result = await user_service.forgot_password(email, db)
        return result
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
