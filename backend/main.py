from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from src import crud, schemas, auth
from src.database import get_db
from datetime import timedelta
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",  # Frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


@app.post("/register/", response_model=schemas.UserResponse,
          summary="Register a new user", description="Creates a new user \
          account with a name, email, and optional profile picture. \
          Returns the created user details.")
def crear_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="User already registered.")
    return crud.create_user(db, user)


@app.post("/login/", response_model=schemas.TokenResponse,
          summary="Login user", description="Authenticates a user with an \
          email and password, returning a JWT token.")
def login_user(request: schemas.LoginRequest, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, request.email)
    if not user or not auth.verify_password(request.password, user.password):
        raise HTTPException(status_code=400, detail="Wrong credentials.")

    access_token = auth.create_access_token(
        data={"sub": user.email},
        expires_delta=timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES))
    return {"access_token": access_token, "token_type": "bearer"}
