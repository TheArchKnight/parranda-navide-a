from src.dtos.add_calificacion import AddCalificacion
from src.dtos.calificacion_response import CalificacionResponse
from src.repository.calificacion_receta import CalificacionRecetaRepository
from fastapi import HTTPException


class CalificacionRecetasService:
    def __init__(self):
        self.calificacion_recetas_repository = CalificacionRecetaRepository()

    def add_recipe_rating(self, db, calificacion_receta: AddCalificacion):
        rating = self.calificacion_recetas_repository.get_recipe_rating_by_user(db,
                                                                                calificacion_receta.id_calificador,
                                                                                calificacion_receta.id_receta)
        if rating:
            return self.calificacion_recetas_repository.update(db, calificacion_receta)
        return self.calificacion_recetas_repository.add(db, calificacion_receta)

    def get_recipe_rating_by_recipe(self, db, id_recipe) -> CalificacionResponse:
        ratings = self.calificacion_recetas_repository.get_recipe_rating_by_recipe(db, id_recipe)
        print("ratings", ratings)
        total = 0
        count = 0
        for rating in ratings:
            total += rating.valor
            count += 1

        if count == 0:
            return CalificacionResponse(
                total=0,
                promedio=0,
                votes=0
            )
        return CalificacionResponse(
            total=total,
            promedio=round(total/count, 1),
            votes=count
        )

    def get_user_rating(self, db, id_recipe, id_user):
        rating = self.calificacion_recetas_repository.get_recipe_rating_by_user(db, id_user, id_recipe)
        if not rating:
            return HTTPException(status_code=404, detail="No rating")
        return rating
