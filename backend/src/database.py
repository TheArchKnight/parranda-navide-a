from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

# URL de conexión a PostgreSQL
DATABASE_URL = "postgresql://parranda:navidad@localhost:5432/parranda-navideña"

# Crear el motor de conexión
engine = create_engine(DATABASE_URL)

# Crear una sesión de base de datos
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Definir la base para los modelos
Base = declarative_base()
