

# Parranda navideña

  

## Producto

  

Crear una plataforma digital que capture la magia y el espíritu de la Navidad, permitiendo a los usuarios disfrutar de las tradiciones, gastronomía, música y actividades típicas de la temporada de diciembre de manera inmersiva e interactiva.

  

## Descripción

  

La aplicación navideña busca ser el epicentro de experiencias relacionadas con la Navidad y el Año Nuevo, incluyendo actividades tradicionales, recetas gastronómicas, villancicos, rituales, y música típica. El objetivo es unir a las personas a través de una experiencia interactiva, fomentando la conexión con las costumbres navideñas.

  

## Requerimientos

### 1. **Registro y loggeo**
- El usuario debe poder registrarse en la app.
- El usuario debe poder loggearse con un usuario y contraseña para navegar.
- El usuario debe poder recuperar su contraseña.

### 2. **Edición de pefil de usuario**
- El usuario debe poder editar su perfil de usuario luego de haberse registrado.
- El usuario debe porder cambiar su contraseña previamente establecida.

### 3. **Eventos principales**
- El usuario debe poder interactuar con una interfaz principal donde se llevan a cabo todos los eventos navideños.
- El usuario debe poder elegir que evento disfrutar.

#### 3.1. **Reproducción de audio**
- El usuario debe poder reproducir audios(desde urls), villancicos o canciones.

#### 3.2. **Novenas Virtuales**
- El usuario debe poder simular novenas mediante animaciones y efectos.
- El usuario debe poder leer oraciones navideñas. 
- El usuario debe poder reproducir villancicos mientras ocurre una novena.


#### 3.3. **Juegos y Rituales de Año Nuevo**
- El usuario debe poder llevar a cabo los principales rituales y eventos navideños.
- El usuario debe poder simular la quema del año viejo.
- El usuario debe poder simular el ritual de las 12 uvas.
- El usuario debe poder simular la entrega de regalos.
- El usuario debe poder incluir "agueros" como ropa amarilla, salir con maleta.

#### 3.4. **Parrandas Virtuales**
- El usuario debe poder disfrutar de parrandas virtuales.
- El usuario debe poder escuchar las canciones clasicas para navidad en colombia.
- En toda parranda navideña debe sonar la canción de aguila roja.

### 4. **Recetas Colombianas**
- El usuario debe poder compartir sus recetas navideñas.
- El usuario debe poder interactuar con  las recetas de otros usuarios(visualizar,comentar,calificar).
- El usuario debe poder modificar sus recetas(CRUD).


  

## Requerimientos no funcionales.
- **Multidispositivo:** El sitio debe ser accesible desde dispositivos móviles, tablets y desktops.
- **Interactividad:** Animaciones fluidas para actividades como "prender velas" y "quema del Año Viejo".
- **Personalización:** Perfiles de usuario para guardar recetas, fotos y listas de reproducción.
- **Rendimiento:** Carga rápida de contenido multimedia como música y videos.

## Modelo de Datos

#### 1. **Usuario**
- Nombre
- Correo Electrónico
- Contraseña

#### 2. **Receta**
- Nombre de la Receta
- Ingredientes (lista de texto)
- Instrucciones (texto largo)
- Autor (referencia a Usuario)
- Fotos Subidas por la Comunidad (lista de URLs)
- Calificación(Promedio de todas sus calificaciones)


#### 3. **Calificaion**
- Valor
- Calificador(Referencia a Usuario)
- Receta(Referencia a receta)

#### 3. **Actividad**
- Nombre de la Actividad
- Descripción (texto largo)
- Tipo (Novena, Ritual, Juego, Parranda)
- Animación Asociada (URL o archivo multimedia)

#### 4. **Música**
- Nombre de la Canción
- Artista
- Género
- Tipo(Villancico,canción)
- Archivo de Audio (URL)
----