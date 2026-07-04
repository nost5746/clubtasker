# ClubTasker

ClubTasker is a small distributed web application for managing club events and tasks.

The project was created as a beginner-friendly full-stack pet project. It consists of a React frontend, an Express backend, separate backend modules, and Markdown documentation.

## Project Goal

The goal of this project is to create a small but understandable distributed web application.

The project demonstrates:

- a graphical user interface,
- a React frontend,
- an Express backend,
- API communication between frontend and backend,
- separate backend modules,
- a simple interactive feature,
- and step-by-step Markdown documentation.

## Main Features

- Users can view club events.
- Users can view club tasks.
- Users can see the backend connection status.
- Users can change the status of a task.
- Task status values are `open`, `in progress`, and `done`.

## Technologies

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development server |
| Node.js | JavaScript runtime |
| Express | Backend server and API routes |
| CORS | Allows frontend-backend communication |
| Markdown | Project documentation |
| Git | Version control |
| GitHub | Project repository |

## Project Structure

The project is divided into three main folders:

- `backend`
- `frontend`
- `docs`

The backend contains the Express server and API modules.

The frontend contains the React application.

The docs folder contains the project documentation.

## Backend Structure

The backend is located in the `backend` folder.

Important backend files and folders:

- `server.js`
- `routes/`
- `controllers/`
- `models/`
- `database/`

The backend uses a modular structure.

| Folder / File | Purpose |
|---|---|
| `server.js` | Starts the Express server and connects the routes |
| `routes/` | Defines API routes |
| `controllers/` | Handles requests and responses |
| `models/` | Stores and returns data |
| `database/` | Prepared for a later SQLite database |

## Frontend Structure

The frontend is located in the `frontend` folder.

Important frontend files:

- `src/App.jsx`
- `src/App.css`
- `src/index.css`

The frontend displays the graphical user interface and communicates with the backend through fetch requests.

## API Routes

The backend provides the following API routes:

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Simple backend start route |
| GET | `/api/health` | Checks whether the backend is running |
| GET | `/api/events` | Returns event data |
| GET | `/api/tasks` | Returns task data |
| PATCH | `/api/tasks/:id/status` | Updates the status of a task |

## How to Run the Project

The backend and frontend must run at the same time.

### Start Backend

Open a terminal in the project folder and run:

`cd backend`

`node server.js`

The backend runs at:

`http://localhost:3000`

### Start Frontend

Open a second terminal in the project folder and run:

`cd frontend`

`npm.cmd run dev`

The frontend runs at:

`http://localhost:5173`

## Documentation

The development process is documented step by step in the `docs` folder.

The documentation files are:

- `01-idea.md`: describes the project idea, problem, solution, and features.
- `02-ai-prompts.md`: documents the AI prompts used during the project.
- `03-gui-design.md`: explains the graphical user interface.
- `04-architecture.md`: explains the architecture and module structure.
- `05-development-steps.md`: documents the development process step by step.
- `06-code-explanation.md`: explains the most important code parts.
- `07-testing.md`: documents the tests and results.
- `08-screenshots.md`: documents the screenshots created during development.
- `09-requirements-traceability.md`: summarizes vision, mission, roadmap, technology, tech stack, and task-to-validation mapping.

## Screenshots

Screenshots were created during development to prove the process.

The screenshots show:

- the project structure,
- the development tools,
- the backend setup,
- the backend API output,
- the frontend setup,
- the final GUI,
- and the task status update feature.

## Current Limitations

The current version uses example data stored in JavaScript arrays.

This means that data changes are only stored while the backend is running.

A later version could use SQLite to store events, tasks, and users permanently.

## Possible Future Extensions

Possible future improvements are:

- SQLite database integration,
- user login,
- admin roles,
- creating new events from the frontend,
- creating new tasks from the frontend,
- assigning tasks to users,
- and filtering tasks by event.

## Summary

ClubTasker is a small distributed web application with a React frontend and an Express backend.

The project uses separate modules, API communication, an interactive task status feature, and detailed Markdown documentation.

This proves that the project structure, code, and development process were understood.