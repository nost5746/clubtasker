# Requirements Traceability

## 1. Overview

This document summarizes the additional project requirements for ClubTasker.

It describes the project vision, mission, roadmap, technology, tech stack, and the connection between tasks, implementation, and validation.

The goal is to show that the project was not only coded, but also planned, implemented, tested, and documented in a structured way.

---

## 2. Vision

The vision of ClubTasker is to provide a simple digital tool for clubs, school groups, or small teams.

The application should help members organize events and tasks in one central place.

Instead of managing responsibilities through chat messages or verbal communication, ClubTasker gives users a clear overview of upcoming events and related tasks.

The long-term vision is a lightweight task and event management system that can be extended with user accounts, roles, and a database.

---

## 3. Mission

The mission of this project is to create a beginner-friendly but meaningful full-stack web application.

The project should demonstrate practical experience with:

- creating a graphical user interface,
- using Visual Studio Code,
- using command line tools,
- building a frontend,
- building a backend,
- separating code into modules,
- connecting frontend and backend through API routes,
- documenting the development process,
- validating the implementation through tests,
- and publishing the result on GitHub.

The mission is not only to create a working application, but also to prove that the code and structure were understood.

---

## 4. Roadmap

The project was developed in several steps.

| Phase | Description | Status |
|---|---|---|
| Phase 1 | Define project idea and documentation structure | Done |
| Phase 2 | Create backend with Express | Done |
| Phase 3 | Add backend API routes for events and tasks | Done |
| Phase 4 | Split backend into routes, controllers, and models | Done |
| Phase 5 | Create React frontend with Vite | Done |
| Phase 6 | Build custom ClubTasker GUI | Done |
| Phase 7 | Connect frontend with backend API | Done |
| Phase 8 | Add task status update feature | Done |
| Phase 9 | Test backend, frontend, and interaction | Done |
| Phase 10 | Publish project on GitHub | Done |

## Future Roadmap

Possible future improvements are:

- add an SQLite database,
- add user login,
- add admin and member roles,
- allow users to create new events,
- allow users to create new tasks,
- assign tasks to users,
- filter tasks by event,
- and store task status changes permanently.

---

## 5. Technology

ClubTasker uses a simple client-server architecture.

The frontend and backend are separate applications.

The frontend runs in the browser and is responsible for the user interface.

The backend runs as a separate server and provides API routes.

The frontend communicates with the backend through HTTP requests.

The backend returns data in JSON format.

This structure makes ClubTasker a small distributed web application.

---

## 6. Tech Stack

| Technology | Usage |
|---|---|
| Visual Studio Code | Code editor |
| PowerShell / CLI | Running project commands |
| Git | Version control |
| GitHub | Publishing the repository |
| Node.js | JavaScript runtime |
| npm | Package management |
| Express | Backend server and API routes |
| CORS | Allows frontend-backend communication |
| React | Frontend user interface |
| Vite | Frontend development environment |
| Markdown | Documentation |
| JSON | Data exchange format between frontend and backend |

---

## 7. Architecture

The project consists of three main folders:

- `backend`
- `frontend`
- `docs`

The backend is modularized into:

- `routes`
- `controllers`
- `models`
- `database`

The frontend is built with React and contains:

- `App.jsx`
- `App.css`
- `index.css`

The documentation is stored in Markdown files in the `docs` folder.

This structure separates code, documentation, frontend, backend, and future database logic.

---

## 8. Task to Implementation to Validation

The following table connects the main project tasks with their implementation and validation.

| Task | Implementation | Validation |
|---|---|---|
| Create project idea | `docs/01-idea.md` | Project idea documented |
| Document AI prompts | `docs/02-ai-prompts.md` | Prompts listed and explained |
| Create GUI concept | `docs/03-gui-design.md` and React frontend | GUI screenshot created |
| Define architecture | `docs/04-architecture.md` | Architecture documented |
| Create backend | `backend/server.js` | Backend started with `node server.js` |
| Add API route for events | `backend/routes/eventRoutes.js`, `eventController.js`, `eventModel.js` | Browser test at `/api/events` |
| Add API route for tasks | `backend/routes/taskRoutes.js`, `taskController.js`, `taskModel.js` | Browser test at `/api/tasks` |
| Modularize backend | Routes, controllers, and models separated | API still worked after modularization |
| Create frontend | React with Vite in `frontend` folder | Vite frontend started at `localhost:5173` |
| Connect frontend and backend | Fetch requests in `App.jsx` | Backend status showed `connected` |
| Display event data | Event cards in React frontend | Events visible in browser |
| Display task data | Task cards in React frontend | Tasks visible in browser |
| Add task status update | PATCH route and buttons in frontend | Task `Buy drinks` changed to `done` |
| Document testing | `docs/07-testing.md` | Test results documented |
| Add screenshots | `docs/08-screenshots.md` and screenshot folder | Screenshots uploaded to GitHub |
| Publish project | Git and GitHub repository | Repository visible online |

---

## 9. Validation Summary

The project was validated through manual tests.

The backend was tested by opening API routes in the browser.

The frontend was tested by opening the React application in the browser.

The connection between frontend and backend was tested through the backend status card.

The task status update was tested by clicking a button in the frontend and checking whether the status changed.

The GitHub repository was checked to confirm that the code, documentation, prompts, and screenshots were uploaded.

---

## 10. Conclusion

ClubTasker fulfills the additional requirements.

The project includes a vision, mission, roadmap, technology description, tech stack, implementation steps, validation steps, and a GitHub repository.

The documentation shows how each task was implemented and validated.

This proves that the project was developed in a structured and understandable way.