from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.database import get_db
from src.dtos.add_calificacion import AddCalificacion
from src.dtos.calificacion_response import CalificacionResponse
from src.services.calificacion_recetas import CalificacionRecetasService
from src.schemas import UserResponse
from src.auth import get_current_user

router = APIRouter()


@router.get("/calificacion_recetas/{id_recipe}",
            response_model=CalificacionResponse,
            summary="Get all calificacion_recetas",
            description="Returns all calificacion_recetas \
          from the database.")
def get_recipe_rating_by_recipe(id_recipe: int, db: Session = Depends(get_db),
                                token_verify: UserResponse = Depends(get_current_user)):
    calificacion_recetas_service = CalificacionRecetasService()
    try:
        return calificacion_recetas_service.get_recipe_rating_by_recipe(
            db, id_recipe)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/calificacion_recetas/", summary="Create a calificacion_recetas",
             description="Creates a new calificacion_recetas in the database.")
def add_recipe_rating(calificacion_receta: AddCalificacion,
                      db: Session = Depends(get_db),
                      token_verify: UserResponse = Depends(get_current_user)):
    calificacion_recetas_service = CalificacionRecetasService()
    try:
        return calificacion_recetas_service.add_recipe_rating(
            db, calificacion_receta)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/calificacion_receta_user/")
def get_user_recipe_rating(id_recipe: int, id_user: int, db: Session = Depends(get_db),
                           token_verify: UserResponse = Depends(get_current_user)):
    calificacion_recetas_service = CalificacionRecetasService()
    try:
        return calificacion_recetas_service.get_user_rating(db, id_recipe, id_user)
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
