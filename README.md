#mi primer repositorio
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
##DISEÑO DE LA BASE DE DATOS
-- Tabla de materiales
CREATE TABLE materials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  quantity INT DEFAULT 1,
  available BOOLEAN DEFAULT TRUE
);

-- Tabla de préstamos
CREATE TABLE loans (
  id SERIAL PRIMARY KEY,
  material_id INT REFERENCES materials(id),
  borrower_name VARCHAR(100),
  loan_date DATE DEFAULT CURRENT_DATE,
  return_date DATE
);
 Instalación y ejecución
1️ Clonar el repositorio
git clone https://github.com/tu-usuario/control-materiales.git
cd control-materiales
2️  Configurar el Backendcd backend
npm install
cp .env.example .env
Editar el archivo .env con tus credenciales de base de datos PostgreSQL:
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=materiales_db
DB_HOST=localhost
DB_PORT=5432
PORT=3000
Iniciar el servidor:

npm start

3️ Configurar el Frontend
cd ../frontend

4️ Acceder a la aplicación

Abrir en el navegador:
 http://localhost:4200
  Endpoints del Backend
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
| **Scrum Master**                 | Coordinar el equipo, asignar tareas, controlar tiempos y validar entregas.       |
| **Frontend Developer (Angular)** | Diseñar la interfaz visual, crear componentes y conectar con la API.             |
| **Backend Developer (Express)**  | Crear rutas, controladores y lógica de negocio.                                  |
| **Dev-DB/QA**                    | Diseñar la base de datos, escribir scripts SQL y realizar pruebas de integridad. |
