## PARRANDA NAVIDEÑA

#### **Producto**

Diseñar y desarrollar una plataforma digital que encapsule la magia de la Navidad, brindando a los usuarios una experiencia inmersiva que les permita conectarse con las tradiciones, la música, las recetas, y las actividades típicas de la temporada decembrina de una manera interactiva y entretenida.

#### **Descripción**

La aplicación tiene como objetivo convertirse en el punto de encuentro digital para celebrar las festividades navideñas y de Año Nuevo. Ofrecerá una amplia variedad de funcionalidades, desde novenas virtuales animadas y recetas tradicionales colombianas, hasta actividades interactivas como rituales y música. Este ecosistema digital está diseñado para fomentar la unión entre las personas, fortalecer las tradiciones y disfrutar la esencia de la Navidad desde cualquier dispositivo.

----------

### **Requerimientos Funcionales**

#### **1. Autenticación y Gestión de Usuarios**

1.1. **Registro de usuarios**:

-   Los usuarios deben poder registrarse proporcionando nombre, correo electrónico y contraseña. 

1.2. **Inicio de sesión**:

-   Autenticación segura mediante usuario y contraseña. 

1.3. **Recuperación de contraseña**:

-   Funcionalidad para recuperación de acceso a través del correo registrado. 

1.4. **Gestión de perfil**:

-   Posibilidad de editar información personal (nombre, correo, foto de perfil).
-   Cambio de contraseña mediante verificación.

#### **2. Experiencia Interactiva**

2.1. **Eventos principales**:

-   Interfaz central donde se muestran las actividades destacadas de la temporada.
-   Posibilidad de seleccionar entre diversas actividades.

#### **3. Actividades**

**3.1. Novenas Virtuales**:

-   Animaciones inmersivas para simular novenas tradicionales.
-   Acceso a lecturas de oraciones y reproducción automática de villancicos.

**3.2. Rituales Navideños**:

-   Visualizar el ritual explicativo de las doce uvas para comprender las tradiciones de Año Nuevo.
-   Visualizar la quema del Año Viejo virtualmente con animaciones para recrear la tradición.
-   Visualizar el ritual de prender velas para simbolizar la tradición navideña.

**3.3. Radio Navideña**:

-   Espacio para reproducir listas de canciones típicas de diciembre en Colombia.
-   El usuario podrá seleccionar 2 tipos de reproduccion de la música: lista continua y modo radio:
  - La reproduccion de modo radio seleccionará  musica de manera aleatoria de diferentes listas, permitiendo a los usuarios disfrutar de variedad.
-   Inclusión de efectos visuales festivos.

**3.4. Recetas Colombianas**:

-   Plataforma para visualizar recetas navideñas.
-   Estas recetas son publicadas en "posts". Cada post tiene instrucciones paso a paso así como imagenes del plato ya preparado.
-   Posibilidad de comentar y calificar recetas propuestas en la aplicación.
-   Espacio para subir fotos de las preparaciones de los usuarios e interactuar entre ellos por medio de comentarios.

----------

### **Requerimientos No Funcionales**

1.  **Multidispositivo**:
    -   Compatibilidad con dispositivos móviles, tablets y desktops.
2.  **Interactividad**:
    -   Animaciones suaves para actividades visuales (e.g., prender velas, quema del Año Viejo).
3.  **Personalización**:
    -   Perfiles de usuario para marcar recetas como favoritos y fotos.
4.  **Rendimiento**:
    -   Optimización para la carga rápida de contenido multimedia.
5.  **Seguridad**:
    -   Protección de datos de usuario mediante cifrado y prácticas seguras de desarrollo.

----------

### **Modelo de Datos**

#### **Entidades y Relaciones**

1.  **Usuario**
    
    -   `id_usuario` (PK)
    -   `nombre`
    -   `correo`
    -   `contraseña`
    -   `url_foto_perfil`

2.  **Receta**
    
    -   `id_receta` (PK)
    -   `nombre`
    -   `ingredientes` (Lista)
    -   `instrucciones` (Texto largo)
    -   Relación 1:N con **Foto**.
    -   Relación 1:N con **Calificación_Receta**.

3.  **Foto**
    
    -   `id_foto` (PK)
    -   `id_receta` (FK->Receta)
    -   `id_comentario` (FK->Comentario)
    -   `url_imagen`
    -   `fecha_subida`
    Nota: Una foto solo se puede relacionar con una receta o un comentario

4. **Comentario**
    -   `id` (PK)
    -   `comentario`
    -   `id_usuario ` (FK -> Usuario)
    -   `id_receta` (FK -> Receta)
    -   `respuesta_de` (FK -> Comentario) ¿Es respuesta de otro comentario?

5.  **Calificación_Receta**    
    -   `id_calificación` (PK)
    -   `valor` (Puntaje)
    -   `id_calificador` (FK -> Usuario)
    -   `id_receta` (FK -> Receta)
  
6.  **Actividad** 
    -   `id_actividad` (PK)
    -   `nombre`
    -   `descripción`
    -   `tipo` (Novena, Ritual, Radio)
    -   `animación_url`

7.  **Canción** 
    -   `id_canción` (PK)
    -   `nombre`
    -   `artista`
    -   `url_audio`
    -   `genero`

8. **Lista_Canciones**
    -   `id_lista` (PK)
    -   `nombre`
    -   `fecha_creacion`
    -   `tematica`
    -   Relacion N:M con **Cancion**
    -   Relacion N:M con Actividad

9. **Villancico**
    -   `id_villancico` (PK)
    -   `letra` Texto del villancico
    -   `id_cancion` (FK->Cancion) El villancico puede tener una cancion asociada

#### **Relaciones**

-   **Usuario - Receta**: Un usuario puede publicar varias recetas.
-   **Receta - Foto_Receta**: Una receta puede tener múltiples fotos asociadas.
-   **Novena - Canción**: Se pueden asociar varias canciones con cada novena.
-   **Usuario - Ritual**: Los usuarios interactúan con rituales mediante animaciones y simulaciones.
