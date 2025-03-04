from src.dtos.comments import Comentario
from src.dtos.comments_response import CommentResponse
from src.repository.comments import CommentsRepository
from sqlalchemy.orm import Session
from typing import List

from src.repository.receta import RecetaRepository
from src.repository.user import UserRepository

class CommentsService:

    def __init__(self):
        self.comments_repository = None
    
    def _comments_to_response(self, db, all_comments):
        user_repository = UserRepository()
        response = []
        print("all_comments", all_comments)
        for comment in all_comments:
            user = user_repository.get(db, comment.id_usuario)
            comment_response = CommentResponse(
                id=comment.id,
                username = user.name,
                text=comment.comentario
            )
            response.append(comment_response)
        return response


    def get_comments(self, db: Session)-> List[CommentResponse]: 
        self.comments_repository = CommentsRepository()
        all_comments = self.comments_repository.get_all(db)

        return self._comments_to_response(db, all_comments) 


    def create_comment(self, db: Session, comment_data: Comentario):
        self.comments_repository = CommentsRepository()
        return self.comments_repository.add(db, comment_data)


    def get_comments_by_recipe(self, db: Session, code: str):
        self.comments_repository = CommentsRepository()
        receta_repository = RecetaRepository()
        receta = receta_repository.get_recipes_by_code(db, code)
        if not receta:
            return []
        comments = self.comments_repository.get_comments_by_recipe(db, receta.id_receta)
        return self._comments_to_response(db, comments)
    
    def update_comment(self, db: Session, comment_data: Comentario):
        comments_repository = CommentsRepository()
        comment = comments_repository.get(db, comment_data.id)
        if not comment:
            raise Exception("Comment not found")
        comentario = Comentario(
            id=comment.id,
            id_receta=comment.id_receta,
            id_usuario=comment.id_usuario,
            comentario=comment_data.text
        )
        return comments_repository.update(db, comentario)