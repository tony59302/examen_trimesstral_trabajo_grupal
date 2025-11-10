<div style="text-align:center;">
  <img src="https://www.google.com/imgres?q=imagenes%20para%20el%20encabezado%20de%20programaci%C3%B3n&imgurl=https%3A%2F%2Fimg.freepik.com%2Fvector-premium%2Fprogramacion-cabecera-tipografica-educacion-ti-estudiantes-escriben-software-crean-codigo-computadora-script-codificacion-proyecto-web-aplicacion-ilustracion-vectorial_277904-13340.jpg&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Fconcepto-encabezado-tipografico-programador-idea-trabajar_9371517.htm&docid=CT4cwwY0Cd8bFM&tbnid=24f_CSI1B78ABM&vet=12ahUKEwi33p_ZzeiQAxX4RjABHSsUC_AQM3oECBoQAA..i&w=626&h=283&hcb=2&itg=1&ved=2ahUKEwi33p_ZzeiQAxX4RjABHSsUC_AQM3oECBoQAA" alt="Encabezado Proyecto Informática" width="100%">
</div>
#  Control de Préstamo de Material Escolar

Aplicación web desarrollada con **Angular**, **Node.js (Express)** y **PostgreSQL**.  
Su objetivo es **facilitar el registro y control de préstamos y devoluciones de materiales escolares** dentro de una institución educativa.

---

##  Índice

1. [ Descripción del proyecto](#-descripción-del-proyecto)
2. [ Objetivos](#-objetivos)
3. [ Arquitectura general](#-arquitectura-general)
4. [ Tecnologías utilizadas](#️-tecnologías-utilizadas)
5. [ Estructura del proyecto](#-estructura-del-proyecto)
6. [ Diseño de base de datos](#️-diseño-de-base-de-datos)
7. [ Instalación y ejecución](#-instalación-y-ejecución)
8. [ Endpoints del Backend](#-endpoints-del-backend)
9. [ Roles y responsabilidades (Scrum)](#-roles-y-responsabilidades-scrum)

---

##  Descripción del proyecto

En muchas instituciones educativas, los docentes o estudiantes solicitan materiales (libros, proyectores, marcadores, etc.) para actividades académicas.  
Sin embargo, **no existe un control centralizado** que indique quién tiene qué material, cuándo lo retiró o cuándo lo devolvió.  
Esto ocasiona **pérdidas, confusiones y falta de seguimiento** sobre los recursos disponibles.

El proyecto **Control de Préstamo de Material Escolar** busca resolver este problema mediante una aplicación web simple, intuitiva y funcional.

---

##  Objetivos

- Registrar los **préstamos** de materiales por persona.  
- Permitir **marcar devoluciones** de materiales.  
- Mostrar **listado y disponibilidad** de cada recurso.  
- Facilitar la **gestión de inventario** para el área administrativa.  

---

##  Arquitectura general

Frontend (Angular)
↓
Backend API (Express + Node.js)
↓
Base de Datos (PostgreSQL)

---

##  Tecnologías utilizadas

| Componente | Tecnología | Descripción |
|-------------|-------------|-------------|
| **Frontend** | Angular 18+ | Interfaz de usuario (SPA) |
| **Backend** | Node.js + Express | API RESTful |
| **Base de Datos** | PostgreSQL | Almacenamiento de datos |
| **Gestor DB** | PgAdmin | Administración visual de la base de datos |
| **Control de versiones** | Git / GitHub | Gestión colaborativa del código |
| **Metodología** | Scrum | Organización ágil del desarrollo |

---

##  Estructura del proyecto

```plaintext
project-root/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── db/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── environments/
│   ├── angular.json
│   └── package.json
│
├── db/
│   ├── schema.sql
│   ├── migrations/
│   ├── seeds/
│   └── scripts/
│
└── README.md


##  DISEÑO DE LA BASE DE DATOS
-- Tabla de materiales
CREATE TABLE materials (
TOCA PONER NUESTRA BASE DE DATOS

 ##  Instalación y ejecución

1️⃣ Clonar el repositorio
git clone https://TOCA PONER NUESTA DIRECCION
cd"  "
2️⃣ Configurar el Backendcd backend
npm install
cp .env.example .env
Editar el archivo .env con tus credenciales de base de datos PostgreSQL:
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=materiales_db
DB_HOST=localhost
DB_PORT=5432
PORT=3000

## Iniciar el servidor:

npm start

3️⃣Configurar el Frontend
cd ../frontend

4️⃣Acceder a la aplicación

Abrir en el navegador:
 http://localhost:4200


 ##   Endpoints del Backend


| Método   | Ruta                    | Descripción                          |
| -------- | ----------------------- | ------------------------------------ |
| **GET**  | `/api/materials`        | Lista todos los materiales           |
| **POST** | `/api/materials`        | Agrega un nuevo material             |
| **POST** | `/api/loans`            | Registra un préstamo                 |
| **PUT**  | `/api/loans/:id/return` | Marca un préstamo como devuelto      |
| **GET**  | `/api/loans`            | Lista todos los préstamos (opcional) |
## Roles y responsabilidades
| Rol                              | Responsabilidades                                                                |
| -------------------------------- | -------------------------------------------------------------------------------- |
| **Scrum Master ATHONY**                 | Coordinar el equipo, asignar tareas, controlar tiempos y validar entregas.       |
| **Frontend Developer JANDRY(Angular)** | Diseñar la interfaz visual, crear componentes y conectar con la API.             |
| **Backend Developer KEVIN (Express)**  | Crear rutas, controladores y lógica de negocio.                                  |
| **Dev-DB/QA THAYRON**                    | Diseñar la base de datos, escribir scripts SQL y realizar pruebas de integridad. |
