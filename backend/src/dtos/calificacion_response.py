from pydantic import BaseModel


class CalificacionResponse(BaseModel):
    total: int
    promedio: float
    votes: int
