from datetime import datetime
from pydantic import BaseModel

class CommentResponse(BaseModel):
    id: int
    username: str
    text: str

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "username": "Juan",
                "text": "Me quedaron súper esponjosos!"
            }
        }

