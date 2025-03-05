import os
from sqlalchemy import create_engine, inspect
from sqlalchemy.orm import sessionmaker, declarative_base

# URL de conexión a PostgreSQL
DATABASE_URL = os.getenv("DATABASE_URL")

# Crear el motor de conexión
engine = create_engine(DATABASE_URL)

# Crear una sesión de base de datos
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


# Definir la base para los modelos
def create_db():
    """ Verifica qué tablas faltan y las crea sin afectar las existentes """
    inspector = inspect(engine)
    existing_tables = set(inspector.get_table_names())  # Tablas ya en la BD
    defined_tables = set(Base.metadata.tables.keys())   # Tablas definidas en los modelos

    missing_tables = defined_tables - existing_tables  # Tablas que faltan crear

    if missing_tables:
        print(f"Creating missing tables: {missing_tables}")
        Base.metadata.create_all(bind=engine)
        print("Database tables updated successfully.")
    else:
        print("All tables already exist. No changes needed.")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
