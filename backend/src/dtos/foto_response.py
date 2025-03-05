from typing import Optional

from pydantic import BaseModel


class FotoResponse(BaseModel):
    id: int
    url: str
