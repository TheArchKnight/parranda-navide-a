from src.models import Foto as FotoModel
from src.repository.generic_repository import GenericRepository


class FotoRepository(GenericRepository[FotoModel]):
    def __init__(self):
        super().__init__(FotoModel)