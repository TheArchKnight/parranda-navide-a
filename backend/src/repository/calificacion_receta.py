from src.models import CalificacionReceta
from src.repository.generic_repository import GenericRepository


class CalificacionRecetaRepository(GenericRepository[CalificacionReceta]):
    def __init__(self):
        super().__init__(CalificacionReceta)

    def get_recipe_rating_by_user(self, db, id_user, id_recipe):
        return db.query(self.model).filter(self.model.id_usuario == id_user, self.model.id_receta == id_recipe).first()
    
    def get_recipe_rating_by_recipe(self, db, id_recipe):
        return db.query(self.model).filter(self.model.id_receta == id_recipe).all()