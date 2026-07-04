# Development Steps

## 1. Overview

This document describes the development process of the ClubTasker application step by step.

The goal was to create a small distributed web application with:

- a React frontend,
- an Express backend,
- separate backend modules,
- API communication between frontend and backend,
- and clear Markdown documentation.

The development was done in small steps so that the structure and code can be explained and understood.

---

## 2. Project Folder

At the beginning, the main project folder was created.

Project folder:

`clubtasker`

Inside this folder, the following main folders were created:

- `backend`
- `frontend`
- `docs`

The initial project structure was:

`clubtasker/`

- `backend/`
- `frontend/`
- `docs/`
- `README.md`

This structure separates the application code from the documentation.

---

## 3. Project Documentation

The first documentation files were created in the `docs` folder.

The file `01-idea.md` describes:

- the project idea,
- the problem,
- the solution,
- the main features,
- and why the project is suitable as a medium-sized pet project.

The file `README.md` describes:

- the general project goal,
- the technologies used,
- the project structure,
- and the planned documentation files.

This step is important because the task requires the project to be documented step by step using Markdown files.

---

## 4. Tool Installation Check

Before coding, the required development tools were checked in the VS Code terminal.

The following tools were used:

| Tool | Purpose |
|---|---|
| Visual Studio Code | Code editor |
| Node.js | Runtime environment for JavaScript |
| npm | Package manager for JavaScript projects |
| Git | Version control and GitHub usage |

The following commands were used:

- `node -v`
- `npm.cmd -v`
- `git --version`

The terminal showed installed versions for all three tools. This proved that the development environment was ready.

---

## 5. Backend Initialization

The backend folder was opened in the terminal.

Command:

`cd backend`

Then the backend project was initialized with npm.

Command:

`npm.cmd init -y`

This created the file:

`backend/package.json`

The `package.json` file stores information about the backend project and its dependencies.

---

## 6. Backend Dependencies

The backend needs Express and CORS.

| Package | Purpose |
|---|---|
| `express` | Creates the backend server and API routes |
| `cors` | Allows the frontend to communicate with the backend |

The packages were installed with this command:

`npm.cmd install express cors`

After this step, the backend contained:

- `package.json`
- `package-lock.json`
- `node_modules/`

---

## 7. Backend Folder Structure

Several folders were created inside the backend folder.

The backend structure is:

- `server.js`
- `routes/`
- `controllers/`
- `models/`
- `database/`

The purpose of this structure is to separate the backend into clear modules.

| Folder / File | Purpose |
|---|---|
| `server.js` | Starts the Express server and connects the routes |
| `routes/` | Defines API routes |
| `controllers/` | Handles requests and responses |
| `models/` | Stores and returns data |
| `database/` | Prepared for a later SQLite database |

This modular structure makes the backend easier to understand and extend.

---

## 8. First Backend Server

The first backend server was created in the file:

`backend/server.js`

This file starts an Express server on port `3000`.

The first routes were:

- `/`
- `/api/health`
- `/api/events`
- `/api/tasks`

The backend was started with this command:

`node server.js`

The backend was then available at:

`http://localhost:3000`

---

## 9. Backend Test in Browser

The backend routes were tested in the browser.

The following URLs were opened:

- `http://localhost:3000`
- `http://localhost:3000/api/health`
- `http://localhost:3000/api/events`
- `http://localhost:3000/api/tasks`

The browser showed JSON data for events and tasks.

This proved that the backend was running correctly and returning data.

---

## 10. Backend Modularization

After the first backend test, the backend code was split into separate modules.

The data was moved into model files:

- `backend/models/eventModel.js`
- `backend/models/taskModel.js`

The request logic was moved into controller files:

- `backend/controllers/eventController.js`
- `backend/controllers/taskController.js`

The API route definitions were moved into route files:

- `backend/routes/eventRoutes.js`
- `backend/routes/taskRoutes.js`

