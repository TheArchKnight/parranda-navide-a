from typing import Optional

from pydantic import BaseModel


class FotoCreate(BaseModel):
    url: str
    id_receta: Optional[int] = None
    id_usuario: int
    id_comentario: Optional[int] = None
