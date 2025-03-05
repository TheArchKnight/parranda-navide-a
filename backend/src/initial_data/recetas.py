from src.models import Receta  # Import your Receta model
from src.repository.receta import RecetaRepository

# Sample data
initial_recetas = [
    Receta(
        id=1,
        nombre="Natilla",
        ingredientes="1 litro de leche, 1 taza de fécula de maíz (maicena), 1 panela rallada o 1 taza de azúcar morena, "
            "1 rama de canela, 1 cucharadita de esencia de vainilla, 1 cucharadita de mantequilla, "
            "Queso rallado y coco rallado (opcional)",
        instrucciones="Disolver la maicena en una parte de la leche fría. "
            "En una olla, calentar la leche restante con la panela rallada y la canela hasta que se disuelva. "
            "Agregar la mezcla de maicena y cocinar a fuego medio, revolviendo constantemente. "
            "Cuando espese, retirar del fuego y agregar la vainilla y la mantequilla. "
            "Verter en un molde y dejar enfriar antes de servir. "
            "Opcional: decorar con coco rallado o queso rallado.",
        code="NAT001"
    ),
    Receta(
        id=2,
        nombre="Buñuelos",
        ingredientes="1 taza de almidón de yuca, 1 taza de queso costeño rallado, 1 huevo, "
            "1 cucharada de azúcar, 1 cucharadita de polvo de hornear, "
            "Leche (cantidad necesaria), Aceite para freír",
        instrucciones="Mezclar el almidón, el queso, el huevo, el azúcar y el polvo de hornear. "
            "Agregar leche poco a poco hasta obtener una masa suave. "
            "Formar bolitas y freír en aceite caliente hasta que estén doradas. "
            "Escurrir en papel absorbente y servir calientes.",
        code="BUN002"
    ),
    Receta(
        id=3,
        nombre="Lechona",
        ingredientes="1 pierna de cerdo (5 kg aproximadamente), 1 kg de arroz, 500 g de arveja amarilla, "
            "2 cebollas largas picadas, 1 cabeza de ajo, Sal, pimienta y comino al gusto",
        instrucciones="Marinar la carne de cerdo con ajo, cebolla, sal y especias por 24 horas. "
            "Preparar el arroz con las arvejas y las especias. "
            "Rellenar la pierna de cerdo con la mezcla y hornear por 4 horas. "
            "Servir caliente acompañado de arepa blanca.",
        code="LEC003"
    )
]


# Insert initial data
def add_recetas(session):
    receta_repo = RecetaRepository()
    for receta in initial_recetas:
        search = receta_repo.get(session, receta.id)
        
        if not search:
            session.add(receta)
        else:
            print(f"Receta {receta.nombre} already exists in the database.")
    session.commit()
    print("Initial recetas added successfully.")
    return
    
