
from src.models import User
from src.repository.generic_repository import GenericRepository
class UserRepository(GenericRepository[User]):
    def __init__(self):
        super().__init__(User)

