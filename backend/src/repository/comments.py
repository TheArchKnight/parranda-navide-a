from sqlalchemy.orm import Session

from src.models import Comentario as ComentarioModel
from src.repository.generic_repository import GenericRepository

class CommentsRepository(GenericRepository[ComentarioModel]):
    def __init__(self):
        super().__init__(ComentarioModel)

    def get_comments_by_recipe(self, db: Session, recipe_id: int):
        return db.query(self.model).filter(self.model.id_receta == recipe_id).all()
