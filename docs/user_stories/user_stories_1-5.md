# Historias de Usuario 

| **NOMBRE**                       | CU01 - Registro de usuario |  
|----------------------------------|---------------------------|                              
| **USUARIO**                      | Visitante de la plataforma |
| **DESCRIPCIÓN**                  | Como usuario, puedo registrarme proporcionando mi nombre, correo electrónico y contraseña para acceder a las funcionalidades de la aplicación. |
| **YO COMO**                      | Visitante de la plataforma que desea unirme a la comunidad navideña. |
| **NECESITO**                     | Registrarme proporcionando mis datos personales de forma segura. |
| **PARA**                         | Acceder a todas las funcionalidades de la plataforma. |
| **RELACIÓN CON OTRAS HISTORIAS** | Previa al inicio de sesión. |
| **PRECONDICIONES**               | - El visitante debe tener acceso a internet y un dispositivo compatible. <br> - El correo proporcionado debe ser válido. |
| **CRITERIOS DE ACEPTACIÓN**      | 1. El sistema permite ingresar nombre, correo y contraseña. <br> 2. El correo debe ser único y validado en formato. <br> 3. Se envía un mensaje de confirmación tras completar el registro. |
| **DEFINICIÓN DE HECHO (DoD)**    | 1. El usuario puede registrarse correctamente. <br> 2. Los datos se almacenan con seguridad en la base de datos. |
| **NOTAS ADICIONALES**            | - El usuario debe: <br>   1. Acceder a la página de registro desde el botón de "Registrarse". <br>   2. Completar los campos obligatorios (nombre, correo y contraseña). <br>   3. Confirmar el registro presionando el botón "Crear cuenta". <br>   4. Recibir un mensaje de éxito indicando que su registro ha sido completado. <br>   5. Confirmar su correo electrónico a través de un enlace enviado al correo proporcionado. |

---

| **NOMBRE**                       | CU02 - Inicio de sesión |  
|----------------------------------|---------------------------|  
| **USUARIO**                      | Usuario registrado |
| **DESCRIPCIÓN**                  | Como usuario, puedo iniciar sesión con mi correo electrónico y contraseña para acceder a mi perfil. |
| **YO COMO**                      | Usuario registrado que desea ingresar a la plataforma. |
| **NECESITO**                     | Iniciar sesión de manera segura usando mis credenciales. |
| **PARA**                         | Acceder a mi perfil y participar en las actividades. |
| **RELACIÓN CON OTRAS HISTORIAS** | Depende de "Registro de usuario". |
| **PRECONDICIONES**               | - El usuario debe estar registrado y recordar sus credenciales. |
| **CRITERIOS DE ACEPTACIÓN**      | 1. Validación correcta de correo y contraseña. <br> 2. Mensaje de error claro en caso de credenciales incorrectas. <br> 3. Implementación de límite de intentos para prevenir ataques de fuerza bruta. |
| **DEFINICIÓN DE HECHO (DoD)**    | 1. La sesión se inicia correctamente y permanece activa hasta su cierre. <br> 2. Las contraseñas están cifradas en la base de datos. |
| **NOTAS ADICIONALES**            | - El usuario debe: <br>   1. Acceder a la página de inicio de sesión desde el botón "Iniciar sesión". <br>   2. Ingresar su correo y contraseña en los campos correspondientes. <br>   3. Presionar el botón "Ingresar". <br>   4. Ser redirigido a la página principal de la plataforma si las credenciales son correctas.|

---

