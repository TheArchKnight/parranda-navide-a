from src.dtos.comments import Comentario
from src.dtos.comments_response import CommentResponse
from src.repository.comments import CommentsRepository
from sqlalchemy.orm import Session
from typing import List

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
                text=comment.comentario,
                image=comment.url_foto
            )
            response.append(comment_response)
        return response

    def get_comments(self, db: Session) -> List[CommentResponse]:
        self.comments_repository = CommentsRepository()
        all_comments = self.comments_repository.get_all(db)

        return self._comments_to_response(db, all_comments)

    def create_comment(self, db: Session, comment_data: Comentario):
        self.comments_repository = CommentsRepository()
        return self.comments_repository.add(db, comment_data)

    def get_comments_by_recipe(self, db: Session, code: int):
        self.comments_repository = CommentsRepository()
        comments = self.comments_repository.get_comments_by_recipe(db, code)
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

    def delete_comment(self, db: Session, comment_id: int):
        comments_repository = CommentsRepository()
        comment = comments_repository.get(db, comment_id)
        if not comment:
            raise Exception("Comment not found")
        comments_repository.delete(db, comment_id)
        return "Comment deleted"
