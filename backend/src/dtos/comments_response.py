from datetime import datetime
from typing import Optional
from pydantic import BaseModel

class CommentResponse(BaseModel):
    id: int
    username: str
    text: str
    image: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "username": "Juan",
                "text": "Me quedaron súper esponjosos!",
                "image": "https://example.com/profile.jpg"
            }
        }

