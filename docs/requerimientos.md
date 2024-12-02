# PARRANDA NAVIDEÑA

#### **Producto**

Diseñar y desarrollar una plataforma digital que encapsule la magia de la Navidad, brindando a los usuarios una experiencia inmersiva que les permita conectarse con las tradiciones, la música, las recetas, y las actividades típicas de la temporada decembrina de una manera interactiva y entretenida.

#### **Descripción**

La aplicación tiene como objetivo convertirse en el punto de encuentro digital para celebrar las festividades navideñas y de Año Nuevo. Ofrecerá una amplia variedad de funcionalidades, desde novenas virtuales animadas y recetas tradicionales colombianas, hasta actividades interactivas como juegos, rituales y música. Este ecosistema digital está diseñado para fomentar la unión entre las personas, fortalecer las tradiciones y disfrutar la esencia de la Navidad desde cualquier dispositivo.

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

**2.1.1. Salón de Parrandas**:

-   Biblioteca musical con canciones tropicales y villancicos navideños.
-   Garantía de que suene la canción "Águila Roja" durante las parrandas.

**2.1.2. Novenas Virtuales**:

-   Animaciones inmersivas para simular novenas tradicionales.
-   Acceso a lecturas de oraciones y reproducción automática de villancicos.

**2.1.3. Juegos y Rituales de Año Nuevo**:

-   Juegos interactivos como el ritual de las doce uvas, quema del Año Viejo, y "agüeros" (ropa amarilla, maletas, etc.).
-   Simulador para la entrega de regalos navideños.

**2.1.4. Parrandas Virtuales**:

-   Espacio para reproducir listas de canciones típicas de diciembre en Colombia.
-   Inclusión de efectos visuales festivos.

**2.1.5. Recetas Tradicionales Colombianas**:

-   Plataforma para compartir recetas navideñas.
-   Posibilidad de visualizar, comentar y calificar recetas de la comunidad.
-   Espacio para subir fotos de las preparaciones.

----------

### **Requerimientos No Funcionales**

1.  **Multidispositivo**:
    -   Compatibilidad con dispositivos móviles, tablets y desktops.
2.  **Interactividad**:
    -   Animaciones suaves para actividades visuales (e.g., prender velas, quema del Año Viejo).
3.  **Personalización**:
    -   Perfiles de usuario para guardar recetas y fotos.
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
    -   Relación 1:N con **Receta** y **Foto_Receta**.
2.  **Novena**
    
    -   `id_novena` (PK)
    -   `título`
    -   `contenido` (Texto de la oración o villancico)
    -   `fecha_creación`
    -   Relación N:M con **Canción**.
3.  **Receta**
    
    -   `id_receta` (PK)
    -   `nombre`
    -   `ingredientes` (Lista)
    -   `instrucciones` (Texto largo)
    -   `id_autor` (FK -> Usuario)
    -   Relación 1:N con **Foto_Receta**.
    -   Relación 1:N con **Calificación_Receta**.
4.  **Foto_Receta**
    
    -   `id_foto` (PK)
    -   `id_receta` (FK)
    -   `id_usuario` (FK)
    -   `url_imagen`
    -   `fecha_subida`
5.  **Calificación_Receta**
    
    -   `id_calificación` (PK)
    -   `valor` (Puntaje)
    -   `id_calificador` (FK -> Usuario)
    -   `id_receta` (FK)
6.  **Ritual**
    
    -   `id_ritual` (PK)
    -   `nombre`
    -   `descripción`
    -   `animación_url`
7.  **Actividad**
    
    -   `id_actividad` (PK)
    -   `nombre`
    -   `descripción`
    -   `tipo` (Novena, Ritual, Parranda)
    -   `animación_url`
8.  **Canción**
    
    -   `id_canción` (PK)
    -   `nombre`
    -   `artista`
    -   `url_audio`

#### **Relaciones**

-   **Usuario - Receta**: Un usuario puede publicar varias recetas.
-   **Receta - Foto_Receta**: Una receta puede tener múltiples fotos asociadas.
-   **Novena - Canción**: Se pueden asociar varias canciones con cada novena.
-   **Usuario - Ritual**: Los usuarios interactúan con rituales mediante animaciones y simulaciones.