The `server.js` file was updated so that it uses the separate route modules.

This step is important because the task requires the application to consist of separate modules.

---

## 11. Modular Backend Test

After the modularization, the backend was started again.

Command:

`node server.js`

The API routes were tested again in the browser:

- `http://localhost:3000/api/events`
- `http://localhost:3000/api/tasks`

Both routes still returned the correct JSON data.

This proved that the modular backend worked correctly.

---

## 12. Frontend Creation

The frontend was created with React and Vite.

The frontend folder was opened in the terminal.

Command:

`cd frontend`

Then the React project was created with Vite.

Command:

`npm.cmd create vite@latest . -- --template react`

During setup, `Oxlint` was selected as the linter.

The frontend project created several files and folders, including:

- `src/`
- `public/`
- `index.html`
- `package.json`
- `vite.config.js`

---

## 13. Frontend Start

The frontend was started with this command:

`npm.cmd run dev`

The frontend was then available at:

`http://localhost:5173`

At first, the default Vite start page was shown.

This proved that the React frontend was working.

---

## 14. ClubTasker Frontend Implementation

The default Vite page was replaced with a custom ClubTasker interface.

The main frontend file is:

`frontend/src/App.jsx`

The `App.jsx` file was changed so that it shows:

- a sidebar navigation,
- a dashboard section,
- the backend connection status,
- event cards,
- and task cards.

The frontend uses `fetch` requests to get data from the backend.

The CSS files were also updated:

- `frontend/src/App.css`
- `frontend/src/index.css`

The styling creates a dashboard layout with a dark sidebar and light content cards.

---

## 15. Parallel Backend and Frontend Run

The backend and frontend must run at the same time.

The backend runs at:

`http://localhost:3000`

The frontend runs at:

`http://localhost:5173`

Two terminals were used in VS Code.

Backend terminal:

- `cd backend`
- `node server.js`

Frontend terminal:

- `cd frontend`
- `npm.cmd run dev`

This setup proves that the project is a distributed application.

---

## 16. Final Frontend Test

The final frontend was opened in the browser at:

`http://localhost:5173`

The frontend showed:

- the ClubTasker sidebar,
- the dashboard section,
- the backend status `connected`,
- event cards,
- and task cards.

The frontend successfully loaded event and task data from the backend.

This proved that the distributed application worked correctly.

---

## 17. Screenshots

Screenshots were taken during the development process.

The screenshots show:

- the project folder structure,
- the documentation files,
- the installed tools,
- the backend initialization,
- the backend module structure,
- the backend API output,
- the frontend Vite start page,
- the final ClubTasker GUI,
- and the connected backend status.

These screenshots are useful as proof that the project was created step by step.

---

## 18. Summary

The project was developed step by step.

First, the folder structure and documentation were created.

Then the backend was created, tested, and modularized.

After that, the React frontend was created and connected to the backend.

The final result is a small distributed web application with separate modules and clear documentation.

---

## 19. Interactive Task Status Feature

After the first working frontend-backend connection, an interactive feature was added.

The goal of this feature was to make the application more useful and to prove that the frontend can also send data back to the backend.

The new feature allows the user to change the status of a task.

The possible task statuses are:

- `open`
- `in progress`
- `done`

The backend was extended with a new route:

`PATCH /api/tasks/:id/status`

The following backend files were changed:

- `backend/models/taskModel.js`
- `backend/controllers/taskController.js`
- `backend/routes/taskRoutes.js`

The frontend file `frontend/src/App.jsx` was also changed.

Buttons were added to each task card:

- `Open`
- `In progress`
- `Done`

When a button is clicked, the frontend sends a PATCH request to the backend.

The backend checks whether the new status is valid, updates the task, and sends the updated task back to the frontend.

The frontend then updates the displayed task list.

This feature proves that the application is not only able to load data from the backend, but also able to send changes from the frontend to the backend.