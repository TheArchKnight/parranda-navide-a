# Parranda Navideña

Este proyecto es una aplicación web que se ejecuta usando Docker Compose. El sistema incluye tres componentes principales:

- **Backend**: FastAPI (Python)
- **Frontend**: React
- **Base de datos**: Redis

## Requisitos

Antes de empezar, asegúrate de tener instalado Docker y Docker Compose en tu máquina.

- [Instalar Docker](https://docs.docker.com/get-docker/)
- [Instalar Docker Compose](https://docs.docker.com/compose/install/)

## Configuración

### 1. Clona el repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/TheArchKnight/parranda-navide-a.git
cd parranda-navide-a
```

### 2. Crea el archivo  `.env`

Copia el archivo de ejemplo de las variables de entorno:

    cp .env.example .env

Luego, abre el archivo `.env` y configura las siguientes variables según tu entorno:

    POSTGRES_USER=<tu_usuario>
    POSTGRES_PASSWORD=<tu_contraseña>
    POSTGRES_DB=parranda-<tu_db>
    MAIL_USERNAME=<tu_usuario_de_correo>
    MAIL_PASSWORD=<tu_contraseña_de_correo>
    MAIL_FROM=<direccion_de_correo>
    MAIL_PORT=<puerto_correo>
    MAIL_SERVER=<servidor_correo>
    MAIL_FROM_NAME=<nombre_de_correo>
    VITE_CLOUDINARY_CLOUD_NAME=<tu_cloud_name>
    VITE_CLOUDINARY_UPLOAD_PRESET=<tu_upload_preset>

### 3. Construcción y despliegue de los servicios con Docker

Una vez configuradas las variables de entorno, puedes construir y levantar todos los servicios (base de datos, backend y frontend) con Docker Compose:

    docker-compose up --build


Este comando descargará las imágenes necesarias, las construirá (si es necesario) y levantará los contenedores para los servicios definidos en el archivo `docker-compose.yml`.

### 4. Acceder a la aplicación

-   El **Frontend (React)** estará disponible en [http://localhost:3000](http://localhost:3000).
-   El **Backend (FastAPI)** estará disponible en [http://localhost:8000](http://localhost:8000).
-   **Redis** está configurado como base de datos, pero no tiene un puerto expuesto por defecto. Si necesitas acceder a él, puedes conectarte dentro de tu aplicación backend.

### 5. Parar los servicios

Para detener todos los contenedores, puedes ejecutar:

    docker-compose down

## Estructura del Proyecto

Este es un resumen de la estructura del proyecto:



    ├── backend/                # Código del backend (FastAPI)
    │   ├── Dockerfile           # Dockerfile del backend
    │   ├── app/                 # Código de la API FastAPI
    │   └── requirements.txt     # Dependencias del backend
    ├── frontend/               # Código del frontend (React)
    │   ├── Dockerfile           # Dockerfile del frontend
    │   └── package.json         # Dependencias del frontend
    ├── .env                    # Archivo de configuración de las variables de entorno
    ├── .env.example            # Archivo de ejemplo para las variables de entorno
    ├── docker-compose.yml      # Configuración de Docker Compose
    └── README.md               # Este archivo
## Variables de Entorno

El archivo `.env` contiene las siguientes variables de entorno:

### PostgreSQL

-   `POSTGRES_USER`: Usuario para la base de datos PostgreSQL.
-   `POSTGRES_PASSWORD`: Contraseña para la base de datos PostgreSQL.
-   `POSTGRES_DB`: Nombre de la base de datos PostgreSQL.

### Correo electrónico

-   `MAIL_USERNAME`: Usuario de correo electrónico.
-   `MAIL_PASSWORD`: Contraseña del correo electrónico.
-   `MAIL_FROM`: Dirección de correo electrónico del remitente.
-   `MAIL_PORT`: Puerto del servidor de correo.
-   `MAIL_SERVER`: Servidor de correo.
-   `MAIL_FROM_NAME`: Nombre que aparece en el remitente.

### Cloudinary (para la carga de imágenes)

-   `VITE_CLOUDINARY_CLOUD_NAME`: Nombre de tu cuenta de Cloudinary.
-   `VITE_CLOUDINARY_UPLOAD_PRESET`: El preset de carga que configuras en Cloudinary.