| **NOMBRE**                       | CU03 - Recuperación de contraseña |  
|----------------------------------|---------------------------------------------|
| **USUARIO**                      | Usuario registrado que olvidó su contraseña |
| **DESCRIPCIÓN**                  | Como usuario, puedo recuperar mi contraseña a través de un enlace enviado a mi correo electrónico para restablecer el acceso a mi cuenta. |
| **YO COMO**                      | Usuario que no puede acceder a mi cuenta. |
| **NECESITO**                     | Solicitar un enlace de recuperación y establecer una nueva contraseña. |
| **PARA**                         | Restaurar mi acceso a la plataforma. |
| **RELACIÓN CON OTRAS HISTORIAS** | Depende de "Inicio de sesión". |
| **PRECONDICIONES**               | - El correo registrado debe ser válido y accesible. |
| **CRITERIOS DE ACEPTACIÓN**      | 1. El sistema envía un enlace único de recuperación al correo del usuario. <br> 2. El enlace expira después de un periodo definido (30 minutos). <br> 3. El usuario puede establecer una nueva contraseña tras acceder al enlace. |
| **DEFINICIÓN DE HECHO (DoD)**    | 1. El correo de recuperación llega correctamente. <br> 2. El usuario puede establecer una nueva contraseña y acceder a su cuenta. |
| **NOTAS ADICIONALES**            | - El usuario debe: <br>   1. Acceder a la opción "¿Olvidaste tu contraseña?" desde la pantalla de inicio de sesión. <br>   2. Ingresar su correo electrónico registrado. <br>   3. Recibir un correo con un enlace para restablecer la contraseña. <br>   4. Seguir el enlace y establecer una nueva contraseña, cumpliendo con los requisitos de seguridad. <br>   5. Confirmar el cambio y acceder nuevamente a la plataforma con su nueva contraseña. |

---

| **NOMBRE**                       | CU04 - Gestión de perfil | 
|----------------------------------|----------------------|
| **USUARIO**                      | Usuario autenticado |
| **DESCRIPCIÓN**                  | Como usuario, puedo editar mi información personal (nombre, foto de perfil) para mantener mi cuenta actualizada. También puedo cambiar mi contraseña con un proceso de verificación para garantizar la seguridad de mi cuenta. |
| **YO COMO**                      | Usuario registrado que desea actualizar mis datos. |
| **NECESITO**                     | Modificar mi nombre, foto de perfil y contraseña. |
| **PARA**                         | Mantener mi información actualizada y segura. |
| **RELACIÓN CON OTRAS HISTORIAS** | Depende de "Inicio de sesión". |
| **PRECONDICIONES**               | - El usuario debe estar autenticado. |
| **CRITERIOS DE ACEPTACIÓN**      | 1. El sistema permite modificar datos personales y guardar los cambios. |
| **DEFINICIÓN DE HECHO (DoD)**    | 1. Los datos editados se actualizan en la base de datos sin errores. <br> 2. Confirmación visible de cambios exitosos. |
| **NOTAS ADICIONALES**            | - El usuario debe: <br>   1. Acceder a la sección "Perfil" desde el menú principal. <br>   2. Modificar los campos que desea actualizar (nombre, foto). <br>   3. Confirmar los cambios con un botón de "Guardar". <br>   4. Para el cambio de contraseña, recibir un correo de verificación antes de confirmar la nueva contraseña. <br>   5. Ver un mensaje de éxito indicando que los cambios se realizaron correctamente. |

---

| **NOMBRE**                       | CU05 - Vista y selección de actividades | 
|----------------------------------|----------------------|
| **USUARIO**                      | Usuario autenticado |
| **DESCRIPCIÓN**                  | Como usuario, puedo ver una lista y seleccionar actividades (Novenas Virtuales, Rituales Navideños, Radio Navideña, Recetas Colombianas) de la temporada para elegir en cuál participar. |
| **YO COMO**                      | Usuario que desea disfrutar de actividades navideñas. |
| **NECESITO**                     | Explorar las actividades disponibles y seleccionar la que más me interese. |
| **PARA**                         | Participar en actividades que me permitan disfrutar de la temporada. |
| **RELACIÓN CON OTRAS HISTORIAS** | Depende de "Inicio de sesión". |
| **PRECONDICIONES**               | - El usuario debe estar autenticado y acceder a la sección de actividades. |
| **CRITERIOS DE ACEPTACIÓN**      | 1. El sistema debe mostrar una lista de actividades destacadas. <br> 2. Cada actividad debe ser seleccionable y llevar al usuario a la interacción con la actividad. |
| **DEFINICIÓN DE HECHO (DoD)**    | 1. Las actividades son visibles y seleccionables sin errores. <br> 2. El usuario es redirigido correctamente al seleccionar una actividad. |
| **NOTAS ADICIONALES**            | - El diseño de la pantalla debe: <br>   1. Mostrar una sección que contenga la informacion del usuario y las categorías de actividades. <br>   2. En el resto de la página, debe mostrarse al inicio una sección con información general sobre la plataforma, explicando su propósito y funcionalidades principales. <br>   3. Al seleccionar una actividad, la sección central debe cambiar para mostrar el contenido de dicha actividad.|
