
from typing import Optional

from pydantic import BaseModel


class Comentario(BaseModel):
    id: Optional[int] = None
    comentario: str
    id_usuario: int
    id_receta: int
    respuesta_de: Optional[int] = None  

    class Config:
        schema_extra = {
            "example": {
                "comentario": "Me quedaron súper esponjosos!",
                "id_usuario": 1,
                "id_receta": 1,
                "respuesta_de": 1
            }
        }