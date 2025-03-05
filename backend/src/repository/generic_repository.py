from typing import TypeVar, Generic, List, Optional
from sqlalchemy.orm import Session

T = TypeVar('T')


class GenericRepository(Generic[T]):
    def __init__(self, model: T):
        self.model = model

    def add(self, session: Session, entity: T) -> T:
        db_obj = self.model(**entity.model_dump())
        session.add(db_obj)
        session.add(db_obj)
        session.commit()
        session.refresh(db_obj)
        return db_obj

    def get(self, session: Session, entity_id: int) -> Optional[T]:
        return session.query(self.model).filter(self.model.id == entity_id).first()

    def get_all(self, session: Session) -> List[T]:
        return session.query(self.model).all()

    def update(self, session: Session, entity: T) -> T:
        db_obj = session.query(self.model).filter_by(
            id_calificador=entity.id_calificador,
            id_receta=entity.id_receta).first()
        if db_obj:
            for key, value in entity.model_dump().items():
                setattr(db_obj, key, value)  # Update fields dynamically

            session.commit()
            session.refresh(db_obj)  # Ensure the object is fresh
            return db_obj
        else:
            raise ValueError("Object not found")

    def delete(self, session: Session, entity_id: int) -> None:
        entity = self.get(session, entity_id)
        if entity:
            session.delete(entity)
            session.commit()
