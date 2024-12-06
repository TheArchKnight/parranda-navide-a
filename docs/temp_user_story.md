

| **NOMBRE**                  | CU08 - Reproducción de música                                         |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario                                                              |
| **DESCRIPCIÓN**             | Como usuario, quiero acceder a una biblioteca musical con canciones típicas de diciembre y villancicos para disfrutar de la música navideña. |
| **YO COMO**                 | Usuario                                                              |
| **NECESITO**                | Acceder a una biblioteca musical con canciones típicas de diciembre y villancicos. |
| **PARA**                    | Disfrutar de la música navideña.                                     |
| **RELACIÓN CON OTRAS HISTORIAS** | CU09 - Reproducción de "Águila Roja"                               |
| **PRECONDICIONES**          | 1. El usuario ha iniciado sesión en la aplicación. <br> 2. El usuario ha navegado a la sección de música navideña. |
| **CRITERIOS DE ACEPTACIÓN** | - La biblioteca musical debe incluir canciones típicas de diciembre y villancicos. <br> - El usuario debe poder reproducir, pausar y cambiar canciones. <br> - La interfaz debe permitir buscar canciones por nombre o artista. |

---



| **NOMBRE**                  | CU09 - Reproducción de "Águila Roja"                                  |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario                                                              |
| **DESCRIPCIÓN**             | Como usuario, quiero asegurarme de que la canción "Águila Roja" esté disponible para reproducirla durante la parranda. |
| **YO COMO**                 | Usuario                                                              |
| **NECESITO**                | Asegurarme de que la canción "Águila Roja" esté disponible.          |
| **PARA**                    | Reproducirla durante la parranda.                                    |
| **RELACIÓN CON OTRAS HISTORIAS** | CU08 - Reproducción de música                                     |
| **PRECONDICIONES**          | 1. El usuario ha accedido a la biblioteca musical.                   |
| **CRITERIOS DE ACEPTACIÓN** | - La canción "Águila Roja" debe estar disponible en la biblioteca musical. <br> - El usuario debe poder buscar la canción directamente por su nombre. <br> - La reproducción de la canción debe iniciar sin retrasos perceptibles. |

---



| **NOMBRE**                  | CU10 - Animaciones inmersivas                                         |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario                                                              |
| **DESCRIPCIÓN**             | Como usuario, quiero participar en novenas con animaciones interactivas para recrear la experiencia tradicional. |
| **YO COMO**                 | Usuario                                                              |
| **NECESITO**                | Participar en novenas con animaciones interactivas.                  |
| **PARA**                    | Recrear la experiencia tradicional.                                  |
| **RELACIÓN CON OTRAS HISTORIAS** | CU11 - Lectura de oraciones <br> CU12 - Villancicos automáticos      |
| **PRECONDICIONES**          | 1. El usuario ha ingresado a la sección de novenas virtuales.        |
| **CRITERIOS DE ACEPTACIÓN** | - Las animaciones deben reflejar las escenas tradicionales de la novena. <br> - El usuario debe poder interactuar con los elementos animados. <br> - Las animaciones deben sincronizarse con las oraciones. |

---


| **NOMBRE**                  | CU11 - Lectura de oraciones                                           |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario                                                              |
| **DESCRIPCIÓN**             | Como usuario, quiero leer las oraciones de las novenas directamente desde la aplicación para seguir las tradiciones. |
| **YO COMO**                 | Usuario                                                              |
| **NECESITO**                | Leer las oraciones de las novenas directamente desde la aplicación.  |
| **PARA**                    | Seguir las tradiciones.                                              |
| **RELACIÓN CON OTRAS HISTORIAS** | CU10 - Animaciones inmersivas <br> CU12 - Villancicos automáticos      |
| **PRECONDICIONES**          | 1. El usuario ha accedido a una novena específica.                   |
| **CRITERIOS DE ACEPTACIÓN** | - Las oraciones deben estar disponibles en un formato legible. <br> - El usuario debe poder avanzar y retroceder entre las oraciones. <br> - Las oraciones deben sincronizarse con los villancicos automáticos. |

