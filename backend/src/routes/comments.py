from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.database import get_db
from src.dtos.comments import Comentario
from src.dtos.comments_response import CommentResponse
from src.services.comments import CommentsService


router = APIRouter()


@router.get("/comments/", response_model=list[CommentResponse],
            summary="Get all comments", description="Returns all comments \
          from the database.")
def get_comments(db: Session = Depends(get_db)):
    comments_service = CommentsService()
    try:
        return comments_service.get_comments(db)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/comments/", summary="Create a comment",
             description="Creates a new comment in the database.")
def create_comment(comment_data: Comentario, db: Session = Depends(get_db)):
    comments_service = CommentsService()
    try:
        return comments_service.create_comment(db, comment_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/comments/{code}", response_model=list[CommentResponse],
            summary="Get comments by recipe",
            description="Returns all comments for a recipe.")
def get_comments_by_recipe(code: int, db: Session = Depends(get_db)):
    comments_service = CommentsService()
    try:
        return comments_service.get_comments_by_recipe(db, code)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.put("/comments/", summary="Update a comment",
            description="Updates a comment in the database.")
def update_comment(comment_data: CommentResponse,
                   db: Session = Depends(get_db)):
    comments_service = CommentsService()
    try:
        return comments_service.update_comment(db, comment_data)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.delete("/comments/{comment_id}", summary="Delete a comment",
               description="Deletes a comment from the database.")
def delete_comment(comment_id: int, db: Session = Depends(get_db)):
    comments_service = CommentsService()
    try:
        return comments_service.delete_comment(db, comment_id)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
