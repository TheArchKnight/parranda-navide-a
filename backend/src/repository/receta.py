from sqlalchemy.orm import Session

from src.models import Receta
from src.repository.generic_repository import GenericRepository


class RecetaRepository(GenericRepository[Receta]):
    def __init__(self):
        super().__init__(Receta)

    def get_recipes_by_code(self, db: Session, code: str):
        return db.query(self.model).filter(self.model.code == code).first()
