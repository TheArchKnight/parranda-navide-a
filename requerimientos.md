

# Parranda navideña

  

## Producto

  

Crear una plataforma digital que capture la magia y el espíritu de la Navidad, permitiendo a los usuarios disfrutar de las tradiciones, gastronomía, música y actividades típicas de la temporada de diciembre de manera inmersiva e interactiva.

  

## Descripción

  

La aplicación navideña busca ser el epicentro de experiencias relacionadas con la Navidad y el Año Nuevo, incluyendo actividades tradicionales, recetas gastronómicas, villancicos, rituales, y música típica. El objetivo es unir a las personas a través de una experiencia interactiva, fomentando la conexión con las costumbres navideñas.

  

## Requerimientos

  

### 1. **Novenas Virtuales**

  

El usuario debe poder leer oraciones, escuchar villancicos y simular encender velas


### 2. **Recetas Colombianas**

  

El usuario debe poder ver todas las recetas tradicionales colombianas, comentarlas y calificarlas

  

### 3. **Juegos y Rituales de Año Nuevo**

  

- Incluir actividades típicas con animaciones explicativas, tales como:

- La quema del “Año Viejo”.

- El ritual de las doce uvas.

- Otros rituales populares (como usar ropa interior amarilla, salir con la maleta, etc.).

  

### 4. **Salón de Parrandas Virtual**

  

El usuario debe poder crear un espacio de fiesta virtual que incluya un "radio" para escuchar música tropical y tradicional de diciembre, que suene la de aguila roja.

  

## Requerimientos Técnicos

  

- **Multidispositivo:** El sitio debe ser accesible desde dispositivos móviles, tablets y desktops.

- **Interactividad:** Animaciones fluidas para actividades como "prender velas" y "quema del Año Viejo".

- **Personalización:** Perfiles de usuario para guardar recetas, fotos y listas de reproducción.

- **Rendimiento:** Carga rápida de contenido multimedia como música y videos.

 

## Modelo de Datos

  

### Modelo de datos

  

#### 1. **Usuario**

- Nombre

- Correo Electrónico

- Contraseña

- Recetas Guardadas (referencia a Recetas)
 

#### 2. **Receta**

- Nombre de la Receta

- Ingredientes (lista de texto)

- Instrucciones (texto largo)

- Autor (referencia a Usuario)

- Fotos Subidas por la Comunidad (lista de URLs)

- Calificaciones (número)


  

#### 3. **Actividad**



- Nombre de la Actividad

- Descripción (texto largo)

- Tipo (Novena, Ritual, Juego)

- Animación Asociada (URL o archivo multimedia)

  

#### 4. **Música**

- Nombre de la Canción

- Artista

- Género
- Tipo(Villancico,canción)

- Archivo de Audio (URL)
----
  

