from pathlib import Path
from fastapi import FastAPI
from src.database import create_db
from fastapi.middleware.cors import CORSMiddleware
from src.routes.user import router as user_router
from src.routes.comments import router as comments_router
from src.routes.calificacion_recetas import router as calificacion_recetas_router

from src.initial_data.initial_data import add_initial_data
from fastapi.staticfiles import StaticFiles
import os
import sys

project_root = Path(__file__).parent.parent
sys.path.append(str(project_root))


app = FastAPI()

origins = [
    "http://localhost:5173",  # Frontend URL
]

# Directorio para almacenar imágenes
UPLOAD_FOLDER = "media/profile_pictures"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Servir imágenes estáticas
app.mount("/media", StaticFiles(directory="media"), name="media")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


create_db()
add_initial_data()
app.include_router(user_router, tags=["User"])
app.include_router(comments_router, tags=["Comments"])
app.include_router(calificacion_recetas_router, tags=["CalificacionRecetas"])


@app.get("/")
async def health_check():
    return {"status": 201, "health": "ok"}
