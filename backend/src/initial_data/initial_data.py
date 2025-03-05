from src.initial_data.recetas import add_recetas
from src.database import SessionLocal

def add_initial_data():
    session = SessionLocal()
    add_recetas(session)
    session.commit()
    session.close()
