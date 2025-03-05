from src.dtos.foto_create import FotoCreate
from src.dtos.foto_response import FotoResponse
from src.repository.foto import FotoRepository


class FotoService:
    def __init__(self):
        self._foto_repository = FotoRepository()

    def create(self, foto: FotoCreate) -> FotoResponse:
        return self._foto_repository.add(foto)

    def get_by_id(self, foto_id: int) -> FotoResponse:
        return self._foto_repository.get(foto_id)
