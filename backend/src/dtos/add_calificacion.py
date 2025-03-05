from pydantic import BaseModel


class AddCalificacion(BaseModel):
    valor: int
    id_calificador: int
    id_receta: int