---


| **NOMBRE**                  | CU12 - Villancicos automáticos                                       |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario                                                              |
| **DESCRIPCIÓN**             | Como usuario, quiero que la aplicación reproduzca villancicos automáticamente mientras sigo las oraciones de la novena para acompañar la experiencia con música tradicional. |
| **YO COMO**                 | Usuario                                                              |
| **NECESITO**                | Que la aplicación reproduzca villancicos automáticamente.            |
| **PARA**                    | Acompañar la experiencia con música tradicional.                     |
| **RELACIÓN CON OTRAS HISTORIAS** | CU10 - Animaciones inmersivas <br> CU11 - Lectura de oraciones          |
| **PRECONDICIONES**          | 1. El usuario ha iniciado la lectura de una novena.                 |
| **CRITERIOS DE ACEPTACIÓN** | - Los villancicos deben reproducirse automáticamente al iniciar una novena. <br> - El usuario debe poder pausar y cambiar los villancicos. <br> - La música debe sincronizarse con las oraciones. |

---



| **NOMBRE**                  | CU13 - Registro de usuario                                           |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Nuevo usuario                                                         |
| **DESCRIPCIÓN**             | Como nuevo usuario, quiero crear una cuenta para acceder a todas las funcionalidades de la aplicación. |
| **YO COMO**                 | Nuevo usuario                                                         |
| **NECESITO**                | Crear una cuenta en la aplicación.                                   |
| **PARA**                    | Acceder a todas las funcionalidades de la aplicación.                |
| **RELACIÓN CON OTRAS HISTORIAS** | CU14 - Autenticación de usuario <br> CU15 - Recuperación de contraseña |
| **PRECONDICIONES**          | El usuario no tiene cuenta en la aplicación.                         |
| **CRITERIOS DE ACEPTACIÓN** | - El usuario debe completar un formulario con datos como correo y contraseña. <br> - El sistema debe validar que los datos sean correctos y únicos. <br> - El usuario debe recibir un correo de confirmación de registro. |

---


| **NOMBRE**                  | CU14 - Autenticación de usuario                                      |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario registrado                                                   |
| **DESCRIPCIÓN**             | Como usuario registrado, quiero iniciar sesión para acceder a mi cuenta y sus funcionalidades. |
| **YO COMO**                 | Usuario registrado                                                   |
| **NECESITO**                | Iniciar sesión en la aplicación.                                     |
| **PARA**                    | Acceder a mi cuenta y funcionalidades personalizadas.                |
| **RELACIÓN CON OTRAS HISTORIAS** | CU13 - Registro de usuario <br> CU15 - Recuperación de contraseña |
| **PRECONDICIONES**          | El usuario debe tener una cuenta activa en la aplicación.           |
| **CRITERIOS DE ACEPTACIÓN** | - El usuario debe ingresar su correo y contraseña. <br> - Si los datos son correctos, debe ser redirigido a su perfil. <br> - Si los datos son incorrectos, el sistema debe mostrar un mensaje de error. |

---


| **NOMBRE**                  | CU15 - Recuperación de contraseña                                     |
|-----------------------------|------------------------------------------------------------------------|
| **USUARIO**                 | Usuario registrado                                                   |
| **DESCRIPCIÓN**             | Como usuario registrado, quiero recuperar mi contraseña en caso de olvido para poder acceder a mi cuenta. |
| **YO COMO**                 | Usuario registrado                                                   |
| **NECESITO**                | Recuperar mi contraseña en caso de olvido.                            |
| **PARA**                    | Poder acceder a mi cuenta nuevamente.                                |
| **RELACIÓN CON OTRAS HISTORIAS** | CU13 - Registro de usuario <br> CU14 - Autenticación de usuario |
| **PRECONDICIONES**          | El usuario debe haber olvidado su contraseña.                        |
| **CRITERIOS DE ACEPTACIÓN** | - El usuario debe poder solicitar un correo para restablecer su contraseña. <br> - El sistema debe enviar un correo con un enlace de recuperación. <br> - El usuario debe poder establecer una nueva contraseña a través del enlace. |
